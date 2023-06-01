export function priceFormat(price: number) {
  const units = ["", "nghìn", "triệu", "tỷ"];
  const texts = ["", "nghìn", "triệu", "tỷ"];

  let unitIndex = 0;
  while (price >= 1000) {
    price /= 1000;
    unitIndex++;
  }

  return `${Number(price.toFixed(0)).toLocaleString("vi-VN")} ${
    texts[unitIndex]
  }`;
}
export function GetPricePerMeterText(price: number, meter: number) {
  const res = Number(Math.ceil(price / meter)).toFixed(0);
  console.log(res);
  return `${priceFormat(Number(res))}`;
}
export function GetMoneyText(n: string) {
  n = Number(n);
  if (n <= 0) return "0 đồng";
  n = Math.round(n * 10) / 10;
  let i = "",
    t = 0;
  return (
    n >= 1e9 &&
      ((t = Math.floor(n / 1e9)), (i += t + " tỷ "), (n = n - t * 1e9)),
    n >= 1e6 &&
      ((t = Math.floor(n / 1e6)), (i += t + " triệu "), (n = n - t * 1e6)),
    n >= 1e3 &&
      ((t = Math.floor(n / 1e3)), (i += t + " nghìn "), (n = n - t * 1e3)),
    (n = Math.floor(n)),
    n > 0 && (i += n + " đồng"),
    i.trim()
  );
}
