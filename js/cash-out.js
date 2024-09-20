document.getElementById('btn-cash-out')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const cashOutInput = document.getElementById('input-cash-out').value;
  const cashOutPin = document.getElementById('cash-out-pin').value;
  if (cashOutPin === '1234') {
   const currentBalance = document.getElementById('current-balance').innerText;
   const currentBalanceNumber = parseFloat(currentBalance);
   const cashOutNumber = parseFloat(cashOutInput);
   const newBalance = currentBalanceNumber - cashOutNumber;
   document.getElementById('current-balance').innerText = newBalance;
  }
  else{
   alert('Cash out failed!Please try again later.')
  }
 })