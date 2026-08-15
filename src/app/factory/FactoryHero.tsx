"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


const slides = [
  {
    image:
      "/images/factory/hero/factory-overview.jpg",
    title:
      "Pioneering Stainless Steel Pump Manufacturing Since 1995",
    subtitle:
      "From stainless steel forming to complete pump assembly."
  },

  {
    image:
      "/images/factory/hero/stamping.jpg",
    title:
      "Advanced Stainless Steel Forming Technology",
    subtitle:
      "Precision manufacturing with proven industrial expertise."
  },

  {
    image:
      "/images/factory/hero/motor.jpg",
    title:
      "Independent Motor Manufacturing Capability",
    subtitle:
      "Complete control from core components to finished pumps."
  },

  {
    image:
      "/images/factory/hero/welding.jpg",
    title:
      "Automated Welding Systems",
    subtitle:
      "Consistent quality through advanced production equipment."
  },

  {
    image:
      "/images/factory/hero/assembly.jpg",
    title:
      "Complete Pump Manufacturing Solutions",
    subtitle:
      "OEM & ODM solutions for global markets."
  }
];


export default function FactoryHero(){

const [index,setIndex]=useState(0);


useEffect(()=>{

const timer=setInterval(()=>{

setIndex((prev)=>
(prev+1)%slides.length
)

},5000);


return()=>clearInterval(timer);

},[]);



return(

<section className="
relative
h-[82vh]
overflow-hidden
">


<Image

src={slides[index].image}

alt="factory"

fill

className="
object-cover
transition-opacity
duration-1000
"

/>


<div className="
absolute
inset-0
bg-black/45
"/>


<div className="
relative
z-10
h-full
flex
items-center
max-w-6xl
mx-auto
px-6
">


<div className="
max-w-3xl
text-white
">


<p className="
text-orange-400
tracking-[0.4em]
text-xs
font-bold
mb-6
">

MANUFACTURING EXCELLENCE

</p>


<h1 className="
text-5xl
md:text-7xl
font-black
leading-tight
">

{slides[index].title}

</h1>


<p className="
mt-8
text-lg
text-slate-200
">

{slides[index].subtitle}

</p>


</div>


</div>


</section>

)

}