class FormmaterDate {
    formmater = (lang) => new Intl.DateTimeFormat(lang);
    formmaterCustom = (lang) =>
      new Intl.DateTimeFormat(lang, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
}

const getDatepickerValue = () => slcDOM("#date").value;

const parseDate = (value) => new Date(value);

const formatDate = (value) => {
  const myFormatter = new FormmaterDate().formmater(getLeanguage());
  return myFormatter.format(value);
};

const formmatDateCustom = (value) => {
  const myFormatter = new FormmaterDate().formmaterCustom(getLeanguage());
  return myFormatter.format(value);
};

const getFormatDate = () => {
  const datepickerValue = getDatepickerValue();
  const date = parseDate(datepickerValue || new Date());
  return date;
};

const setInputDate = () => {
  slcDOM("#DateInput").value = formatDate(getFormatDate());
};

const setInputDateCustom = () => {
  slcDOM("#CustomInput").value = formmatDateCustom(getFormatDate());
};

const setInputDateValues = () => {
  setInputDate();
  setInputDateCustom();
};