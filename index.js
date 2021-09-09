const billAmountInput = document.querySelector("#billAmountInput");
const cashAmountInput = document.querySelector("#cashAmountInput");
const calculateChangeButton = document.querySelector("#calculateChangeButton");
const outputDiv = document.querySelector("#outputDiv");

const changeButtonHandler = () => {
  const billAmount = parseInt(billAmountInput.value, 10);
  const cashAmount = parseInt(cashAmountInput.value, 10);
  const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
  if (billAmount > 0 && cashAmount > 0) {
    if (billAmount < cashAmount) {
      const change = calculateChange(billAmount, cashAmount, availableNotes);
      // console.log({ outputDiv });
      printOutput(availableNotes, change);
    } else {
      window.alert("Cash amount can not be less than bill amount");
    }
  } else {
    window.alert("Please enter positive values");
  }
};

const calculateChange = (billAmount, cashAmount, availableNotes) => {
  let changeToGive = cashAmount - billAmount;
  const changeInNotes = [];
  for (let note of availableNotes) {
    if (note <= changeToGive) {
      const temp = parseInt(changeToGive / note, 10);
      changeInNotes.push(temp);
      changeToGive -= note * temp;
    } else {
      changeInNotes.push(0);
    }
  }
  return changeInNotes;
};

const printOutput = (availableNotes, change) => {
  let htmlTemp = ``;
  for (let i = 0; i < availableNotes.length; i++) {
    if (change[i] !== 0) {
      htmlTemp += `<p>${change[i]} x ₹${availableNotes[i]} note</p>`;
    }
  }
  outputDiv.innerHTML = htmlTemp;
};

calculateChangeButton.addEventListener("click", changeButtonHandler);
