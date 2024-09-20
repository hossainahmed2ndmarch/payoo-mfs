document.getElementById('btn-add-money')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const addMoneyInput = document.getElementById('input-add-money').value;
  const pin = document.getElementById('input-pin').value;
  if (pin === '1234') {
   const currentBalance = document.getElementById('current-balance').innerText;
   const addMoneyNumber = parseFloat(addMoneyInput);
   const currentBalanceNumber = parseFloat(currentBalance);
   const newBalance = addMoneyNumber + currentBalanceNumber;
   document.getElementById('current-balance').innerText = newBalance;
  }
  else {
   alert('Failed to add money!Please try again.')
  }
 })