<script type="text/javascript">



// collecting variables of data:
const numItems = document.getElementsByClassName("mini-cart-product").length;
const cartTotal = document.getElementsByClassName("order-value");
const itemImages = document.getElementsByClassName("mini-cart-image");

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
  $("body").append("<div id='modal-jaclyn'><p>Number of Items in cart</p></div>");
  document.getElementById("modal-jaclyn").innerHTML = numItems + " <br>" + cartTotal + " <br>" + itemImages;

   $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.4,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 4999
      });

      $("#modal-jaclyn")
      .height('80%')
      .css({
        'background-color': '#fff',
        'border-radius': '2px',
        'border': '2px solid black',
        'cursor': 'default',
        'height': '590px',
        'margin': 'auto',
        'position': 'fixed',
        'width': '629px',
        'top': 0,
        'left': 0,
        'bottom': 0,
        'right': 0,
        'z-index':5000
      });


};

// The trigger should show a centered overlay on top of the site that displays the information gathered above and two buttons. One button should close the overlay and the other should take the user to the cart page. It should have a style consistent with the website. Design matters. 


        // 'position':'fixed',
        // 'top':'-200px',
        // 'left':'30%',
        // 'right':'30%',
        // 'background-color':'#fff',
        // 'color':'#7F7F7F',
        // 'padding':'20px',
        // 'border':'2px solid #ccc',
        // '-moz-border-radius': '20px',
        // '-webkit-border-radius':'20px',
        // '-khtml-border-radius':'20px',
        // '-moz-box-shadow': '0 1px 5px #333',
        // '-webkit-box-shadow': '0 1px 5px #333',

</script>