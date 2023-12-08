// Quiz
let numCorrectSpan = document.getElementById("num-Correct");
let percentSpan = document.getElementById("percentage");
let feedback = document.getElementById("feedback");
//count

// listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("hi");
  let numCorrect = 0;
  let percent = 0;
  //Input 1
  let answer1 = document.getElementById("answer1").value.toLowerCase();
  // If Correct & Incorrect 1
  if (answer1 === "dave grohl") {
    document.getElementById("output1").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("output1").innerHTML = `Incorrect`;
  }
  //Input 2
  let answer2 = document.getElementById("answer2").value.toLowerCase();
  // If Correct & Incorrect 2
  if (
    answer2 === "don't stay" ||
    answer2 === "somewhere i belong" ||
    answer2 === "lying from you" ||
    answer2 === "hit the floor" ||
    answer2 === "easier to run" ||
    answer2 === "faint" ||
    answer2 === "figure.09" ||
    answer2 === "breaking the habit" ||
    answer2 === "from the inside" ||
    answer2 === "nobody's listening" ||
    answer2 === "session" ||
    answer2 === "numb"
  ) {
    document.getElementById("output2").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("output2").innerHTML = `Incorrect`;
  }
  //Input 3
  let answer3 = document.getElementById("answer3").value.toLowerCase();
  // If Correct & Incorrect 3
  if (answer3 === "nickelback") {
    document.getElementById("output3").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("output3").innerHTML = `Incorrect`;
  }
  //Input 4
  let answer4 = document.getElementById("answer4").value.toLowerCase();
  // If Correct & Incorrect 4
  if (answer4 === "iron maiden") {
    document.getElementById("output4").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("output4").innerHTML = `Incorrect`;
  }
  numCorrectSpan.innerHTML = numCorrect;

  if (numCorrect === 1) {
    percentSpan.innerHTML = 25;
    feedback.innerHTML = `You can do better than that.`;
  } else if (numCorrect === 2) {
    percentSpan.innerHTML = 50;
    feedback.innerHTML = `You passed ¯\_(ツ)_/¯.`;
  } else if (numCorrect === 3) {
    percentSpan.innerHTML = 75;
    feedback.innerHTML = `Good Job!`;
  } else if (numCorrect === 4) {
    percentSpan.innerHTML = 100;
    feedback.innerHTML = `PERFECT!!!!`;
  } else {
    feedback.innerHTML = `(0_0)`;
  }
}
