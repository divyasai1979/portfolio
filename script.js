
    function submitForm(event) {
      event.preventDefault();
      const name = document.getElementById('nameInput').value;
      const email = document.getElementById('emailInput').value;
      const message = document.getElementById('messageInput').value;

      console.log("Form submitted:", name, email, message);
      alert("Thank you for contacting me, " + name + "!");
    }