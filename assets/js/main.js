jQuery(document).ready(function($) {

    var imgs = document.getElementsByClassName("armaImgs");
    
    var expandImg = function() {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("expandedImg");
        var captionText = document.getElementById("caption");
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        modal.style.display = "block";
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
        modal.style.display = "none";
        }
    }

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', expandImg, false);
    }
 
    
});