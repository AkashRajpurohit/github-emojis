import { NextApiRequest, NextApiResponse } from 'next';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch('https://api.github.com/emojis');

  const data = await response.json();

  return res.status(200).json(data);
};
