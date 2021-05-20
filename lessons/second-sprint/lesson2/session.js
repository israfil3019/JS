// ! if
const day = 'monday';
let sessionInfo = '';
if (day === 'monday') {
  sessionInfo = 'There is single session';
} else if (day === 'wednesday') {
  sessionInfo = 'There is single session';
} else if (day === 'thursday') {
  sessionInfo = 'There is single session';
} else if (day === 'saturday') {
  sessionInfo = 'There is single session';
}
console.log(sessionInfo);


// ! switch case

sessionInfo;
switch(day) {
  case "monday":
    sessionInfo = "There is just one on Monday";
    break;
  case "wednesday":
    sessionInfo = "there is just one on Wednesday";
    break;
  case "thursday":
    sessionInfo = "there is just one on Thursday";    
    break;
  case "saturday":
    sessionInfo = "there is two session on Saturday";
    break;  
  default:
    sessionInfo = "Wrong selection";
    break;
}
console.log(sessionInfo);
