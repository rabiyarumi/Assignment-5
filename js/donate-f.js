document.getElementById('Donate-money-feni').addEventListener('click', function(event){
    event.preventDefault();

        //gatting the value
        const donateMoney = getInputFieldValueById("input-money-feni");
        const donatedBalance = getTextFieldValueById("donated-balance-feni");
        const currentBalance = getTextFieldValueById("current-balace");
        console.log(donateMoney, donatedBalance, currentBalance);


        // conditions
        if (
            donateMoney <= 0 ||
            isNaN(donateMoney) ||
            donateMoney > currentBalance ||
            donateMoney === ""
          ) {
            alert("Invalid Donation amount");
            return;
          } 
          else {
            // calculation
            const newDonatedBalance = donatedBalance + donateMoney;
            const newCurrentBalance = currentBalance - donateMoney;
      
            //   update balanaces
            document.getElementById("donated-balance-feni").innerText =
              newDonatedBalance;
            document.getElementById("current-balace").innerText = newCurrentBalance;
      
            document.getElementById("my_modal_2").showModal();
      
            //history
      
            const historyBox = document.createElement("div");
            historyBox.className =
              "bg-white p-3 rounded-lg border-[1px] border-slate-300 mb-4 ";
      
            historyBox.innerHTML = `
      
            <h4 class=" text-black text-lg font-bold mb-2" >${donateMoney.toFixed(
              2
            )} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
      
            <p class="text-sm text-gray-500 font-extralight"> 
            Date: ${new Date().toString()}
            </p>
            `;
      
            const historyContainer = document.getElementById("history-section");
            historyContainer.insertBefore(historyBox, historyContainer.firstChild);
            
          }
    

})