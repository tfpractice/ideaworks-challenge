const runway = {
  img: '/images/runway.png',
  date: 'FEBRUARY 10 2017',
  text: 'Bureaux exquisite delightful carefully curated soft power.',
  author: 'LOREM IPSUM',
};

export const links = Array(6)
  .fill(runway)
  .map((e, id) => ({ id, ...e }));
