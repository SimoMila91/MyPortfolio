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


let text = ["I'm a pro", "I'm a programmer.", "And this is my portfolio."];
let word = document.getElementById("arrayTitle");
let counter = 0;
setInterval(arrayPro, 1500);
function arrayPro() {
    word.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        word.innerHTML = text[2];
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
