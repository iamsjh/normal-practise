// Promise - 示例1
function timeout(ms){
  return new Promise((resolve,reject) =>{
    setTimeout(resolve, ms,'done')
  })
}
timeout(2000).then(val =>console.log(val)) // "done"


// // Promise-示例2
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');
// "Promise"
// "Hi!"
// "resolved."

// Promise-示例3
let promise1 = new Promise(function(resolve, reject) {
  console.log('Promise');
  throw new Error('234')
});

promise1.then(function(res) {
  console.log('resolved.');
},function(res){
  console.log('reject')
  throw '234'
}).then(function(res){
  console.log('aalgajlg')
}).catch(res => console.log(res));
// "Promise"
// "reject"
// "234"
