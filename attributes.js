$(document).ready(function(){

  $("button.button5").click(function(){
    var src = $("img.attributes1").attr("src");
      alert(src);
      $("img.attributes1").attr("src", "images/57-574602_half-of-a-yellow-sun-computer-icons-yellow.jpg");
  });

  $("button.button6").click(function(){
    $("img.attributes2").attr({
       src: "images/345-3456383_moon-and-stars-comments-moon-drawing-png-clipart.png",
       title: "Title Changed",
       alt: "Attribute Changed",
    });
});

  $("button.button7").click(function(){
    var src = $("img.attributes3").removeAttr("src");
  });

});