function ATM (account) {
	let account_number = account;
	let balance = 0;
	return {
		// Function block for a deposite
		deposit: function(amount)
		 	 {
		 	 	if (amount > 0){
		 	 			 	 	balance += amount};
		 	},

		 // function block for withdrawls
		
		withdrawl: function(amount)
		{ 
			if (balance >= amount &&  0 < amount){
					// Remind the customer to take their money
				 	console.log("Please take you money");
				 	balance -=  amount;
				 }
		},

		//A Function block for retreiving the balance
		getBalance: function()
		{
			console.log ("Your Balance is : " + balance);
		},

		// A function block for retrieving the account number
		getAccountNumber: function(){
			console.log( "Your Account Numbers is : " +  account_number);
		}
	}
}

//testing the closure
let someAccount =  ATM(87585484);
someAccount.getBalance();
someAccount.deposit(124);
someAccount.getBalance();
someAccount.withdrawl(24);

someAccount.getAccountNumber();
someAccount.getBalance()