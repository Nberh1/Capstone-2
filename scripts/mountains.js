"use strict";

// this funciton can come in handy later to pass in a value
// and load all mountains thT MATCH THE VALue (param)


// loadMountains();

const mountainDropDown = document.querySelector("#mountainsList");
const mountainTb = document.querySelector("#mountainTb");
const mountainImage = document.querySelector("#mountainImage")

let trackChanges = 0;

window.onload = init();

function init() {
  populateDropDown();

  mountainDropDown.addEventListener("change", () => {
    displayMountainInfo();
  });
}

function populateDropDown() {
  //create an option eleme\mt to add to our select elemnet
  //our option element will be a child of the select element

  for (let i = 0; i < mountainsArray.length; i++) {
    let optionElement = document.createElement("option");
    optionElement.value = mountainsArray[i].name;
    optionElement.innerText = mountainsArray[i].name;

    mountainDropDown.appendChild(optionElement);
  }
}

function displayMountainInfo() {
  mountainTb.innerText = "";
  mountainImage.src = "";
  let selectedMountain = mountainDropDown.value;

  mountainsArray.forEach((mountainObj) => {
    if (mountainObj.name === selectedMountain) {
      let row = mountainTb.insertRow();

      let cellOne = row.insertCell(0);
      cellOne.innerText = mountainObj.name;

      let celltwo = row.insertCell(1);
      celltwo.innerText = mountainObj.desc;

      let cellthree = row.insertCell(2);
      cellthree.innerText = `${mountainObj.elevation} ft`;

      let cellFour = row.insertCell(3);
      cellFour.innerText = `Difficulty Level: ${mountainObj.effort}`;

      let cellFive = row.insertCell(4);
      let image = document.createElement("img");
      
      cellFive.appendChild(image);

      showImage(mountainObj);
    }
  });
}

function showImage(mountainObj){

mountainImage.src = "images/"+ mountainObj.img;
      image.alt = "";
      image.height = '1000' ;
      image.width = '1200';
}

