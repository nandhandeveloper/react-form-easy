import InputTextValidations from './InputTextValidation';
const OnInputChangeHandler = (event, anyForm, setAnyForm) => {
    
    const inputField = event.target.name;
    const inputType = event.target.type;
    const value = inputType === 'checkbox' ? event.target.checked : event.target.value;

    const copyAnyForm = JSON.parse(JSON.stringify(anyForm));

    const fieldObj = copyAnyForm[inputField];
    const { validations } = fieldObj;
    fieldObj.isTouched = true;
    fieldObj.value = value;

    fieldObj.errors = InputTextValidations(validations, typeof value === 'string' ? value.trim(): value);
    fieldObj.isValid = fieldObj.errors.length === 0;
    // console.log(fieldObj);
    copyAnyForm[inputField] = fieldObj;
    
    setAnyForm(copyAnyForm);
}

export default OnInputChangeHandler;
