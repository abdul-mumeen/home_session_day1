
'use strict';

module.exports = {
Car: function (name, model, type)
{
	switch (arguments.length)
	{
		case 0: this.name = "General";
				this.model = "GM";
				this.type = "";
				break;
		case 1: this.name = name;
				this.model = "";
				this.type = "";
				break;
		case 2: this.name = name;
				this.model = model;
				this.type = "";
				break;
		default: this.name = name;
				this.model = model;
				this.type = type;
				break;
	}
	var newDoor = new Doors(this.name);
	var newOtherProperties = new OtherProperties(type);
	this.numOfDoors = newDoor.numOfDoors;
	this.isSaloon = newOtherProperties.isSaloon;
	this.numOfWheels = newOtherProperties.numOfWheels;
	this.speed = newOtherProperties.speed;
	this.drive = newOtherProperties.drive;
}
};

var Doors = function(name)
{
	this.name = name;
	this.numOfDoors = this.numOfDoors();
};

Doors.prototype.numOfDoors = function()
{
	if (this.name === "Porshe" || this.name === "Koenigsegg")
	{
		return 2;
	}
	else{
		return 4;
	}
};


var OtherProperties = function(type)
{
	this.type = type;
	this.numOfWheels = this.numOfWheels();
	this.isSaloon = this.isSaloon();
	this.speed = "0 km/h";
};
OtherProperties.prototype.numOfWheels = function()
{
	if (this.type === "trailer")
	{
		return 8;
	}
	else
	{
		return 4;
	}
};
OtherProperties.prototype.isSaloon = function()
{
	if (this.type === "trailer")
	{
		return false;
	}
	else
	{
		return true;
	}
};
OtherProperties.prototype.drive = function(rate)
{
	if (this.type === "trailer")
	{
		this.speed = (rate * 11) + " km/h";
	}
	else
	{
		this.speed = (rate * 50) + " km/h";
	}
	return this;
};
