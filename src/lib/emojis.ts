export const getEmojis = async (): Promise<Record<string, string>> => {
  const response = await fetch('https://api.github.com/emojis', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
  const data = await response.json();
  return data;
};
