$(document).ready(function(){
    
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.stickty').addClass("stick");
        }
        else{
             $('.stickty').removeClass("stick");   
        }
    })
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.firstSection').addClass("st");
        }
        else{
             $('.firstSection').removeClass("st");   
        }
    })

});
