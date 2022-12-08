$(document).ready(function(){
    var buttontogo = $(".buttontogo");
    var animatebox = $(".container");
    var animateopen;
    
    function section2open(){
        animatebox.css("left","0px");
        animateopen = true;
    }
    function section2close(){
        animatebox.css("left","-320px");
        animateopen = false;
    }
    function toggleanimate(){
        if (animateopen){
            section2close()
        }
        else{
            section2open()
        }
     }
     
    buttontogo.on({
      click:function(){
        toggleanimate()
      }
    })
    buttontogo.on({
        mouseenter:function(){
            section2open();
        }
    }) 
        menu.on({
            mouseleave:function(){
                section2close();
            }
        })
})