export const getRandomVideos = () => {
  const urls = [
    'https://www.youtube.com/watch?v=rR4n-0KYeKQ',
    'https://www.youtube.com/watch?v=evH-iGPkVok',
    'https://www.youtube.com/watch?v=pBcYj14LSXY',
    'https://www.youtube.com/watch?v=RE-dLbNOkf4',
    'https://www.youtube.com/watch?v=9tDssh5lr40',
    'https://www.youtube.com/watch?v=t9TfgMM7Xto',
    'https://www.youtube.com/watch?v=XOa_3w3fbQQ',
    'https://www.youtube.com/watch?v=7sU4pg6yjTE',
    'https://www.youtube.com/watch?v=Tqth0fKo0_g',
    'https://www.youtube.com/watch?v=MaolIxfz7NE',
    'https://www.youtube.com/watch?v=VqrP4-FSvfU',
    'https://www.youtube.com/watch?v=G0S6S9Sks70',
    'https://www.youtube.com/watch?v=s4HHvDYsVnc',
    'https://www.youtube.com/watch?v=rxUm-2x-2dM',
    'https://www.youtube.com/watch?v=MaolIxfz7NE',
  ];

  // eslint-disable-next-line no-plusplus
  for (let i = urls.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [urls[i], urls[j]] = [urls[j], urls[i]];
  }

  return urls.slice(0, 3);
};
