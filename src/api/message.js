export const getLatestMessages = async startId => {
  const query = startId ? `?startId=${startId}` : '';
  const data = await fetch(
    `https://apis.xjtluwall.com/message${query}`
  ).then(res => res.json());
  return data.messages;
};
