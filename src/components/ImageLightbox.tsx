"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


export default function ImageLightbox({

src,

alt,

}:{

src:string;

alt:string;

}){


const [open,setOpen]=useState(false);

const [scale,setScale]=useState(1);


const [position,setPosition]=useState({

x:0,

y:0

});


const [dragging,setDragging]=useState(false);


const [start,setStart]=useState({

x:0,

y:0

});





function reset(){

setScale(1);

setPosition({

x:0,

y:0

});

}




function close(){

setOpen(false);

reset();

}




useEffect(()=>{


const key=(e:KeyboardEvent)=>{

if(e.key==="Escape"){

close();

}

};


window.addEventListener(

"keydown",

key

);


return ()=>{

window.removeEventListener(

"keydown",

key

);

};


},[]);







function zoom(

e:React.WheelEvent

){


e.preventDefault();



setScale(prev=>{


let next = prev - e.deltaY * 0.001;



if(next < 1)

next = 1;



if(next > 5)

next = 5;



return next;


});


}







function mouseDown(

e:React.MouseEvent

){


if(scale<=1)

return;



setDragging(true);


setStart({

x:e.clientX-position.x,

y:e.clientY-position.y

});


}






function mouseMove(

e:React.MouseEvent

){


if(!dragging)

return;



setPosition({

x:e.clientX-start.x,

y:e.clientY-start.y

});


}






function mouseUp(){

setDragging(false);

}






return (

<>


<div

className="
relative
aspect-[4/3]
overflow-hidden
cursor-zoom-in
"

onClick={()=>setOpen(true)}

>


<Image

src={src}

alt={alt}

fill

className="
object-cover
"

/>


</div>





{

open &&

<div

className="
fixed
inset-0
z-[999]
bg-black/90
flex
items-center
justify-center
"

onClick={close}

>




<button

className="
absolute
right-8
top-6
text-white
text-5xl
z-50
"

onClick={close}

>

×

</button>






<div

className="
relative
w-[90vw]
h-[90vh]
"

onClick={(e)=>e.stopPropagation()}

>




<Image

src={src}

alt={alt}

fill

onWheel={zoom}

onMouseDown={mouseDown}

onMouseMove={mouseMove}

onMouseUp={mouseUp}

onMouseLeave={mouseUp}

draggable={false}

className={`
object-contain
select-none

${

dragging

?

"cursor-grabbing"

:

"cursor-grab"

}

`}


style={{

transform:

`translate(${position.x}px,${position.y}px) scale(${scale})`,

transition:

dragging

?

"none"

:

"transform .15s ease"

}}


/>



</div>





<div

className="
absolute
bottom-8
text-white
bg-black/50
px-4
py-2
rounded-full
text-sm
"

>

Scroll Zoom · Drag · ESC Close

</div>




</div>


}


</>


)

}