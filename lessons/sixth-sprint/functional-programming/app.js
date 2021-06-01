/*
const balance = Object.freeze([
  { value: 1250, description: 'Sold Litecoin', user: 'barry' },
  { value: -1000, description: 'Rent', user: 'barry' },
  { value: 5300, description: 'Monthly salary', user: 'barry' },
  { value: 800, description: 'Sold Bitcoin', user: 'barry' },
  { value: -1900, description: 'New Smartphone', user: 'barry' },
  { value: -20, description: 'Buy chocolate', user: 'tina' },
  { value: -125, description: 'Buy guitar', user: 'tina' },
  { value: -2200, description: 'New Laptop', user: 'barry' }, //, flag: 'limit' },
]);

const userLimits = Object.freeze({
  barry: 1500,
  tina: 100,
});

// console.log('initial balance', balance);

const getLimit = (limits, user) => limits?.[user] ?? 0;

function addExpense(state, limits, value, description, user = 'barry') {
  const fixedUser = user.toLowerCase();

  // console.log(getLimit(user));

  // if (value <= getLimit(limits, user)) {
  //   state.push({ value: -value, description, user: fixedUser });
  // }
  return value <= getLimit(limits, user)
    ? [...state, { value: -value, description, user: fixedUser }]
    : state;
}

const newBalance1 = addExpense(balance, userLimits, 10, 'Kebab');
// console.log(newBalance1);

const newBalance2 = addExpense(
  newBalance1,
  userLimits,
  100,
  'Going to movies',
  'tina'
);

addExpense(balance, userLimits, 100, 'Guitar', 'Alex');
// console.log(newBalance2);
// console.log(balance);

function checkExpenses(state, limits) {
  return state.map(
    (item) =>
      item.value < -getLimit(limits, item.user)
        ? { ...item, flag: 'limit' }
        : { ...item }
    // { value: 1250, description: 'Sold Litecoin', user: 'barry' },
  );

  // for (const item of balance) {
  //   if (item.value < -getLimit(limits, item.user)) {
  //     item.flag = 'limit';
  //   }
  // }
}

const finalBudget = checkExpenses(newBalance2, userLimits);
finalBudget[0].test = 'testing';
console.log(finalBudget);

function logBigExpenses(state, bigLimit) {
  // return state
  //   .filter((item) => item.value <= -bigLimit)
  //   .map((item) => item.description)
  //   .join(' / ');

  return state
    .reduce(
      (acc, item) =>
        item.value <= -bigLimit ? acc + `${item.description} / ` : acc,
      ''
    )
    .slice(0, -2);

  // let output = '';
  // for (const item of balance)
  //   output += item.value <= -bigLimit ? `${item.description} / ` : '';

  // output = output.slice(0, -2);
  // // console.log(output);
}
// console.log(balance);
console.log(logBigExpenses(finalBudget, 500));
*/

// call
const thy = {
  airline: "Turkish Airlines",
  iataCode: "TK",
  bookings: [],

  book(flightNum, name) {
    // console.log(this);
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

thy.book(239, "Barry Mitchell");

const anadolu = {
  airline: "Anadolu Jet",
  iataCode: "TK",
  bookings: [],
};

const book = thy.book;

// book(11, 'Matthew');

book.call(anadolu, 11, "Matthew");
book.call(thy, 22, "Mark");

const pegasus = {
  airline: "Pegasus Airlines",
  iataCode: "PC",
  bookings: [],
};

book.call(pegasus, 55, "Felix");

// Apply method

book.apply(pegasus, [66, "Eser"]);

// bind

const bookTHY = book.bind(thy);

bookTHY(77, "Betül");

thy.planes = 300;
thy.addPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .getElementById("plane")
  .addEventListener("click", thy.addPlane.bind(thy));

thy.addPlane();
