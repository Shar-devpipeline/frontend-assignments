class User {
  constructor(firtName, lastName, email, password, balance = 0.0) {
    this.firtName - firtName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.balance = balance;
    this.transactions = [];
  }

  addTransaction(type, amount) {
    this.transactions.push({ type, amount });
    updateTransactionHistory(type, amount);
  }
}

const users = [
  new User("Shar", "Hess", "s.com", "123"),
  new User("Jill", "Jonese", "j.com", "123"),
  new User("Harry", "Henry", "h.com", "123"),
];

let loggedInUser = null;

function toggleVisibility(elementId, shouldshow) {
  document.getElementById(elementId).classList.toggle("hidden", !shouldshow);
}

function updateTextContent(elementId, text) {
  document.getElementById(elementId).textContent = text;
}

function showBalance() {
  if (loggedInUser) {
    updateTextContent(
      "balance-display",
      `Your balance is $${loggedInUser.balance.toFixed(2)}`
    );
  }
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    loggedInUser = user;
    toggleVisibility("login-section", false);
    toggleVisibility("atm-menu", true);
    toggleVisibility("transaction-history", true);
    showBalance();
  } else {
    toggleVisibility("login-error", true);
  }
}

function logout() {
  ["atm-menu", "transaction-history", "receipt-section"].forEach((id) =>
    toggleVisibility(id, false)
  );
  document.getElementById("transaction-list").innerHTML = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  loggedInUser = null;
  toggleVisibility("login-section", true);
}
function toggleTransaction(type) {
  toggleVisibility("deposit-section", type === "deposit");
  toggleVisibility("withdraw-section", type === "withdraw");
}

function completeTransaction(type) {
  const amount = parseFloat(document.getElementById(`${type}-amount`).value);
  const errorId = `${type}-error`;
  const errorCondition =
    isNaN(amount) ||
    amount <= 0 ||
    (type === "withdraw" && amount > loggedInUser.balance);

  if (errorCondition) {
    toggleVisibility(errorId, true);
  } else {
    toggleVisibility(errorId, false);
    loggedInUser.balance += type === "deposit" ? amount : -amount;
    loggedInUser.addTransaction(
      type === "deposit" ? "Deposit" : "Withdraw",
      amount
    );
    showBalance();
    toggleVisibility(`${type}-section`, false);
  }
}

function updateTransactionHistory(type, amount) {
  const transactionList = document.getElementById("transaction-list");
  const transactionItem = document.createElement("li");
  transactionItem.textContent = `${type}: $${amount.toFixed(2)}`;
  transactionList.appendChild(transactionItem);
}
