export const getTagColor = () => {
  const colors = ['#B8A0FF', '#6198EB', '#FF8EBD', '#F0B55C', '#8ACE95'];
  let index = Math.random() * 4;
  index = Math.floor(index);
  return colors[index];
};
