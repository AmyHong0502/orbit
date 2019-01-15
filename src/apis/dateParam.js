const getDateString = (difference = 0) => {
  const today = new Date();
  const dateString = new Date(new Date().setDate(today.getDate() + difference));
  return `${dateString.getFullYear()}-${dateString.getMonth() +
    1}-${dateString.getDate()}`;
};

export default getDateString;
