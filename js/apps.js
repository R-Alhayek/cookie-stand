"use strict"
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
    place : 'seattle',
    minCust : 23,
    maxCust : 65,
    avgSale : 6.3,
    numberCust : [],
    

      getnumberCust: function(){
         for (let i =0; i<hours.length; i++){
             this.numberCust.push(random(this.minCust, this.maxCust));
             console.log(this.numberCust);
         }
     },
     cookiesPerHr:function () {
        return (this.avgSale * this.getnumberCust());
        console.log(cookiesPerHr);
} ,
render: function () {
    let divEl = document.getElementById('cookies');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h4El = document.createElement('h4');
    h4El.textContent = this.place;
    articleEl.appendChild(h4El);
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent =`${hours[i]} : ${this.cookiesPerHr[i]} cookies`;
        ulEl.appendChild(liEl)
      }
}
}
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  seattle.getnumberCust();
  seattle.cookiesPerHr();


  