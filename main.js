function redirect() {
  var response = document.getElementById('answer').value;
  if (response === "Yes") {
    window.location.href = "thankyou.html";
  } else {
    window.location.href = "https://www.google.com";
  }
  return false;
}
