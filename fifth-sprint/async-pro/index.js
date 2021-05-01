// console.time('alert_ornek');
// alert('merhaba');
// console.timeLog('alert_ornek');
// console.log('devam eden işler...');
// console.timeEnd('alert_ornek');
const startTime = Date.now();
const myLog = (input) => {
  console.log(`Elapsed: ${Date.now() - startTime}ms\t\t${input}`);
};

const slowTask = () => {
  let i = 0;
  do {
    i++;
  } while (i < 700000000);
  return 'task is completed.';
};

