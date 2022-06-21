jQuery(document).ready(function($) {
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