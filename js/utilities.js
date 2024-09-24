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


// switch tab

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    //show the provided id
    document.getElementById(id).classList.remove('hidden');
}




//history tab style function

function applyHistoryTabStyles() {
    // Apply styles to historyTab (using Tailwind's lime-300)
    historyTab.classList.add("text-[#111111]", "bg-lime-300");
    historyTab.classList.remove("bg-white", "border-[2px]", "border-[#bab9b9b3]");
  
    // Reset styles for donateTab
    donateTab.classList.add("text-slate-600", "bg-white", "border-[2px]", "border-[#bab9b9b3]");
    donateTab.classList.remove("bg-lime-300", "text-black");
  }

//Donate tab style function

function applyDonateTabStyles() {
    // Apply styles to donateTab (using Tailwind's lime-300)
    donateTab.classList.add("text-[#111111]", "bg-lime-300");
    donateTab.classList.remove("bg-white", "border-[2px]", "border-[#bab9b9b3]");
  
    // Reset styles for historyTab
    historyTab.classList.add("text-slate-600", "bg-white", "border-[2px]", "border-[#bab9b9b3]");
    historyTab.classList.remove("bg-lime-300", "text-black");
  }