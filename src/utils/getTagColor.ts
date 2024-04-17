export const getTagColor = (idx) => {
  const colors = ['#B8A0FF', '#6198EB', '#FF8EBD', '#F0B55C', '#8ACE95'];
  const index = Math.floor(idx % colors.length);
  return colors[index];
};
