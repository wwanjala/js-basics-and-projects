'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `<article class="${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫
        </span>${(+data.population / 1000000).toFixed(2)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

//Old school
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.eu/rest/v2
// /name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫
//             </span>${(+data.population / 1000000).toFixed(2)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

//getCountryData('kenya');
//getCountryData('usa');
//getCountryData('uganda');

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.eu/rest/v2
//   /name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //render country 1
//     renderCountry(data);

//     //get neighbour country [2]
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('kenya');

// //callback hell
// setTimeout(() => {
//   console.log('1 second ago');
//   setTimeout(() => {
//     console.log('1 second ago');
//     setTimeout(() => {
//       console.log('1 second ago');
//       setTimeout(() => {
//         console.log('1 second ago');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//Promises and fetch API
// const request = fetch('https://restcountries.eu/rest/v2/name/kenya');
// console.log(request);

//consuming promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('kenya');
const getJSON = function (url, errorMessage = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(` (${errorMessage}) ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   //countyr1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       // console.log(response)
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       //country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message},Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  //countyr1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found');

      //country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/
      ${neighbour}`,
        'country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message},Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
//getCountryData('kenya');

//Event loop in practise
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

//building promises
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN🎂🎂');
    } else {
      reject(new Error('You lost your money🤦‍♀️'));
    }
  }, 2000);
});
//consuming the promise--
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifyind setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for one second'));

//immidiately resolved
Promise.resolve('abc').then(y => console.log(y));
Promise.resolve('abc').catch(y => console.error(y));

//promisifying the Geolocation API
//const getPosition = function () {
// return new Promise(function (resolve, reject) {
// navigator.geolocation.getCurrentPosition(
//   position => resolve(position),
//   err => reject(err)
// );
//  navigator.geolocation.getCurrentPosition(resolve, reject);
// });
//};

//getPosition().then(pos => console.log(pos));

//challenge
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImage;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

//consuming promises

//geolocation

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  //Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},
  ${lng}?geoit=json`);
  const dataGeo = await resGeo.json();

  //Country data
  const res = await fetch(`https://restcountries.eu/rest/v2/name/
${dataGeo.country}`);
  const data = await res.json();
  renderCountry(data[0]);
};

whereAmI();
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.err(err.message);
  }
  console.log('3: finished getting location');
})();
//try catch error

// try {
//   let yc = 1;
//   const x2 = 3;
//   x2 = 4;
// } catch (err) {
//   alert(err.message);
// }

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );

    //Running promises in parallel(Promise.all())
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
    //console.log(data1.capital, data2.capital, data3.capital);
  } catch (err) {
    console.err(err.message);
  }
};
get3Countries('kenya', 'canada', 'uganda');

//promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/kenya`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/kenya`),
  timeout(1),
]).then(res => console.log(res[0]).catch(err => console.error(err)));

//promise.allSettled
Promise.allSettled([
  Promise.resolve('success'),
  Promise.resolve('success'),
  Promise.resolve('ERROR'),
  Promise.resolve('success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promise.any(ES20)
Promise.any([
  Promise.resolve('success'),
  Promise.resolve('success'),
  Promise.resolve('ERROR'),
  Promise.resolve('success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
