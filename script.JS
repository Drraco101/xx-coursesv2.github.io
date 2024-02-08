// applied only to home page
$(document).ready(function() {
  $(".tc-p").hide();
  
  $(".tc-image").hover(function() {
    $(this).siblings(".tc-p").stop(true, true).slideToggle("slow");
  });
});

$(document).ready(function() {
  $(".c-p").hide();
  
  $(".c-col").hover(function() {
    $(this).find(".c-p").stop(true, true).fadeToggle("slow", "linear");
  });
});
// applied only to ContactUs
function validateForm() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phoneNumber = document.getElementById('phoneNumber').value.trim();
  var message = document.getElementById('message').value.trim();
  var isValid = true;

  nameError.innerHTML = '';
  emailError.innerHTML = '';
  phoneError.innerHTML = '';
  messageError.innerHTML = '';

  if (name === '') {
    document.getElementById('nameError').innerHTML = 'Please enter your name';
      isValid = false;
  }

  if (email === '') {
      emailError.innerHTML = 'Please enter your email';
      isValid = false;
  } else if (!isValidEmail(email)) {
      document.getElementById('emailError').innerHTML = 'Please enter a valid email address';
      isValid = false;
  }

  if (phoneNumber === '') {
      phoneError.innerHTML = 'Please enter a phone number';
      isValid = false;
  } else if (!isValidNumber(phoneNumber)) {
    document.getElementById('phoneError').innerHTML = 'Please enter a valid phone number';
      isValid = false;
  }

  if (message === '') {
    document.getElementById('messageError').innerHTML = 'Message is required';
      isValid = false;
  }

  if (!isValid) {
      return false;
  }

  document.getElementById("contactForm").submit();
  alert('Form submitted successfully!');
  return true;
}

function isValidEmail(email) {

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
// applied only to register
checkbox.addEventListener("click", () => {
  console.log("Checkbox clicked!");
  if (document.getElementById("checkbox").checked) {
    document.getElementById("basic").innerHTML = "&dollar;19.99";
    document.getElementById("professional").innerHTML = "&dollar;24.99";
    document.getElementById("master").innerHTML = "&dollar;39.99";
  } else {
    document.getElementById("basic").innerHTML = "&dollar;199.99";
    document.getElementById("professional").innerHTML = "&dollar;249.99";
    document.getElementById("master").innerHTML = "&dollar;399.99";
  }
});

function validateRegistrationForm() {
  var name2 = document.getElementById('name2').value.trim();
  var email2 = document.getElementById('email2').value.trim();
  var phoneNumber2 = document.getElementById('phoneNumber2').value.trim();
  var age = document.getElementById("age").value.trim();
  var plan = document.getElementById("plan").value.trim();
  var isValid = true;

  nameError2.innerHTML = '';
  emailError2.innerHTML = '';
  phoneError2.innerHTML = '';
  ageError.innerText = '';
  planError.innerText = '';

  if (name2 === '') {
      document.getElementById('nameError2').innerHTML = 'Please enter your name';
      isValid = false;
  }

  if (email2 === '') {
      emailError2.innerHTML = 'Please enter your email';
      isValid = false;
  } else if (!isValidEmail(email2)) {
      document.getElementById('emailError2').innerHTML = 'Please enter a valid email address';
      isValid = false;
  }

  if (phoneNumber2 === '') {
      phoneError2.innerHTML = 'Please enter a phone number';
      isValid = false;
  } else if (!isValidNumber(phoneNumber2)) {
      document.getElementById('phoneError2').innerHTML = 'Please enter a valid phone number';
      isValid = false;
  }

  if (isNaN(age) || age < 18) {
      document.getElementById("ageError").innerText = "Please enter a valid age (must be 18 or older)";
      isValid = false;
  }

  if (plan === "") {
      document.getElementById("planError").innerText = "Please select a plan";
      isValid = false;
  }

  if (isValid) {
      alert('Form submitted successfully!');
      document.getElementById("registrationForm").submit();
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
