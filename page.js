var btn = document.querySelector(".btn");
var swt =document.querySelector(".switch");
var video = document.querySelector("video");
btn.addEventListener('click' , function()
{
    if(!btn.classList.contains("slide"))
      {
        btn.classList.add("slide");
        video.pause();
      }
    else
   {
    btn.classList.remove("slide");
    video.play();
   }

})