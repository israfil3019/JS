/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */

const renderCountry = (data, className = '') => {
  const countryElm = document.querySelector('.countries');
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countryElm.insertAdjacentHTML('beforeend', html);
  countryElm.style.opacity = 1;
};

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

const request = fetch('https://restcountries.eu/rest/v2/name/turkey');
// console.log(request);

// const request = fetch('');
console.log(request);

request
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderCountry(data[0]);
  });
