export const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace('$', '').trim());
  };