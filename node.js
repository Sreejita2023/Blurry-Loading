const img=document.querySelector('.bk-img')
const text=document.querySelector('.loading-text')
let load=0;
let interval=setInterval(frame,30)
function frame(){
    load++
    if(load>99){clearInterval(interval)}
    text.innerHTML=`${load}`+"%"
    text.style.opacity=scale(load,0,100,1,0)
    img.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}