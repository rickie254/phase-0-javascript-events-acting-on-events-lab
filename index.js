// Your code here
// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        console.log('hey')
        moveDodgerLeft();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        console.log('hey')
        moveDodgerRight();
    }
  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
      console.log(left)
    }
  }
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
      console.log(left)
    }
  }