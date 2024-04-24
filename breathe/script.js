// Select the circle element
const circle = document.getElementById("circle");

// Define a function to handle the animation
function animateCircle() {
  // Set initial size and color
  circle.style.width = "100px";
  circle.style.height = "100px";
  circle.style.backgroundColor = "#ff71ce";

  // Apply CSS transition for width and height
  circle.style.transition = "width 4s, height 4s";

  // Expand the circle gradually
  circle.style.width = "800px";
  circle.style.height = "800px";

  // Change color and contract the circle for 5 seconds
  setTimeout(() => {
    circle.style.backgroundColor = "#B967FF";
    circle.style.transition = "width 5s, height 5s"; // Update transition for color change
    circle.style.width = "100px";
    circle.style.height = "100px";
  }, 4000);
}

// Call the animation function initially
animateCircle();

// Repeat the animation every 9 seconds (including the 4s expanding + 5s contracting)
setInterval(() => {
  animateCircle();
}, 9000);
