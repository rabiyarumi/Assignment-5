// Donation Function for noakhli

document
  .getElementById("Donate-money-noyakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //gatting the value
    const donateMoney = getInputFieldValueById("input-money-noakhali");
    const donatedBalance = getTextFieldValueById("donated-balance-noakhali");
    const currentBalance = getTextFieldValueById("current-balace");
    // console.log(donateMoney, donatedBalances, currentBalance);

    // conditions
    if (
      donateMoney <= 0 ||
      isNaN(donateMoney) ||
      donateMoney > currentBalance ||
      donateMoney === ""
    ) {
      alert("Invalid Donation amount");
      return;
    } else {
      // calculation
      const newDonatedBalance = donatedBalance + donateMoney;
      const newCurrentBalance = currentBalance - donateMoney;

      //   update balanaces
      document.getElementById("donated-balance-noakhali").innerText =
        newDonatedBalance;
      document.getElementById("current-balace").innerText = newCurrentBalance;

      document.getElementById("my_modal_1").showModal();

      //history

      const historyBox = document.createElement("div");
      historyBox.className =
        "bg-white p-3 rounded-lg border-[1px] border-slate-300 mb-4 ";

      historyBox.innerHTML = `

      <h4 class=" text-black text-lg font-bold mb-2" >${donateMoney.toFixed(
        2
      )} Taka is Donated for Flood Survivor at Noakhali, Bangladesh</h4>

      <p class="text-sm text-gray-500 font-extralight"> 
      Date: ${new Date().toString()}
      </p>
      `;

      const historyContainer = document.getElementById("history-section");
      historyContainer.insertBefore(historyBox, historyContainer.firstChild);


      
    }
  });


  //------------------------------------
//go to blog page
document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});

