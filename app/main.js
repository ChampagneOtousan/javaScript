function depositMoney() {
  let amount = prompt("How much do you want to deposit?")
  let bal = document.querySelector("#bank-balance")
  let currentBal = bal.innerText
  let total = parseInt(currentBal) + parseInt(amount)
  bal.innerText = total
  history.innerHTML += "<p>You deposited" + amount + "</p>"
}

function withdrawMoney() {
  let amount = prompt("How much do you want to withdraw?")
  let history = document.querySelector("#history")
  let OD = document.querySelector("#odProtect")
  let bal = document.querySelector("#bank-balance")
  let currentBal = bal.innerText
  let total = parseInt(currentBal) - parseInt(amount)
  if (OD.checked() == true) {
    bal.innerText = bal
    alert("Overdraft Prevented")
  }
  if (total <= 0) {
    bal.classList.add("negative-balance")
  }
  bal.innerText = total
  if (total <= 0) {
    bal.classList.add("negative-balance")
  }
  history.innerHTML += "<p>You withdrew" + amount + "</p>"
}
