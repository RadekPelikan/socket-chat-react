const generateID = (items, N = 1000) => {
  const id = Math.floor(Math.random() * N);
  if (items.filter((item) => item.id === id).length === 0) return id;
  return generateID(items);
};

module.exports = generateID;
