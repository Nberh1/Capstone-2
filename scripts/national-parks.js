"use strict";
const statesList = document.querySelector("#statesList");
const stateTb = document.querySelector("#stateTb");
const parkTb = document.querySelector("#parkTb");
const parkTypesList = document.querySelector("#parkTypesList");

function init() { 
  dropDown();
  displayData()
  
 };
function displayData() {
let locations = nationalParksArray;
for (let location of locations) {
  let row = stateTb.insertRow();
  let cellOne = row.insertCell(0);
  cellOne.innerText = location.LocationName;
  let celltwo = row.insertCell(1);
  celltwo.innerText = location.Address;
  let cellthree = row.insertCell(2);
  cellthree.innerText = location.City;
  let cellFour = row.insertCell(3);
  cellFour.innerText = location.State;
  let cellFive = row.insertCell(4);
  cellFive.innerText = location.ZipCode;
  let cellSix = row.insertCell(5);
  cellSix.innerText = location.Phone;
  let cellSeven = row.insertCell(6);
  cellSeven.innerText = location.Visit;
}
}

function dropDown() {
  let states = locationsArray;
  for(let state of states) {
  let optionElement = document.createElement("option");
  optionElement.value = state;
  optionElement.innerText = state;
 statesList.appendChild(optionElement);
    
  }
}







  window.onload = init;



