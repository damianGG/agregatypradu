const currency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PL' }).format(amount);
};

export default currency;
