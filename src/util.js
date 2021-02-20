export default function formatCurrency(num) {
  return 'NGN ' + Number(num.toFixed(1)).toLocaleString() + ' ';
}
