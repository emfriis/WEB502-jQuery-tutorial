$(document).ready(function(){
    
    $("button.button1").click(function(){
        $("p.selectors1").text('Text changed with selectors');
    });

    $("button.button2").click(function(){
        $("p.selectors1").append(' and text added with selectors');
    });

    $("button.button3").click(function(){
        $("p.selectors, p.selectors2").css("background-color", "red");
    });

    $("button.button4").click(function(){
        $("img.selectors3").attr({
            src: "images/345-3456383_moon-and-stars-comments-moon-drawing-png-clipart.png",
            title: "Moon",
            alt: "Attribute Change",
            border: "4px solid black"
        });
    });

  });