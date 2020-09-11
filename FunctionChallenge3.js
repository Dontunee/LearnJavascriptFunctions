//Function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice
//Binary Functions
function add(x, y)
{
  return x + y;
}
function sub(x,y)
{
  return x - y;
}
function mul(x,y)
{
 return x * y;
}
function square(x)
{
    return x * x;
}

function binaryFunction(x,y)
{
    return binaryFunction;
}
function twice(binaryFunction)
{
    return function(x)
    {
        return binaryFunction(x,x)
    }
}


//Function that reverses the arguments of a binary functiojn 
function reverse(binaryFunction)
{
    return function(x,y)
    {
        return binaryFunction(y,x);
    }
}


//Function composeu that takes two unary functions and returns a unary function that calls them both 
function unaryFunction(x)
{
    return unaryFunction;
}
function composeu(unaryFunction,unaryFunction)
{
    return function(x)
    {
        return unaryFunction(unaryFunction(x));
    }
}

//Function composeb that takes two binary functions and returns a function that calls them both 

function composeb(binaryFunction,binaryFunction)
{
    return function(x,y,z)
    {
        return binaryFunction(binaryFunction(x,y),z);
    }
}

//Limit Function that allows a binary function to be called a limited number of times
function limit (binaryFunction,count)
{
   return function(a,b)
   {
       if (count >= 1)
       {
           count -= 1;
           return binaryFunction(a,b);
       }
       else{
           return undefined;
       }
   };
}

//from Function that produces a generator that will produce a series of values
function from(initialNumber)
{
    return function()
    {
        let temp = initialNumber;
        ++initialNumber;
        return temp;
    }
}

//To function that takes a generator and an end value , and returns a generator that will produce numbers up to that limit
function to (generator,endValue)
{
    return function()
    {
        let value = generator();
        if(value < endValue)
        {
            return value;
        }
        else
        {
            return undefined;
        }
    };
}

//Function fromTo that produces a generator that will produce values in a range
function fromTo(from,To)
{
    return function()
    {
        if (from < To)
        {
            let value = from;
            ++from;
            return value;
        }
        else
        {
            return undefined;
        }
    }
}

//Function element that takes an array and a generator and returns a generator that will produce elements from the array 
function element(inputArray , inputGenerator)
{
    return function()
    {
        let value = inputGenerator();
        if(value !== undefined)
        {
        return inputArray[value];
        }
        else{
            return undefined;
        }
    }
}

let doubl = twice(add);
console.log(doubl(11));

let bus = reverse(sub);
console.log(bus(3,2));

let compose = composeu(doubl,square)(5);
console.log(compose);

let composeSecond = composeb(add, mul)(2,3,7);
console.log(composeSecond);

let add_ltd = limit(add,1);
console.log(add_ltd(3,4));
console.log(add_ltd(3,4));

let index = from(0);
console.log(index());
console.log(index());
console.log(index());

let secondIndex = to(from(1),3);
console.log(secondIndex());
console.log(secondIndex());
console.log(secondIndex());

let thridIndex = fromTo(0,3);
console.log(thridIndex());
console.log(thridIndex());
console.log(thridIndex());
console.log(thridIndex());

let fourthIndex = element(['a','b','c','d'],fromTo(1,3));
console.log(fourthIndex());
console.log(fourthIndex());
console.log(fourthIndex());