
'use strict'
module.exports = {

dataTypes: function(dat)
{
	if (typeof(dat) === "string")
	{
		return dat.length;
	}
	else if (typeof(dat) === "boolean")
	{
		return dat;
	}
	else if (typeof(dat) === "number")
	{
		if (dat < 100)
		{
			return "less than 100";
		}
		else if (dat > 100)
		{
			return "more than 100";
		}
		else
		{
			return "equal to 100";
		}
	}
	else if (Object.prototype.toString.call(dat) === '[object Array]')
	{
		if (dat.length > 2)
		{
			return dat[2];
		}
		else
		{
			return undefined;
		}
	}
	else if (typeof(dat) === "function")
	{
		return dat(true);
	}
	else if ((typeof(dat) == null) || (typeof(dat) == "undefined"))
	{
		return "no value";
	}
	else
	{
		return "no value"
	}

}
}