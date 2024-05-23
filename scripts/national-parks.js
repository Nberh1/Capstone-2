"use strict";
window.onload = function () {
  const nationalParkTB = document.querySelector("#nationalParkTB");
  const parkList = document.querySelector("#parkList");
  const parkTypeList = document.querySelector("#parkTypeList");
  const stateRadio = document.querySelector("#stateRadio");
  const typeRadio = document.querySelector("#typeRadio");

  function buildParkOption() {
    for (const location of locationsArray) {
      const parkOption = document.createElement("option");
      parkOption.value = location;
      parkOption.innerText = location;
      parkList.appendChild(parkOption);
    }
  }

  function buildParkTypeOption() {
    for (const type of parkTypesArray) {
      const parkTypeOption = document.createElement("option");
      parkTypeOption.value = type;
      parkTypeOption.innerText = type;
      parkTypeList.appendChild(parkTypeOption);
    }
  }

  function buildTableRow(park) {
    let row = nationalParkTB.insertRow();

    let cellOne = row.insertCell(0);
    cellOne.innerText = park.LocationName;

    let cellTwo = row.insertCell(1);
    cellTwo.innerText = park.Address;

    let cellThree = row.insertCell(2);
    cellThree.innerText = park.City;

    let cellFour = row.insertCell(3);
    cellFour.innerText = park.State;

    let cellFive = row.insertCell(4);
    cellFive.innerText = park.ZipCode;
 
   let cellSix = row.insertCell(5);
   cellSix.innerText = park.Phone;
    
   let cellSeven = row.insertCell(6);
    cellSeven.innerText = park.Fax;

    let cellEight = row.insertCell(7);
    cellEight.innerText = park.Visit;
  }

  function filterParksByState() {
   
    while (nationalParkTB.rows.length > 0) {
      nationalParkTB.deleteRow(0);
    }
   
    if (parkList.value) {
      for (const park of nationalParksArray) {
        if (park.State === parkList.value) {
          buildTableRow(park);
        }
      }
    }
  }

  function filterParksByType() {
    
    while (nationalParkTB.rows.length > 0) {
      nationalParkTB.deleteRow(0);
    }
    
    if (parkTypeList.value) {
      for (const park of nationalParksArray) {
        if (park.LocationName.includes(parkTypeList.value)) {
          buildTableRow(park);
        }
      }
    }
  }

  function toggleDropdowns() {
    if (stateRadio.checked) {
      parkList.style.display = "block";
      parkTypeList.style.display = "none";
    } else if (typeRadio.checked) {
      parkList.style.display = "none";
      parkTypeList.style.display = "block";
    }
  }

  parkList.onchange = filterParksByState;
  parkTypeList.onchange = filterParksByType;
  stateRadio.onclick = toggleDropdowns;
  typeRadio.onclick = toggleDropdowns;

  buildParkOption();
  buildParkTypeOption();
  toggleDropdowns(); // Initialize the display based on the default selected radio button
};

