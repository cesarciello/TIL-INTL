var slcDOM = (id) => document.querySelector(id);

const onChangeSelect = () => {
  const number = slcDOM("#myNumber").value;
  if (number) {
    setInputNumberValues();
  }
  const date = slcDOM("#date").value;
  if (date) {
    setInputDateValues();
  }
}

const resetInputs = () => {
    slcDOM('#myNumber').value = "";
    slcDOM('#NumFormat').value = "";
    slcDOM('#Currency').value = "";
    slcDOM('#date').value = "";
    slcDOM('#DateInput').value = "";
    slcDOM('#CustomInput').value = "";

    slcDOM('#languages').focus()
}