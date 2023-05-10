var count = 0;
var inc = 0;
margin = 0;

var slider = document.getElementsByClassName("nebula-slider-width")[0];
var itemDisplay = 0;

if (screen.width > 990) {
    itemDisplay = document.getElementsByClassName("nebula-slider-container")[0].getAttribute("nebula-item-display-d");
    margin = itemDisplay * 5;
}
if (screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName("nebula-slider-container")[0].getAttribute("nebula-item-display-t");
    margin = itemDisplay * 6.8;
}                                                                          
if (screen.width > 280 && screen.width < 700) {
    itemDisplay = document.getElementsByClassName("nebula-slider-container")[0].getAttribute("nebula-item-display-m");
    margin = itemDisplay * 20;
}


var items = document.getElementsByClassName("nebula-item");
var itemleft = items.length % itemDisplay;

var itemslide = Math.floor(items.length / itemDisplay) - 1;
for (let i = 0; i < items.length; i++) {
    items[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

function next1() {
    if (inc !== itemslide + itemleft) {
        if (inc == itemslide) {
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc++;
            count = count - screen.width;
        }
    }
    slider.style.left = count + "px";
}

function prev1() {
    if (inc !== 0) {
        if (inc == itemleft) {
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc--;
            count = count + screen.width;
        }
    }
    console.log(inc)
    slider.style.left = count + "px";
}

