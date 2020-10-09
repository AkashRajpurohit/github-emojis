export default async function Fetcher(args: RequestInfo) {
  const res = await fetch(args);

  return res.json();
}