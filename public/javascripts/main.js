/**
 *   @author Bates, Howard [ hbates@northmen.org ]
 *   @version 0.0.0
 *   @summary  || Created: 0.00.201X
 *   @todo 
 */

"use strict";

// const FADE = require('./FadeStuff.js');

class main {
     constructor() {
          main.prepApp();
          main.handleSlider();
          main.handleDieType();
          main.handleIndividualsRoll();
          main.handleTotalRoll();
     }

     /*loadInitialData(whichData, columns) {
          let bustCache = '?' + new Date().getTime();
          const XHR = new XMLHttpRequest();
          XHR.open('POST', document.url  + bustCache, true);
          XHR.setRequestHeader('X-Requested-load', `XMLHttpRequest${whichData}`);
          XHR.send();
          XHR.onload = () => {
               if (XHR.readyState == 4 && XHR.status == 200) {
                    let zipData = XHR.responseText;
                    let tempArray, finalData = [];
                    tempArray = zipData.split(/\r?\n/); //remove newlines
                    for (let i = 0; i < tempArray.length; i++) {
                         finalData[i] = tempArray[i].split(/,/).slice(0, columns);
                    }
                    if (whichData === 1) {
                         this.zipCodes = finalData;
                    }
               }
          };
     }*/

     static prepApp() {
          document.getElementById('sliderQty').innerHTML = document.getElementById('slider').value;
          document.getElementById('dieQty').value = document.getElementById('slider').value;
          document.getElementById('diceType').value = '0';
          document.getElementById('results').innerHTML = '_';
     }

     static handleSlider() {
          document.getElementById('slider').addEventListener('input', () => {
               document.getElementById('sliderQty').innerHTML = document.getElementById('slider').value;
               document.getElementById('dieQty').value = document.getElementById('slider').value;
          });
     }

     static handleDieType() {
          const dieTypes = document.forms["rollResults"].elements["dieType"];
          for (let i = 0; i < dieTypes.length; i++) {
               dieTypes[i].addEventListener('click', () => {
                    document.getElementById('diceType').value = dieTypes[i].value;
               });
          }
     }

     static handleIndividualsRoll() {
          document.getElementById('individualsRoll').addEventListener('click', () => {

          });
     }

     static handleTotalRoll() {
          document.getElementById('totalRoll').addEventListener('click', () => {
               let dieQty = Number(document.getElementById('dieQty').value);
               let dieType = Number(document.getElementById('diceType').value);
               let result = 0;
               for (let i = 0; i < dieQty; i++) {
                    let roll = Math.floor((Math.random() * dieType) + 1)
                    result += roll;
                    console.log(`ROLL: ${roll}, RESULT: ${result}`);
               }
               let finalResult = '' + result;
               document.getElementById('results').innerHTML = finalResult;
          });
     }

/*	 static fade(direction, fadeWhat) {
          new FADE(direction, fadeWhat).doFade();
     }*/
}

window.addEventListener('load', () => {
     new main();
});