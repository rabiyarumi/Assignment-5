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
      return ;
    } 
    else {
      // calculation
      const newDonatedBalance = donatedBalance + donateMoney;
      const newCurrentBalance = currentBalance - donateMoney;
     
      
    //   update balanaces
    document.getElementById('donated-balance-noakhali').innerText = newDonatedBalance;
    document.getElementById('current-balace').innerText = newCurrentBalance;

    document.getElementById("my_modal_1").showModal();
      
      console.log(
        "donated balanece",
        newDonatedBalance,
        "current balance",
        newCurrentBalance
      );
    }
  });
// donated-money-noakhali

//go to blog page
document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = "blog.html"
})
