const path = document.getElementById("path-dashed");
const secondaryPaths = document.querySelectorAll(".moving-point");
const pathLength = path.getTotalLength();

let drawLength = 0; // Start with the path fully hidden

window.addEventListener("wheel", (event) => {
    drawLength += event.deltaY/120*10; 
    drawLength = Math.max(0, Math.min(pathLength, drawLength));
    path.style.strokeDashoffset = pathLength - drawLength;
    console.log(drawLength);

    const mainPoint = path.getPointAtLength(drawLength);
    console.log(mainPoint);

    secondaryPaths.forEach(path => {
        path.style.transform = `translate(${mainPoint.x}px, ${mainPoint.y}px)`;
    });
});