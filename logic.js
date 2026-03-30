function showSection(id) {
      document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
      });
      document.getElementById(id).classList.add('active');
    }
function sendMail(e){
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', e.target)
    .then(function(){
      alert("Message sent successfully!");
    }, function(error){
      alert("Failed to send message");
    });
}