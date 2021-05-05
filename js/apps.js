"use strict"

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let places = [];
function Cookiesplace(place, minCust, maxCust, avgSale) {
    this.place = place;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.numberCust = [];
    this.cookiesPerHr = [];
    this.totalCookieHr = 0;
    places.push(this);


Cookiesplace.prototype.getnumberCust = function (min, max) {
    for (let i = 0; i < hours.length; i++) {
        this.numberCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));

    }
}
Cookiesplace.prototype.getcookiesPerHr = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesPerHr.push(Math.ceil(this.numberCust[i] * this.avgSale));
        this.totalCookieHr += this.cookiesPerHr[i];
    }
}
Cookiesplace.prototype.render = function () {
    
    let tableHeader = document.createElement('tr');
    table2.appendChild(tableHeader);
    let tableEl2 = document.createElement('td');
    tableHeader.appendChild(tableEl2);
    tableEl2.textContent = this.place;
    for (let i = 0; i < hours.length; i++) {
        let tableEl3 = document.createElement('td');
        tableHeader.appendChild(tableEl3);
        tableEl3.textContent = this.cookiesPerHr[i];
    }
    let tableEl4 = document.createElement('td');
    tableHeader.appendChild(tableEl4);
    tableEl4.textContent = this.totalCookieHr;
}
}
let container = document.getElementById('cookies');
let article = document.createElement('article');
container.appendChild(article);
let table2 = document.createElement('table2');
article.appendChild(table2);
function row1() {
    let line1 = document.createElement('tr');
    table2.appendChild(line1);
    let header = document.createElement('th');
    line1.appendChild(header);
    header.textContent = null;
    for (let i = 0; i < hours.length; i++) {
        let header2 = document.createElement('th');
        line1.appendChild(header2);
        header2.textContent = hours[i];
    }
    let header3 = document.createElement('th');
    line1.appendChild(header3);
    header3.textContent = 'Daily Location Total';
}
function lastRow() {
    let lastLine = document.createElement('tr');
    table2.appendChild(lastLine);
    let data1 = document.createElement('td');
    lastLine.appendChild(data1);
    data1.textContent = 'Totals';
    let total2 =0;
    for (let i = 0; i < hours.length; i++) {
        let total = 0;
        for (let j = 0; j < places.length; j++) {
            total = total + places[j].cookiesPerHr[i];
            total2 += places[j].cookiesPerHr[i];
        }
     let data2 = document.createElement('td');
    lastLine.appendChild(data2);
    data2.textContent = total;
    }

let data3 = document.createElement('td');
lastLine.appendChild(data3);
data3.textContent = total2;
}
console.log(places);
row1();

let seattle = new Cookiesplace('seattle', 35, 65, 6.3);
seattle.getnumberCust();
seattle.getcookiesPerHr();
seattle.render();

let tokyo = new Cookiesplace('Tokyo', 3, 24, 1.2);
tokyo.getnumberCust();
tokyo.getcookiesPerHr();
tokyo.render();

let dubai = new Cookiesplace('Dubai', 11, 38, 3.7);
dubai.getnumberCust();
dubai.getcookiesPerHr();
dubai.render();

let paris = new Cookiesplace('Paris', 20, 38, 2.3);
paris.getnumberCust();
paris.getcookiesPerHr();
paris.render();

let lima = new Cookiesplace('Lima', 2, 16, 4.6);
lima.getnumberCust();
lima.getcookiesPerHr();
lima.render();

lastRow();
