"use strict";
const statesList = document.querySelector("#statesList");
const stateTb = document.querySelector("#stateTb");
const parkTb = document.querySelector("#parkTb")
const parkTypesList = document.querySelector("#parkTypesList");

function init() {

 let locations=nationalParksArray
for(let location of locations) {
  let row = stateTb.insertRow()
let cellOne = row.insertCell(0)
cellOne.innerText= location.LocationName
let celltwo = row.insertCell(1)
celltwo.innerText= location.Address
let cellthree = row.insertCell(2)
cellthree.innerText = location.City
let cellFour = row.insertCell(3)
cellFour.innerText = location.State
let cellFive = row.insertCell(4)
cellFive.innerText = location.ZipCode
let cellSix = row.insertCell(5)
cellSix.innerText = location.Phone
let cellSeven = row.insertCell(6)
cellSeven.innerText = location.Location
}
 
let parkTypes = nationalParksArray;
for (let parkType of parkTypes) {
  let row = parkTb.insertRow();
  let cellOne = row.insertRow(0)
  cellOne.innertext= parkType.
}






















//  for (const type of parkTypesArray) {
//     const option = document.createElement("option");
//     option.value = type;
//     option.textContent = type;
//     parkTypeSelect.appendChild(option);
//   }
}











































// document.addEventListener("DOMContentLoaded", function () {
//   const dropdown = document.getElementById("statesList");
//   // Move event listener inside init() function
//   dropdown.addEventListener("change", function () {
//     const selectedValue = dropdown.value;
//     parkDetailesTb.innerHTML = "";
//   });

// });

//     const stateParkResults = nationalParksArray.filter(
//       (State) => State.State === selectedValue
//     );

//     if (stateParkResults.length > 0) {
//       stateParkResults.forEach ((stateParkResult) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//                 <td>${stateParkResults.LocationName}</td>
//                 <td>${stateParkResults.Address}</td>
//                 <td>${stateParkResults.City}</td>
//                 <td>${stateParkResults.State}</td>
//                 <td>${stateParkResults.ZipCode}</td>
//                 <td>${stateParkResults.Phone}</td>
//                 <td>${stateParkResults.Location}</td>
//                `; 
//                parkDetailesTb.appendChild(row);
//         });
//       } else {
//         alert("No data found");
//        };
// const parkList = document.querySelector("parkList")
// for (const nationalParksArray of nationalParksArray) {
//   const option = document.createAttribute.createElement("option");
//   option.value = nationalParksArray.LocationID;
//   option.innerText = nationalParksArray.LocationName;
//   parkList.appendChild(option);
// };
window.onload = init;