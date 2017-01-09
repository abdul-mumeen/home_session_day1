
'use strict';

module.exports = {
BankAccount: function(accountName, type)
{
	var accTypeVar = new AccountTypeVariats();
	this.name = accountName;
	this.type = type;
	this.balance = accTypeVar.initBalance(type);
	this.interestRate = accTypeVar.interestRate(type);
	this.withdraw = function(amount)
	{
		if (amount <= this.balance)
		{
			this.balance -= amount;
		}
		else
		{
			return "cannot with below minimum balance";
		}
	};
	this.deposit = function(amount)
	{
		this.balance += amount;
	};
	this.addInterest = function()
	{
		this.balance += (this.interestRate * this.balance);
	};
},
CurrentAccount: function()
{
	this.haveCheckbook = true;
	this.canIssueCheck = canIssueCheck;
	module.exports.BankAccount.apply(this, Array.prototype.slice.call(arguments));;
},
SavingsAccount: function()
{
	this.getBonus = true;
	this.canGetBonus = canGetBonus;
	module.exports.BankAccount.apply(this, Array.prototype.slice.call(arguments));;
},
};
module.exports.CurrentAccount.prototype = Object.create(module.exports.BankAccount.prototype);
module.exports.SavingsAccount.prototype = Object.create(module.exports.BankAccount.prototype);


var AccountTypeVariats = function(){};
AccountTypeVariats.prototype.initBalance = function(type)
{
	if (type === "Current Account")
	{
		return 1000;
	}
	else
	{
		return 0;
	}
};
AccountTypeVariats.prototype.interestRate = function(type)
{
	if (type === "Current Account")
	{
		return 0.05;
	}
	else
	{
		return 0.01;
	}
};


var canIssueCheck = function()
{
	return this.haveCheckbook;
};


var canGetBonus = function()
{
	return this.getBonus;
};



