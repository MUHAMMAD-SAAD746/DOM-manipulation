function upDate(previewPic) {
    // Change background image to hovered preview image
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // Change text to alt text of the hovered image
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    // Reset background image back to original (empty as in CSS)
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset text back to the default
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
