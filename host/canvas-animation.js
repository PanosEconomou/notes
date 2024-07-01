/************************
 CANVAS AND CURSOR
************************/

// Obtain the canvas once it is built.
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true; 
const scaleFactor = 4;
canvas.width = window.innerWidth * scaleFactor;
canvas.height = window.innerHeight * scaleFactor;

// Circle properties   
const radius = 200;

// Draws the cursor
function drawCursor(event) {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circle
    ctx.beginPath();             // Start a new path
    ctx.arc(event.clientX*scaleFactor, event.clientY*scaleFactor, radius, 0, 2 * Math.PI); // Define the circle
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';     // Set fill color (you can change this)
    ctx.fill();                 // Fill the circle

    // Draw the circle
    ctx.beginPath();             // Start a new path
    ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI); // Define the circle
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';     // Set fill color (you can change this)
    ctx.fill();                 // Fill the circle

    // Draw the circle
    ctx.beginPath();             // Start a new path
    ctx.arc(canvas.width/2*(1.15), canvas.height/2, radius, 0, 2 * Math.PI); // Define the circle
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';     // Set fill color (you can change this)
    ctx.fill();                 // Fill the circle
}

// Add to event listener
document.body.addEventListener("mousemove", drawCursor, true);