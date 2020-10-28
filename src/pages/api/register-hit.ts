import faunadb from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY as string,
  });

  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({
      message: 'Slug not provided',
    });
  }

  const docExists = await client.query(
    q.Exists(q.Match(q.Index('hits_by_slug'), slug))
  );

  if (!docExists) {
    await client.query(
      q.Create(q.Collection('hits'), {
        data: { slug, hits: 0 },
      })
    );
  }

  const document = await client.query<Record<string, any>>(
    q.Get(q.Match(q.Index('hits_by_slug'), slug))
  );

  await client.query(
    q.Update(document.ref, {
      data: {
        hits: document.data.hits + 1,
      },
    })
  );

  return res.status(200).json({
    hits: document.data.hits,
  });
};
