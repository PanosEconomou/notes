/************************
 ANIMATIONS
************************/

// Unfolding of exponential path with scroll
const mainPath = document.getElementById("path-dashed");
const secondaryPaths = document.querySelectorAll(".moving-point");
const pathLength = mainPath.getTotalLength();
const mainPointFL = mainPath.getPointAtLength(pathLength);

let drawLength = 1*pathLength;

window.addEventListener("wheel", (event) => {
    drawLength += event.deltaY/120*10; 
    drawLength = Math.max(0, Math.min(pathLength, drawLength));
    mainPath.style.strokeDashoffset = pathLength - drawLength;

    const mainPoint = mainPath.getPointAtLength(drawLength);

    secondaryPaths.forEach(path => {
        path.style.transform = `translate(${mainPoint.x - mainPointFL.x}px, ${mainPoint.y - mainPointFL.y}px)`;
    });
});

// Slightly pushing away the letters based on cursor position
const svg = document.querySelector("svg");
const lines = svg.querySelectorAll(".wobble");

const proximityThreshold = 70; // Distance within which lines react
const maxTranslationDistance = 10; // Maximum distance lines can move

svg.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  lines.forEach((line) => {
    const pt = svg.createSVGPoint();
    pt.x = line.getPointAtLength(0).x;
    pt.y = line.getPointAtLength(0).y;

    // Convert to global (viewport) coordinates
    const globalPoint = pt.matrixTransform(line.getScreenCTM());
    const lineX = parseFloat(globalPoint.x);
    const lineY = parseFloat(globalPoint.y);

    const distance = Math.sqrt((mouseX - lineX) ** 2 + (mouseY - lineY) ** 2);

    if (distance < proximityThreshold) {
      const translationX = ((mouseX - lineX) / distance) * Math.min(maxTranslationDistance,distance) ;
      const translationY = ((mouseY - lineY) / distance) * Math.min(maxTranslationDistance,distance) ;

      line.style.transform = `translate(${translationX}px, ${translationY}px)`;
    } else {
      // Reset transformation if outside proximity range
      line.style.transform = "translate(0, 0)"; 
    }
  });
});

// Typewriter for title
const text = "Notesbo\b\b\bbook";
const typewriter = document.getElementById("typewriter");

let i = 0;
const speed = 130;

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) != '\b'){
            typewriter.textContent += text.charAt(i);
            setTimeout(typeWriter, speed + Math.random() * 100);
        } else {
            setTimeout(typeWriter, speed*3 + Math.random() * 100);
            typewriter.textContent = typewriter.textContent.slice(0, -1);
        }
        i++;
    }
}

typeWriter(); 