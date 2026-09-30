"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { company } from "@/data/company";


const slides = [
"/images/factory/hero/production.JPG",
  "/images/factory/hero/factory-hero.jpg",
  "/images/factory/hero/storage.jpg",

];


export default function Hero() {


const [index, setIndex] = useState(0);



useEffect(()=>{


const timer = setInterval(()=>{


setIndex((prev)=>
(prev + 1) % slides.length
);


},5000);



return ()=>clearInterval(timer);


},[]);





return (

<section
className="
relative
h-[780px]
overflow-hidden
"
>



{/* BACKGROUND */}

<div
className="
absolute
inset-0
"
>


<Image


src={slides[index]}


alt="Winning Pumps Manufacturing Facility"


fill


priority


className="
object-cover
transition-opacity
duration-1000
"


/>


</div>





{/* DARK OVERLAY */}

<div

className="
absolute
inset-0
bg-black/45
"

></div>







{/* CONTENT */}


<div

className="
relative
z-10
h-full
max-w-7xl
mx-auto
px-8
flex
items-center
"

>



<div

className="
max-w-xl
text-white
"

>



<p

className="
text-xs
tracking-[0.45em]
font-bold
text-orange-400
mb-6
"

>

MANUFACTURING EXCELLENCE

</p>







<h1

className="
text-5xl
md:text-6xl
font-black
leading-[1.05]
"

>

Pioneering Stainless Steel
<br/>
Pump Manufacturing
<br/>
Since {company.facts.pumpTechnologySince}

</h1>







<p

className="
mt-8
text-base
text-slate-200
leading-relaxed
max-w-md
"

>

From stainless steel forming to complete pump assembly,
Winning Pumps delivers reliable OEM & ODM solutions
to global markets.

</p>



</div>


</div>







{/* SLIDE INDICATORS */}


<div

className="
absolute
bottom-32
left-8
z-20
flex
gap-3
"

>


{
slides.map((_,i)=>(


<button

key={i}

onClick={()=>setIndex(i)}

className={`
h-2
rounded-full
transition-all
duration-300
${
index===i
?
"w-10 bg-white"
:
"w-2 bg-white/50"
}
`}

/>


))

}


</div>








{/* STATS BAR */}



<div

className="
absolute
bottom-0
left-0
right-0
bg-black/50
backdrop-blur-sm
"

>



<div

className="
max-w-7xl
mx-auto
px-8
grid
grid-cols-2
md:grid-cols-4
"

>





<div className="py-6">


<p className="text-3xl font-black text-white">

{company.facts.facilityArea}

</p>


<p className="text-xs text-slate-300 tracking-wider">

FACTORY AREA

</p>


</div>







<div className="py-6">


<p className="text-3xl font-black text-white">

{company.facts.manufacturingExperience}

</p>


<p className="text-xs text-slate-300 tracking-wider">

YEARS EXPERIENCE

</p>


</div>







<div className="py-6">


<p className="text-3xl font-black text-white">

{company.facts.employees}

</p>


<p className="text-xs text-slate-300 tracking-wider">

EMPLOYEES

</p>


</div>







<div className="py-6">


<p className="text-3xl font-black text-white">

{company.facts.markets}

</p>


<p className="text-xs text-slate-300 tracking-wider">

EXPORT COUNTRIES

</p>


</div>






</div>


</div>





</section>


)

}
