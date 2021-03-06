import InputTextValidations from './InputTextValidation';
import InputStrengthValidation from './InputStrengthValidation';

const OnInputChangeHandler = (event, anyForm, setAnyForm) => {
    
    let inputField = event.target.name;
    const inputType = event.target.type;
    const value = inputType === 'checkbox' ? event.target.checked : event.target.value;

    console.log(inputField);
    console.log(inputType);
    console.log(value);

    const copyAnyForm = JSON.parse(JSON.stringify(anyForm));
    let fieldObj = null;

    if(inputType === 'checkbox' && /[>]/.test(inputField)){
        const [parentName, childName] = inputField.split('>');
        inputField = parentName;
        fieldObj = copyAnyForm[parentName];
        fieldObj.checkBoxControls[childName].value = value;
    } else {
        fieldObj = copyAnyForm[inputField];
        fieldObj.value = value;
    }
    
    const { validations, strength } = fieldObj;
    fieldObj.isTouched = true;
    fieldObj.errors = InputTextValidations(validations, typeof value === 'string' ? value.trim(): value);
    fieldObj.isValid = fieldObj.errors.length === 0;
    if(strength){
        fieldObj.strength = InputStrengthValidation(strength, typeof value === 'string' ? value.trim(): value);
    }
    copyAnyForm[inputField] = fieldObj;
    
    setAnyForm(copyAnyForm);
}

export default OnInputChangeHandler;
