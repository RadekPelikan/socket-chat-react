export const generateID = (items) => {
  const id = Math.floor(Math.random() * 100_000_000);
  if (items.filter((item) => item.id === id).length === 0) return id;
  return generateID(items);
};
