document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('messageForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = form.name.value.trim();
    const birthdate = form.birthdate.value;
    const gender = form.gender.value;
    const message = form.message.value.trim();

    const currentTime = new Date().toString();

    const displayText =
      `Current time : ${currentTime}\n` +
      'Nama : ${name}\n' +
      'Tanggal Lahir : ${birthdate}\n' +
      'Jenis Kelamin : ${gender}\n' +
      'Pesan : ${message}';

    document.getElementById("displayArea").textContent = displayText;
  });
});