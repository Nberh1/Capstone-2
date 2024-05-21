"use strict";

// this funciton can come in handy later to pass in a value 
// and load all mountains thT MATCH THE VALue (param)

// function loadMountains(params) {
//   for (const mountain of mountainsArray) {
//     console.log(mountain);
//   }

// }

// loadMountains();

const mountainDropDown = document.querySelector("#mountainsList");
const mountainTb = document.querySelector('#mountainTb');

let trackChanges = 0;



window.onload = init();
 


function init(){
populateDropDown();

 mountainDropDown.addEventListener('change',()=>{
  displayMountainInfo();
 }

 )
}



function populateDropDown(){

  //create an option eleme\mt to add to our select elemnet 
  //our option element will be a child of the select element


  for(let i = 0; i< mountainsArray.length; i++){
  let optionElement = document.createElement('option');
  optionElement.value = mountainsArray[i].name;
  optionElement.innerHTML = mountainsArray[i].name;

  mountainDropDown.appendChild(optionElement);

  }

}



function displayMountainInfo(){

let selectedMountain = mountainDropDown.value
let row;

if(selectedMountain != ""){
  console.log(selectedMountain)

mountainsArray.forEach(mountainObj => {

  if(mountainObj.name === selectedMountain){

    if(trackChanges === 0){

      //if a row does not exsist -meaning we haven't selected a mountain
      // then we will create a row to display the mountain data
 row = mountainTb.insertRow();
trackChanges = 1;

let cellOne = row.insertCell(0);
cellOne.innerText = mountainObj.name;

let celltwo = row.insertCell(1);
celltwo.innerText = mountainObj.desc;

let cellthree = row.insertCell(2);
cellthree.innerText =`${mountainObj.elevation} ft` ;

let cellFour = row.insertCell(3);
cellFour.innerText = `Difficulty Level: ${mountainObj.effort }`;

    } else{

      //if we have already selected a  row before - we just want to update the row 
      //the newly selected mountain

     mountainTb.rows[0].cells[0].innerHTML = mountainObj.name

     mountainTb.rows[0].cells[1].innerHTML = mountainObj.desc;

     mountainTb.rows[0].cells[2].innerHTML = `${mountainObj.elevation} ft`;
    
     mountainTb.rows[0].cells[3].innerHTML = `Difficulty Level: ${mountainObj.effort}`;

     console.log();
    }

  
 } 
});

}else{
  // console.log(" outd\side if if statement to check selected ountin")
   mountainTb.rows[0].cells[0].innerHTML = ""

   mountainTb.rows[0].cells[1].innerHTML = ""

   mountainTb.rows[0].cells[2].innerHTML = ""

   mountainTb.rows[0].cells[3].innerHTML = ""
}



}