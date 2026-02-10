export const getFormatPrice = (currency: string, amount: number) => {
  return `${currency} ${Math.abs(amount).toLocaleString('en-MY', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
