document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_r1bnko9", "template_2rqnrpx", this)
    .then(function() {
      document.getElementById("form-status").innerText = "✅ Message sent successfully!";
    }, function(error) {
      document.getElementById("form-status").innerText = "❌ Failed to send message. Try again.";
      console.log("FAILED...", error);
    });
});
