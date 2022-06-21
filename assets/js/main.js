jQuery(document).ready(function($) {

    var imgs = document.getElementsByClassName("expandableImgs");
    
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

    //Get the button:
    mybutton = document.getElementById("TopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function topFunction() {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } 
        else {
            mybutton.style.display = "none";
        }
    }

});