document.getElementById('button-login')
 .addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Login Button clicked');
  const phoneNumber = document.getElementById('phn-nmbr').value;
  const pinNumber = document.getElementById('pin-nmbr').value;
  if (phoneNumber === '3' && pinNumber === '1234') {
   console.log('You are logged in');
   window.location.href = '/home.html';
  }
  else {
   alert('Incorrect phone or pin');
  }
 })