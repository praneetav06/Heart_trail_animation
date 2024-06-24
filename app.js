const bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", (event) => {
    // console.log("mouse moved");
    // to show the coordinates where the mouse moves on the screen 
    // console.log(event.offsetX); 
    // console.log(event.offsetY);
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const span = document.createElement("span");
    const size = Math.random() * 150;
    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";
    bodyElement.appendChild(span);
    setTimeout(()=> {
        span.remove();
    },5000);
})