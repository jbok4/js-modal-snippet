<script type="text/javascript">



// collecting variables of data:
var numItems = document.getElementsByClassName("mini-cart-product").length;
var cartTotal = document.getElementsByClassName("order-value");
var itemImages = document.getElementsByClassName("mini-cart-image");

// trigger that runs when user scrolls to the bottom of the page:
 window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       // alert("bottom");
       doPopup();
    }
};

function doPopup() {
  modal.style.display = "block";
}

// The trigger should show a centered overlay on top of the site that displays the information gathered above and two buttons. One button should close the overlay and the other should take the user to the cart page. It should have a style consistent with the website. Design matters. 




</script>