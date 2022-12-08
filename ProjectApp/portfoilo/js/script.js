$(document).ready(function(){
   var menu = $(".menu");
   var hamberger = $(".hamburger");
   var Line = $(".line");
   var menuOpen;
   
   


function openMenu(){
    menu.css("left","0px");
    Line.css("background","fff");
    menuOpen = true;
}

 function closeMenu(){
    menu.css("left","-320px")
    Line.css("background","orange");
    menuOpen = false;
 }
 function toggleMenu(){
    if (menuOpen){
        closeMenu();
    }
    else{
        openMenu();
    }
 }
 hamberger.on({
    mouseenter:function(){
        openMenu();
    }
}) 
    menu.on({
        mouseleave:function(){
            closeMenu();
        }
    })
    hamberger.on({
        click:function(){
            toggleMenu();
        }
    })
    


});

