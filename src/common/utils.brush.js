function makeBrushButtonDateFormat(proxyDate) {
  const date = new Date(proxyDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}
// eslint-disable-next-line import/prefer-default-export
export { makeBrushButtonDateFormat };
