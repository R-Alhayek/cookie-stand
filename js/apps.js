"use strict"
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
    place : 'seattle',
    minCust : 23,
    maxCust : 65,
    avgSale : 6.3,
    numberCust : [],
    cookiesPerHr : [],
    totalCookieHr : 0,

      getnumberCust: function(min,max){
         for (let i =0; i<hours.length; i++){
             this.numberCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust+ 1) + this.minCust));
             console.log(this.numberCust);
         }
     },
     getcookiesPerHr:function () {
        for (let i=0; i<hours.length; i++){
            this.cookiesPerHr.push(Math.ceil(this.numberCust[i] * this.avgSale));
            this.totalCookieHr += this.cookiesPerHr[i];
        }
} ,
render: function () {
    let container = document.getElementById('cookies');
    let h3El = document.createElement('h3');
    container.appendChild(h3El);
    h3El.textContent = this.place;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =`${hours[i]} : ${this.cookiesPerHr[i]} cookies`;
        ulEl.appendChild(liEl)
      }
      let totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = `Total: ${this.totalCookieHr} cookies`;
}
}

  seattle.getnumberCust(seattle.minCust, seattle.maxCust);
  seattle.getcookiesPerHr();
  seattle.render();

  let tokyo = {
    place : 'Tokyo',
    minCust : 3,
    maxCust : 24,
    avgSale : 1.2,
    numberCust : [],
    cookiesPerHr : [],
    totalCookieHr : 0,

      getnumberCust: function(min,max){
         for (let i =0; i<hours.length; i++){
             this.numberCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust+ 1) + this.minCust));
             console.log(this.numberCust);
         }
     },
     getcookiesPerHr:function () {
        for (let i=0; i<hours.length; i++){
            this.cookiesPerHr.push(Math.ceil(this.numberCust[i] * this.avgSale));
            this.totalCookieHr += this.cookiesPerHr[i];
        }
} ,
render: function () {
    let container = document.getElementById('cookies');
    let h3El = document.createElement('h3');
    container.appendChild(h3El);
    h3El.textContent = this.place;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =`${hours[i]} : ${this.cookiesPerHr[i]} cookies`;
        ulEl.appendChild(liEl)
      }
      let totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = `Total: ${this.totalCookieHr} cookies`;
}
}

  tokyo.getnumberCust(tokyo.minCust, tokyo.maxCust);
  tokyo.getcookiesPerHr();
  tokyo.render();

  let dubai = {
    place : 'Dubai',
    minCust : 11,
    maxCust : 38,
    avgSale : 3.7,
    numberCust : [],
    cookiesPerHr : [],
    totalCookieHr : 0,

      getnumberCust: function(min,max){
         for (let i =0; i<hours.length; i++){
             this.numberCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust+ 1) + this.minCust));
             console.log(this.numberCust);
         }
     },
     getcookiesPerHr:function () {
        for (let i=0; i<hours.length; i++){
            this.cookiesPerHr.push(Math.ceil(this.numberCust[i] * this.avgSale));
            this.totalCookieHr += this.cookiesPerHr[i];
        }
} ,
render: function () {
    let container = document.getElementById('cookies');
    let h3El = document.createElement('h3');
    container.appendChild(h3El);
    h3El.textContent = this.place;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =`${hours[i]} : ${this.cookiesPerHr[i]} cookies`;
        ulEl.appendChild(liEl)
      }
      let totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = `Total: ${this.totalCookieHr} cookies`;
}
}

  dubai.getnumberCust(dubai.minCust, dubai.maxCust);
  dubai.getcookiesPerHr();
  dubai.render();

  let paris = {
    place : 'Paris',
    minCust : 20,
    maxCust : 38,
    avgSale : 2.3,
    numberCust : [],
    cookiesPerHr : [],
    totalCookieHr : 0,

      getnumberCust: function(min,max){
         for (let i =0; i<hours.length; i++){
             this.numberCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust+ 1) + this.minCust));
             console.log(this.numberCust);
         }
     },
     getcookiesPerHr:function () {
        for (let i=0; i<hours.length; i++){
            this.cookiesPerHr.push(Math.ceil(this.numberCust[i] * this.avgSale));
            this.totalCookieHr += this.cookiesPerHr[i];
        }
} ,
render: function () {
    let container = document.getElementById('cookies');
    let h3El = document.createElement('h3');
    container.appendChild(h3El);
    h3El.textContent = this.place;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =`${hours[i]} : ${this.cookiesPerHr[i]} cookies`;
        ulEl.appendChild(liEl)
      }
      let totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = `Total: ${this.totalCookieHr} cookies`;
}
}

  paris.getnumberCust(paris.minCust, paris.maxCust);
  paris.getcookiesPerHr();
  paris.render();

  let lima = {
    place : 'Lima',
    minCust : 2,
    maxCust : 16,
    avgSale : 4.6,
    numberCust : [],
    cookiesPerHr : [],
    totalCookieHr : 0,

      getnumberCust: function(min,max){
         for (let i =0; i<hours.length; i++){
             this.numberCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust+ 1) + this.minCust));
             console.log(this.numberCust);
         }
     },
     getcookiesPerHr:function () {
        for (let i=0; i<hours.length; i++){
            this.cookiesPerHr.push(Math.ceil(this.numberCust[i] * this.avgSale));
            this.totalCookieHr += this.cookiesPerHr[i];
        }
} ,
render: function () {
    let container = document.getElementById('cookies');
    let h3El = document.createElement('h3');
    container.appendChild(h3El);
    h3El.textContent = this.place;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =`${hours[i]} : ${this.cookiesPerHr[i]} cookies`;
        ulEl.appendChild(liEl)
      }
      let totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = `Total: ${this.totalCookieHr} cookies`;
}
}

  lima.getnumberCust(lima.minCust, lima.maxCust);
  lima.getcookiesPerHr();
  lima.render();

  