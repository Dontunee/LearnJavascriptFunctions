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
//Function that takes an argument that retruns a function that returns an argument
function identityf(x)
{
  let argumentReturn = function()
  {
    return x;
  }
  return argumentReturn;
}

//Function that takes a number and adds to the second upon second invocation
function addf(first)
{
  return function(second)
  {
    return first + second;
  }
}

//Function that returns a binary function
function functionOne(x,y)
{
  return functionOne();
}

//Function that takes a binary function and returns a function that performs the biinary function upon double invocation
function liftF(functionOne)
{
  return function(first)
  {
    return function(second)
    {
      return functionOne(first,second);
    }
  }
}

function curry(functionOne, x)
{
    return function(second)
    {
        return functionOne(x,second);
    }
}

//Function that increments the argument passed by one without writing a new function 
function inc(x)
{
    return add(x,1);
}
console.log(add(3,4));
console.log(sub(4,3));
console.log(mul(3,4));
let three = identityf(3);
console.log(three());
console.log(addf(3)(4));
let binaryFunctionProcessor = liftF(add);
console.log(binaryFunctionProcessor(3)(4));
console.log(curry(mul,5)(6));
console.log(inc(inc(5)));


