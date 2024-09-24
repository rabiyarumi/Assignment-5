
//  Tab swetching functionalities

const donateTab = document.getElementById('donate-tab');
const historyTab = document.getElementById('history-tab');



historyTab.addEventListener('click', function(){
  applyHistoryTabStyles();
  showSectionById('history-section');
})

donateTab.addEventListener('click', function(){
  applyDonateTabStyles();
  showSectionById('donation-section');
})
