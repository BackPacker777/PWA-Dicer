"use strict";

class main {
     constructor() {
          main.prepApp();
          main.handleSlider();
          main.handleDieType();
          main.handleIndividualsRoll();
          main.handleTotalRoll();
     }

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
               let dieQty = Number(document.getElementById('dieQty').value);
               let dieType = Number(document.getElementById('diceType').value);
               let finalResult = '';
               let results = [];
               for (let i = 0; i < dieQty; i++) {
                    results[i] = Math.floor((Math.random() * dieType) + 1);
                    if (i < dieQty - 1) {
                         finalResult += results[i] + ', ';
                    } else {
                         finalResult += results[i];
                    }
               }
               document.getElementById('results').innerHTML = finalResult;
          });
     }

     static handleTotalRoll() {
          document.getElementById('totalRoll').addEventListener('click', () => {
               let dieQty = Number(document.getElementById('dieQty').value);
               let dieType = Number(document.getElementById('diceType').value);
               let result = 0;
               for (let i = 0; i < dieQty; i++) {
                    result += Math.floor((Math.random() * dieType) + 1);
               }
               result += '';
               document.getElementById('results').innerHTML = result;
          });
     }
}

window.addEventListener('load', () => {
     new main();
});