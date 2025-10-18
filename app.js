// // let heading = document.getElementsByTagName("h1")[0];
// // heading.innerHTML = "change by javascript";
// // heading.style.textTransform = "capitalize";
// // heading.style.color = "blue";
// // heading.style.fontFamily = "sans-serif";
// // heading.style.textDecoration = "underline";
// function chanegText() {
//   let msg = document.getElementsByTagName("h1")[0];
//   msg.innerHTML = "<b>you click me 🔥</b>";
//   msg.style.textTransform = "capitalize";
//   msg.style.color = "blue";
//   msg.style.fontFamily = "sans-serif";
// }

// function showName(){
//   let firstInput = document.getElementById("firstInput").value;
//   let firstPara = document.getElementById("para");

//   if(firstInput === ""){
//     firstPara.textContent = "Please fill the input first!";
//   } else {
//     firstPara.textContent = `Welcome, ${firstInput} 😎`;
//   }

//   firstPara.classList.add("show");
// }




function showResult() {
  let nameInput = document.getElementById("nameInput").value.trim().toLowerCase();
  let emailInput = document.getElementById("emailInput").value.trim();
  let passwordInput = document.getElementById("passwordInput").value;
  let result = document.getElementById("result");

  if (!nameInput || !emailInput || !passwordInput) {
    result.innerText = "Oops! You missed something 👀";
    result.style.color = "red";
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput)) {
    result.innerText = "📧 Please Enter a Valid Email Address"
    result.style.color = "red";
  }
  else if (passwordInput.length < 6) {
    result.innerText = "🔥 Weak Password — Try Making It Stronger"
    result.style.color = "red";
  }
  else if (passwordInput.length > 6) {
    result.innerText = "⚠️ Password Too Long — Minimum 6 Characters Allowed"
    result.style.color = "red";
  }
  else {
    result.innerText = "✅ Account Created Successfully! 🎉"
    result.style.textTransform = "capitalize";
    result.style.color = "green";

  }
}

