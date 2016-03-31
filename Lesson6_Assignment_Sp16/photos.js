/*    
    Program Name:  Photo Gallery Application
    Author: Austin Savage
    Date:   Mrach 30th, 2016
    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;

function populateFigures() {
   var filename;
   var curreentFig;
   
   if (figureCount === 3) {
      for (var i = 1; i < 4; i++) {
            filename = "image/IMG_0" + photoOrder{i] + "sm.jpg";
            curreentFig = document.getElementsByTagName("img")[i - 1];
            curreentFig.src = filename;
            }//end of loop
      } else {
            for (var i = 0; i < 5; i++) {
                  filename = "image/IMG_0" + photoOrder[i] + "sm.jpg";
                  curreentFig = document.getElementsByTagName("img")[i];
                  curreentFig.src = filename;
               
            } // end of for loop
      }   // end of else
            
            
      }//end of populateFigures()





/* shift all images one figure to the right, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }//end of for loop
}//end of rightArrow Function





/* shift all images one figure to the left, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }//end of for loop
}//end of leftArrow Function

fucntion previewFive() {
   
      var articleEl = document.getElementsByTagName("article")[0];
   
      //Create figure and img element for 5th image
      var lastFigure = document.createElement("figure");
      
      lastFigure.id = "fig5";
      lastFigure.style.zIndex = "5";
      lastFigure.style.position = "adsolute";
      lastFigure.style.right = "45px";
      lastFigure.style.top = "67px";
      
      var lastImage = document.createElement("img");
      lastImage.width ="240";
      lastImage.height = "135";
      
      lastFigure.appendChild(lastImage);
      
      articleEl.appendChild(lastFigure);
      
      //clone figure element for fifth image and edit to be first image
      var firstFigure = lastFigure.cloneNode(true);
      
      firstFigure.id = "fig 1";
      firstFigure.style.right
      firstFigure.style.left ="45px";
      
      articleEl.insertBefore(firstFigure, document.getElementById("fig 2"));
      
      //add appropriate arc values to two new img elements
         document.getElementsByTagName("img")[0].src = "image/IMG_0" + photoOrder[0] + "sm.jpg";
         document.getElementsByTagName("img")[4].src = "image/IMG_0" + photoOrder[4] + "sm.jpg";
         
         //disable the 'Show more images' buttoma after it has been selected once
         var numberButton = document.querySelector("#fiveButon p");
         numberButton.removeEventListener("click", previewFive, false);
         
}//end of previewFive

//Create event Listeners for left arrrow, right arrow, and center figure element

function createEventListeners() {
   
   var leftArrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
         leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
         leftarrow.addEvent("onclick", leftArrow);
   }// end of else if 
   
   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
         rightarrow.addEventListener("click",rightArrow, false);
      } else if (rightarrow.attachEvent) {
            rightarrow.attachEvent("onclick", rightArrow)
      }//end of else if 
   
   var showAllButton = document.querySelector("#fiveButon p");
   if (showAllButton.addEventListener) {
         showAllButton.addEventListener("click", previewFive, false);
   } else if (showAllButton.attachEvent) {
         showAllButton.attachEvent("onclick", previewFive);
   }//end of else if
   
   
}// end of createEventListeners function 



/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}//end of setUpPage Function






/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}