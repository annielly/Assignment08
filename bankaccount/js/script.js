/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
var noName = true, acc, amount, invalidInput;


function BankAccount(ownerName) {
    "use strict";
    var owner = ownerName, balance = 0;
    return {
        withdrawal: function (withdrawalAmount) {
            balance -= withdrawalAmount;
        },
        deposit: function (depositAmount) {
            balance += depositAmount;
        },
        getBalance: function () {
            return balance;
        },
        getOwnerName: function () {
            return owner;
        }
    };
}

function vDeposit(msg) {
    "use strict";
    var input = parseFloat(window.prompt(msg));
    if (isNaN(input)) {
        window.alert("Enter a valid amount.");
        invalidInput = true;
    } else {
        amount = input;
        invalidInput = false;
    }
}

function vWithdrawal(msg) {
    "use strict";
    var input = parseFloat(window.prompt(msg));
    if (isNaN(input)) {
        window.alert("Enter a valid amount.");
        invalidInput = true;
    } else if (input > acc.getBalance()) {
        window.alert("Your withdrawal exceeded your account balance.");
        invalidInput = true;
    } else {
        amount = input;
        invalidInput = false;
    }
}

$("name").addEventListener(
    "click",
    function () {
        "use strict";
        acc = new BankAccount(window.prompt("Enter Account Owner's Name."));
        noName = false;
        $("balance").innerHTML = acc.getOwnerName() + ", your current balance is $" + acc.getBalance() + ".";
    }
);

$("deposit").addEventListener("click", function () {
    "use strict";
    if (noName) {
        window.alert("First, Enter the Name of the Bank Account Owner.");
    } else {
        do {
            vDeposit("Enter deposit amount (numbers and decimal only)"); 
        } while (invalidInput);
        acc.deposit(amount);
        $("balance").innerHTML = acc.getOwnerName() + ", your current balance is $" + acc.getBalance() + ".";
    }
});

$("withdrawal").addEventListener("click", function () {
    "use strict";
    if (noName) {
        window.alert("First, Enter the Name of the Bank Account Owner.");
    } else {
        do {
            vWithdrawal("Enter withdrawl amount (numbers and decimal only)");
        } while (invalidInput);
        acc.withdrawal(amount);
        $("balance").innerHTML = acc.getOwnerName() + ", your current balance is $" + acc.getBalance() + ".";
    }
});