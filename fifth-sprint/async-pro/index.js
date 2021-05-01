// console.time('alert_ornek');
// alert('merhaba');
// console.timeLog('alert_ornek');
// console.log('devam eden işler...');
// console.timeEnd('alert_ornek');


// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
  //   const result = slowTask();
  //   console.log(result);
  
  //   let pElem = document.createElement('p');
  //   pElem.innerHTML = `This is newly-added paragraph<br>${result}`;
  //   document.body.appendChild(pElem);
// });
// setTimeout(() => {
  //   console.log('time ended');
  // }, 0);
  
  // console.log('time started');
  // console.log(slowTask());
//   const slowTask = () => {
  //     let i = 0;
//     do {
  //       i++;
  //     } while (i < 700000000);
//     return 'task is completed.';
//   };

//   const btn = document.querySelector('button');
//   btn.addEventListener('click', () => {
//     setTimeout(() => {
  //     console.log(slowTask());
  //   }, 0);
//   console.log('task done');
//   let pElem = document.createElement('p');
//   pElem.innerHTML = `This is newly-added paragraph`;
//   document.body.appendChild(pElem);
// });

// btn.addEventListener("click", function myTask(){
  //   console.log("just it");
  // });
  
const startTime = Date.now();
const myLog = (input) => {
  console.log(`Elapsed: ${Date.now() - startTime}ms\t\t${input}`);
};

function brewTea() {
  /* --- */
  return 'brewTea done';
}

function prepareBreakfast() {
  /* --- */
return 'prepareBreakfast done';
}

function makeBreakfast() {
  /* --- */
  return 'makeBreakfast done';
}

function drinkTea() {
  /* --- */
  return 'drinkTea done';
}

function breakfastTime() {
  myLog(makeBreakfast());
  myLog(drinkTea());
  myLog(' all finished');
}

setTimeout(() => {
    myLog(brewTea());
    setTimeout(breakfastTime, 0);
}, 2000);
setTimeout(() => {
    myLog(prepareBreakfast());
}, 1999);
for (let index = 0; index < 10; index++) {
  console.log('object');
}
