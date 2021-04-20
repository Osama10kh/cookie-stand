'use strict';

let parentElement = document.getElementById('salmonCookiesTable');
let workingHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Stores(locationName, minCustPerHour, maxCustPerHour, avgCookiePurshPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePurshPerCust = avgCookiePurshPerCust;
  this.totalDailyCookies = 0;
  this.CustPerHour = [];
  this.cookiesPerHour = [];
  this.getAmountOfCookies();
  Stores.locations.push(this);
}

Stores.locations = [];

tableHead();
tableFooter();

function tableHead() {
  let tabRow = document.createElement('tr');
  parentElement.appendChild(tabRow);

  let thEle = document.createElement('th');
  tabRow.appendChild(thEle);
  thEle.textContent = 'store location';

  for (let i = 0; i < workingHour.length; i++) {
    let thEle = document.createElement('th');
    tabRow.appendChild(thEle);
    thEle.textContent = workingHour[i];
  }

  let thEle1 = document.createElement('th');
  tabRow.appendChild(thEle1);
  thEle.textContent = 'Daily Total';
}

function tableFooter() {
  let tabfoot = document.createElement('tr');
  parentElement.appendChild(tabfoot);

  let thEle = document.createElement('th');
  tabfoot.appendChild(thEle);
  thEle.textContent = 'total';

  let sumTotal = 0;

  for (let i = 0; i < workingHour.length; i++) {
    let thElement = document.createElement('th');
    let totalForHour = 0;
    for (let x = 0; x < Stores.locations.length; x++) {
      totalForHour += Stores.locations[x].cookiesPerHour[i];
      sumTotal += Stores.locations[x].cookiesPerHour[i];
    }
    thElement.textContent = totalForHour;
    tabfoot.appendChild(thElement);
  }

  let thEle1 = document.createElement('th');
  tabfoot.appendChild(thEle1);
  thEle.textContent = sumTotal;
}



Stores.prototype.render = function () {

  this.getAmountOfCookies();

  let tr = document.createElement('tr');
  parentElement.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.locationName;

  for (let i = 0; i < workingHour.length; i++) {
    let tdElement = document.createElement('td');
    tr.appendChild(tdElement);
    tdElement.textContent = this.cookiesPerHour[i];
  }

  let td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = this.totalDailyCookies;
};

Stores.prototype.getAmountOfCookies = function () {
  for (let i = 0; i < workingHour.length; i++) {
    let cookiePrHr = Math.ceil(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePurshPerCust);
    this.cookiesPerHour.push(cookiePrHr);
    this.totalDailyCookies += cookiePrHr;
  }
};

let seattleSales = new Stores('seattles', 23, 65, 6.3);
seattleSales.render();

let TokyoSales = new Stores('Tokyo', 3, 24, 1.2);
TokyoSales.render();

let DubaiSales = new Stores('Dubai', 11, 38, 3.7);
DubaiSales.render();

let ParisSales = new Stores('Paris', 20, 38, 2.3);
ParisSales.render();

let LimaSales = new Stores('Lima', 2, 16, 4.6);
LimaSales.render();
