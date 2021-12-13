"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    let html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}M people.</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");
*/

///////////////////////////////////////

/*
const renderCountry = function (data, className) {
  let html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people.</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    // Render country 1
    renderCountry(data);

    // get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("usa");
*/

///////////////////////////////////////

/*
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const renderCountry = function (data, className) {
  let html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flags[0]}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.oficial}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people.</p>
      <p class="country__row"><span>🗣️</span>${data.languages.srp}</p>
      
    </div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const request = fetch(`https://restcountries.com/v2/name/serbia`);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };


const getJSON = function (url, errorMsg = "Something went wrong!") {
  return fetch(url).then((response) => {
    // response data needs to be converted to json format
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status}).`);
    }

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status}).`);
//       }

//       return response.json();
//     }) // response data needs to be converted to json format
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = "asdsad";
//       // const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status}).`);
//       }
//       return response.json();
//     }) // response data needs to be converted to json format
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(`${err} is error`);
//       renderError(`Something went wrong. ${err.message} Try again.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };


const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      // const neighbour = "asdsad";
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found");

      // country 2
      return getJSON(`https://restcountries.com/v3/alpha/${neighbour}`);
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err} is error`);
      renderError(`Something went wrong. ${err.message} Try again.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  // getCountryData("portugal");
});

getCountryData("australia");
*/

///////////////////////////////////////

/*
console.log("Test start");
setTimeout(() => {
  console.log("0 sec timer");
}, 0);
Promise.resolve("Resolved promise 1").then((response) => console.log(response));

Promise.resolve("Resolved promise 2").then((response) => {
  for (let i = 0; i < 1000000000; i++) {}

  console.log(response);
});

console.log("Test end");
*/

///////////////////////////////////////

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotery draw is happening!");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You win!");
    } else {
      reject(new Error("You lose!"));
    }
  }, 2000);
});

lotteryPromise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Promisifying setTiemout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds.");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 1 seconds.");
  });

Promise.resolve("abc").then((response) => console.log(response));
Promise.reject("abc").catch((error) => console.error(error));
*/

///////////////////////////////////////

/*
console.log("Getting position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));
getPosition().then((position) => {
  const coords = position.coords;
  console.log(coords.latitude);
});
*/

///////////////////////////////////////

const renderCountry = function (data, className) {
  let html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people.</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));
getPosition().then((position) => {
  const coords = position.coords;
  // console.log(coords.latitude);
});

const whereAmI = async function (country) {
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();

  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  renderCountry(data[0]);
};

whereAmI("serbia");
console.log("First");

///////////////////////////////////////
