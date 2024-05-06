document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // name can't contain numbers or symbols
    if (name.match(/\d/) || name.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      alert('Name must not contain numbers or symbols!');
      event.preventDefault();
    }
    // Email must be a valid email address
    else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert('Email must be a valid email address!');
      event.preventDefault();
    }
    // Message must be at least 10 characters
    else if (message.length < 10) {
      alert('Message must be at least 10 characters!');
      event.preventDefault();
    } else {
        alert('Form submitted!');
    }
  });