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
  var docHeight = $(document).height();
  $("body").append("<div id='overlay'></div>");
  $("body").append("<div id='modal'></div>");

   $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.4,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 4999
      });

      $("#modal")
      .height('80%')
      .css({
         'opacity' : 1,
         'position': 'absolute',
         'top': 100,
         'left': 100,
         'background-color': 'pink',
         'width': '80%',
         'height': '80%',
         'z-index': 5000
      });
};

// The trigger should show a centered overlay on top of the site that displays the information gathered above and two buttons. One button should close the overlay and the other should take the user to the cart page. It should have a style consistent with the website. Design matters. 




</script>