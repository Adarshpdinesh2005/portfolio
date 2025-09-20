document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_r1bnko9", "template_2rqnrpx", this, {
    publicKey: "ByAlioUXpN5pGKMZw", // ✅ must be passed
  })
  .then(() => {
    document.getElementById("form-status").innerText = "✅ Message sent successfully!";
  })
  .catch((error) => {
    document.getElementById("form-status").innerText = "❌ Failed to send message. Try again.";
    console.error("FAILED...", error);
  });
});
