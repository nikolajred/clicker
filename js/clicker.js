let click = 0;
function increase(element) {
    let x = element.clientX - 240;
    let y = element.clientY - 160;
    let distance = Math.sqrt(y * y + x * x);
    if(distance < 50){
        click++;
        /* console.log(click);*/
        reload();
    }

}
let clickCanvas = document.getElementById("Canvas");
clickCanvas.addEventListener('click', increase);
let context = clickCanvas.getContext("2d");
function reload() {
    context.clearRect(0, 0, clickCanvas.width, clickCanvas.height);
    context.font = "20px Verdana";
    context.fillText("Clicks: " + click, 190, 20);
    context.beginPath();
    context.fillStyle = "red";
    context.arc(clickCanvas.width/2, clickCanvas.height/2, 50, 0, 2 * 3.14);
    context.fill();
}
reload();