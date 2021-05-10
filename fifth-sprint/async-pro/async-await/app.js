/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */

// const renderCountry = (data, className = '') => {
//   const countryElm = document.querySelector('.countries');
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countryElm.insertAdjacentHTML('beforeend', html);
//   countryElm.style.opacity = 1;
// };

// // AJAX Calls
// // XMLHttpRequest - XHR
// // old way, not common anymore
// const getCountryData = (country) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
//     });
// };

// getCountryData('turkey');

// const request = fetch('https://restcountries.eu/rest/v2/name/turkey');
// console.log(request);

// const request = fetch('');
// console.log(request);

// request
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     renderCountry(data[0]);
//   });

// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`something went wrong (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch((err) => console.log(err.message));
// };

// getCountryData('Turkey');
// getCountryData('Germany');
// getCountryData('Canada');

// const getCountryNeighbourData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`something went wrong (${response.status})`);

//       return response.json();
//     }).then((data) => {
//       console.log(data);
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);

//     }).then((response) => {
//       if(!response.ok) throw new Error(`No neighbour (${response.status})`);

//       return response.json();
//     }).then((data) => {
//       renderCountry(data, "neighbour");
//     })
//     .catch((err) => console.log(err.message));
// };


// const getCountryJSONData = (url, errorMsg = 'Something went wrong') => {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };


// const getCountryNeighbourData = (country) => {
//   getCountryJSONData(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'No such country'
//   )
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       return getCountryJSONData(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'No Neighbour'
//       );
//     })

//     .then((data) => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch((err) => console.log(err.message));
// };



// getCountryNeighbourData('new zealand');

// building promise

// const flipCoinPromise = new Promise((resolve, reject) => {
//   console.log('Welcome to toss game');
//   console.log('Flipping the coin');
//   setTimeout(() => {
//     Math.random() >= 0.5
//       ? resolve('Here Head Comes! You Win!')
//       : reject(new Error('Tail comes'));
//   }, 5000);
// });

// flipCoinPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);



const wait = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed');
    return wait(1);
  });