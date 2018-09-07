
var make_same_height_block = function(class_block){
    $("." + class_block).each(function () {
       $(this).css({ height: "auto" });
    });
    var mh = 0;
    $("." + class_block).each(function () {
       var h_block = parseInt($(this).height());
       if(h_block > mh) mh = h_block;
    });
    $("." + class_block).each(function () {
       $(this).css({ height: mh+"px" });
    });
}

var make_top_div = function(class_div){
    $("." + class_div).each(function () {
       $(this).css({ "margin-top": "0px" });
    });
    var m_offs = 0;
    $("." + class_div).each(function () {
       var offs_div = parseInt($(this).offset().top);
       if(offs_div > m_offs) m_offs = offs_div;
    });
    $("." + class_div).each(function () {
        var top_div = m_offs - parseInt($(this).offset().top);
        $(this).css({ "margin-top": top_div+"px" });
    });
}

$(window).resize(function() {
    make_same_height_block("main_title");
    make_top_div("main_button");
    make_top_div("sub_button");
});


$(document).ready(function(){
    make_same_height_block("main_title");
    make_top_div("main_button");
    make_top_div("sub_button");
});

$("#birthday_button").on( "click", function() {
    $("#curtain").css({ "display": "block" });
    $("#curtain").animate({
        opacity: 1
      }, 100, function() {});
    make_top_div("sub_button");
    $("#cust_birth_block").css({ "display": "block" });
    $("#cust_birth_block").animate({
        opacity: 1
      }, 100, function() {});
    make_same_height_block("main_title");
    make_top_div("sub_button");
});

$("#curtain").on( "click", function() {
    $("#curtain").css({ "display": "none" });
    $("#curtain").css({ "opacity": "0" });
    $("#cust_birth_block").css({ "display": "none" });
    $("#cust_birth_block").css({ "opacity": "0" });
});