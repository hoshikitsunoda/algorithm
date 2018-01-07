// Define a function that returns itself.

function foo() {
  return foo
}

console.log(foo());
console.log(foo() === foo);
