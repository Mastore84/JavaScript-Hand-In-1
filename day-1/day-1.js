//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

function addVersion2(n1, n2, ...rest){
   return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
}

function mul(n1, n2){
    return n1 * n2;
}

const sub = function(n1,n2){
  return n1 - n2
}

const cb = function(n1,n2,callback){
  return "Result from the two numbers: "+n1+" + "+n2+" = "+callback(n1,n2)
}

console.log( add(1,2) )     // What will this print? 3
console.log( add )          // What will it print and what does add represent? [Function: add], it represents the actual add function itself
console.log( add(1,2,3) ) ; // What will it print? 3
console.log( add(1) );          // What will it print? NaN, because we are only passing one argument to the add function  
console.log( cb(3,3,add) ); // What will it print? 3 + 3 = 6
console.log( cb(4,3,sub) ); // What will it print? 4 - 3 = 1
console.log(cb(3,3,add())); // What will it print (and what was the problem)? It gives a TypeError because instead of using add() as a callback, it calls the actual add() function as a third argument.
console.log(cb(3,"hh",add));// What will it print? 3hh
console.log(addVersion2(1,2,3,4,5,6,7,8,9,10))
console.log(cb(2,5,mul))