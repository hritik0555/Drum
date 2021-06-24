

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


function handleClick()
    {
        
     var tune=this.innerHTML;
     if(tune=='w')
     {
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
     }
     else if(tune=='a')
     {
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play(); 
     }
     else if(tune=='s')
     {
        var audio=new Audio('sounds/snare.mp3');
        audio.play(); 
     }

     else if(tune=='d')
     {
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play(); 
     }
     else if(tune=='j')
     {
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play(); 
     }
     else if(tune=='k')
     {
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play(); 
     }
     else{
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play(); 
     }


    }

