function toDollars() {
    let dollars = document.getElementById('range').value;
    document.getElementById('output').value = '$' + dollars;
}

function thankYou() {
  let response = document.getElementById('answer').value;
  let donation = document.getElementById('range').value;
  if (response === "Yes") {
    if (donation > 0) {
      alert("Thank you for your generous donation, and pledge. DON'T FORGET TO VOTE ON NOVEMBER 6TH!");
    } else {
      alert("Thank you for your pledge. DON'T FORGET TO VOTE ON NOVERMBER 6TH!");
    }
  } else if (response === "No"){
    window.location.href = "https://www.google.com";
  }
}
