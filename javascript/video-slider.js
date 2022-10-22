const videos=document.querySelectorAll("video");
let count=0
const intervalTime=10000
setInterval(()=>{
    changeSlide(videos)
},intervalTime)
function changeSlide(array)
{  
    if(count<array.length)
    {
        if(count==array.length-1)
        {changeClass(array,count,"hidden")
            count=0
            changeClass(array,count,"header__video")
        }
        else{
               changeClass(array,count,"hidden")
        count++
        changeClass(array,count,"header__video")
        }
}
}
function changeClass(elementArray,index,className)
{
elementArray[index].className="" + className
}