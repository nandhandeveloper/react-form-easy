const OnShowPasswordClicked = (propName, anyForm, setAnyForm) => {
    const copyAnyForm = JSON.parse(JSON.stringify(anyForm));
    const fieldObj = copyAnyForm[propName];
    fieldObj.showPassword = !fieldObj.showPassword;
    copyAnyForm[propName] = fieldObj;
    setAnyForm(copyAnyForm);
}

export default OnShowPasswordClicked;
