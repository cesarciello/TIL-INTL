class FormmaterNumber {
  formmater = (lang) => new Intl.NumberFormat(lang);
  formmaterCurrency = (lang, currency) =>
    new Intl.NumberFormat(lang, { style: "currency", currency });
}

class FormmaterFactory {
  formmaterCurrency(lang) {
    let currency;
    if (lang == "pt-BR") {
      currency = "BRL";
    } else if (lang === "en-US") {
      currency = "USD";
    } else if (lang === "ja-JP") {
      currency = "JPY";
    } else if (lang === "ar") {
      currency = "AED";
    } else {
      currency = "";
    }
    return new FormmaterNumber().formmaterCurrency(lang, currency);
  }
}

const getLeanguage = () => slcDOM("#languages").value;

const getInputValue = () => slcDOM("#myNumber").value;

const parseNumber = (value) => Number(value.replace(",", "."));

const formatNumber = (value) => {
  const myFormatter = new FormmaterNumber().formmater(getLeanguage());
  return myFormatter.format(value);
};

const getFormatNumber = () => {
  const inputValue = getInputValue();
  const value = parseNumber(inputValue || "0");
  return value;
};

const setInputNumber = () => {
  slcDOM("#NumFormat").value = formatNumber(getFormatNumber());
};

const formatCurrency = (value) => {
  const myFormatter = new FormmaterFactory().formmaterCurrency(getLeanguage());
  return myFormatter.format(value);
};

const setInputCurrency = () => {
  slcDOM("#Currency").value = formatCurrency(getFormatNumber());
};

const setInputNumberValues = () => {
  setInputNumber();
  setInputCurrency();
};

// const formatInput = () => {
//     console.log('here');
//     const oldValue = slcDOM("#myNumber").value;
//     const myFormatter = new FormmaterNumber().formmater(getLeanguage());
//     slcDOM("#myNumber").value = myFormatter.format(oldValue);
// }