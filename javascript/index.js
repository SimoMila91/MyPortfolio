// Scroll top button 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $("#topBtn").fadeIn();
        } else {
            $("#topBtn").fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });
});

/* Smooth scroll

Select all links with hashes */
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500)
      }
    }
  });

$(".card").addClass("h-100");


let text = ["I'm a pro", "I'm a programmer.", "And this is my portfolio."];
let word = document.getElementById("arrayTitle");
let counter = 0;
setInterval(arrayPro, 1500);
function arrayPro() {
    word.textContent = text[counter];
    counter++;
    if (counter >= text.length) {
        word.textContent = text[2];
    };
};

// Animated Responsive Skill Bar 

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1300) {
            $(".bar").each(function () {
                $(this).find(".bar-inner").animate({
                    width: $(this).attr("data-width")
                }, 2000)
            });
        };
    });
});

// Get year 

let date = new Date();

let year = date.getFullYear();

$(document).ready(function () {
    $('#year').text(year);
});
