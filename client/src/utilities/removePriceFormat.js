const removePriceFormat = (original) =>
  parseFloat(original.replace(/[^\d.]/g, ''));

export default removePriceFormat;
