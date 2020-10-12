import { NextApiRequest, NextApiResponse } from 'next';

let cache: Record<string, string>;
let cachedAt: number;

const cacheTimeLimit = 1000 * 60 * 60; // 1 hour

const getData = async (): Promise<Record<string, string>> => {
  if (cache && Date.now() - cachedAt < cacheTimeLimit) return cache;

  const response = await fetch('https://api.github.com/emojis');

  const data = await response.json();

  cache = data;
  cachedAt = Date.now();

  return cache;
}

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const data = await getData();

  return res.status(200).json(data);
};
