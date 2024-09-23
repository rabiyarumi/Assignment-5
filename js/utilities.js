// common shared functions\\


// InputFieldValue
function getInputFieldValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    // const inputValueNumber = parseFloat(inputValue)
    return inputValue;
    
}


//Text Field Value
function getTextFieldValueById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}
