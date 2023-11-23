const convertCurrencyToSign = (currency) => {
  if (currency === "gbp" || currency === "GBP") {
    return "£";
  } else if (currency === "eur" || currency === "EUR") {
    return "€";
  } else if (currency === "usd" || currency === "USD") {
    return "$";
  } else {
    return "";
  }
};

export default convertCurrencyToSign;
// export const convertPaymentPeriod = (time_period) => {
//   if (time_period === "month") {
//     return "Monthly";
//   } else if (time_period === "year") {
//     return "Yearly";
//   } else if (time_period === "week") {
//     return "Weekly";
//   } else {
//     return "";
//   }
// };
