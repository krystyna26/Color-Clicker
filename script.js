function random_color(){
    var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    color = '#'  //this is what we'll return!
    for(var i = 0; i < 6; i++) 
    {
        x = Math.floor((Math.random()*16))
        color += rgb[x]; 
    }
    return color;
}
$(document).ready(function(){
    $('#large_box').click(function(){
        var largecolor = random_color();
        var smalcolor = random_color();
        $(this).css('background-color', largecolor);
        $(this).children().css('background-color', smalcolor);
    })
    $('.side_box').click(function(event){
        event.stopPropagation();
        var smalcolor = random_color();
        $(this).siblings().css('background-color', smalcolor);
        
    })
    $('.middle_box').click(function(event){
        var largecolor = random_color();
        $(this).parent().css('background-color', largecolor);
        event.stopPropagation();
    })
});