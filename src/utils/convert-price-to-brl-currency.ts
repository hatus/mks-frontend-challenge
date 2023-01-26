export function convertPriceToBrlCurrency(price: string): string {
  // return Number(price).toLocaleString('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // });

  return 'R$' + Number(price).toFixed(0);
}
