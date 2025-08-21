function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log("Mouse over: " + previewPic.alt);
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    console.log("Mouse left image area");
}

function focusImage(previewPic) {
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log("Focused on: " + previewPic.alt);
}

function blurImage() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    console.log("Image lost focus");
}

function initGallery() {
    console.log("Gallery loaded and initialized");

    // Select all images
    let images = document.querySelectorAll(".preview");

    // Loop through and add tabindex + event listeners
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");  // make focusable

        // Mouse events (already handled before, adding here too for consistency)
        images[i].addEventListener("mouseover", function() { upDate(this); });
        images[i].addEventListener("mouseleave", unDo);

        // Keyboard focus events
        images[i].addEventListener("focus", function() { focusImage(this); });
        images[i].addEventListener("blur", blurImage);
    }
}
