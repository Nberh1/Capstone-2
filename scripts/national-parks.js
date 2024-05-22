"use strict";
const statesList = document.querySelector("#statesList");
const stateTb = document.querySelector("#stateTb");
const parkTb = document.querySelector("#parkTb");
const parkTypesList = document.querySelector("#parkTypesList");

function init() {
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
    cellSeven.innerText = location.Location;
  }};


  window.onload = init;

const selectElement = document.getElementById("parkTypes");

 
    parkTypesArray.forEach(function(parkType) {
     
      const option = document.createElement("option");
   
      option.value = parkType;
      option.textContent = parkType;

      selectElement.appendChild(option);
    });

