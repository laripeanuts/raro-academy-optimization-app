export const formataHora = (date: Date) => Intl.DateTimeFormat(
  'pt-BR',
  { timeStyle: 'medium' }
)
.format(date);

export const formataData = (date: Date) => Intl.DateTimeFormat(
  'pt-BR',
  { dateStyle: 'short' }
)
.format(date);

export const formataMoeda = (valor: number) =>  new Intl.NumberFormat(
  'pt-BR',
  { style: 'currency', currency: 'BRL' }
)
.format(valor)