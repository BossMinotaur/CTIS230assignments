lightness = 79.33;
chroma = 0.113;
hue = 0;
speed = 5;

// Selects an element with the id "firsttest" from the HTML document and assigns it to the variable "myitem"
myitem = document.getElementById("firsttest");
myitem2 = document.getElementById("yetAnotherBadID");
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
unshadowButton = document.getElementById("unshadowButton");

// Adds an event listener to the selected element that listens for a click event and triggers the onClick function
myitem.addEventListener("click", onClick);
myitem2.addEventListener("click", onClick2);
myitem.addEventListener("mouseout", onMouseOut);
myitem2.addEventListener("mouseout", onMouseOut);
thebutton.addEventListener("click", onButtonClick);
thebutton.addEventListener("click", toggleDiscoMode);
unshadowButton.addEventListener("click", onUnshadowButtonClick);

// Defines the onClick function that changes the text color of the selected element to green
function onClick() {  
    myitem.style.color = "green";

    myitem.style.outline= "5px dotted rgb(208, 137, 223)"
}

function onClick2() {  
    myitem2.style.color = "blue";

    myitem2.style.outline= "10px dotted rgb(80, 137, 223)"
}


function onMouseOut() {  
    myitem.style.color = "";  
    myitem.style.outline= ""
}

function onButtonClick() {  
    otheritem.style.textShadow = "-15px -5px 2px #0005";
}

function onUnshadowButtonClick() {
    otheritem.style.textShadow = "";}



// Disco mode ⬇⬇
isDiscoModeOn = false;
thebutton.style.backgroundColor = `oklch(${lightness}%, ${chroma / 2}, ${Math.random() * 360})`;

function toggleDiscoMode() {
    isDiscoModeOn = !isDiscoModeOn;
    if (isDiscoModeOn) {
        function incrementColor() {
            document.body.style.backgroundColor = `oklch(${lightness}%, ${chroma}, ${hue})`;
            thebutton.style.backgroundColor = "";
            hue = (hue + 1) % 360; 
        } 
        intervalId = setInterval(incrementColor, speed);
    }
    else {
        clearInterval(intervalId);
        document.body.style.backgroundColor = "";
        thebutton.style.backgroundColor = `oklch(${lightness}%, ${chroma / 2}, ${hue})`;
    }
    
}
// Disco mode ⬆⬆
