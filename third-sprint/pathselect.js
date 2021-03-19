const pathSelected = prompt(
  'Which path would you like to attend?\nad -> aws-devops\nfs -> full-stack\nds -> data-science'
);
let pathInfo = '';
if (pathSelected === 'ad') {
  pathInfo = 'You are going to manage infrastructure of cloud servers';
} else if (pathSelected === 'ds') {
  pathInfo =
    'You will manipulate high volume of data to obtain meaningful results';
} else if (pathSelected === 'fs') {
  pathInfo = 'You will build awesome web applications';
} else {
  pathInfo = 'Invalid selection';
}
console.log(pathInfo);

// ! ternary
pathInfo =
  pathSelected === '"ad'
    ? 'You are going to manage infrastructure of cloud servers'
    : pathSelected === '"ds'
    ? 'You will manipulate high volume of data to obtain meaningful results'
    : pathSelected === '"fs'
    ? 'You will build awesome web applications'
    : 'Invalid selection';
console.log(pathInfo);

// ! switch case
