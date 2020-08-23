const InputStrengthValidation = (strengthObj, inputValue) => {
    const copyStrength = JSON.parse(JSON.stringify(strengthObj));
    for (let strength in copyStrength) {
        const {regEx} = copyStrength[strength];
        const findList = inputValue.match(new RegExp(regEx, 'g'));
        if(findList && findList.length > 0){
            copyStrength[strength]['isValid'] = true;           
        } else {
            copyStrength[strength]['isValid'] = false;
        }
    }  
    return copyStrength;
}

export default InputStrengthValidation;