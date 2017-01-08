'use strict'


module.exports = {
	getPrimes: function(num)
	{
		if ((typeof(num) !== 'number') || num < 0)
		{
			return "Invalid Integer";
		}
		else if (num < 2)
		{
			var resultArray = [];
			return resultArray;
		}
		else
		{
			var arrayPrime = [];
			if (num < 3)
			{
				arrayPrime.push(2);
			}
			else
			{
				arrayPrime.push(2);
				for(var i = 3; i <= num; i += 2)
				{
					var nextPrime = i;
					var isPrime = true;
					var sqrtNextPrime = Math.sqrt(nextPrime);
					for (var j = 0; arrayPrime[j] <= sqrtNextPrime; j++)
					{
						if ((i % arrayPrime[j]) === 0)
						{
							isPrime = false;
							break;
						}
					}
					if (isPrime)
					{
						arrayPrime.push(i);
					}
				}
			}
			return arrayPrime;
		}
	}
}