declare global {
  var __balance: number | undefined;
}

globalThis.__balance ??= 1245.8;

export const getBalance = () => globalThis.__balance!;
export const deductBalance = (amount: number) => {
  globalThis.__balance! -= amount;
};
