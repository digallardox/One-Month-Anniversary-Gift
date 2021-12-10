let root = document.documentElement;

const textOne = document.getElementById('textOne').innerText.length;
root.style.setProperty('--textOneSteps', textOne);

const textTwo = document.getElementById('textTwo').innerText.length;
root.style.setProperty('--textTwoSteps', textTwo);

const textThree = document.getElementById('textThree').innerText.length;
root.style.setProperty('--textThreeSteps', textThree);

const textFour = document.getElementById('textFour').innerText.length;
root.style.setProperty('--textFourSteps', textFour);

const textFive = document.getElementById('textFive').innerText.length;
root.style.setProperty('--textFiveSteps', textFive);

const textSix = document.getElementById('textSix').innerText.length;
root.style.setProperty('--textSixSteps', textSix);

const textSeven = document.getElementById('textSeven').innerText.length;
root.style.setProperty('--textSevenSteps', textSeven);

let totalCallTime = 1276;
