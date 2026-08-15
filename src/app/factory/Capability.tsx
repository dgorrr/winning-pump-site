export default function Capability() {

  const items = [
    {
      number: "01",
      title: "ENGINEERING CAPABILITY",
      text: "Independent engineering and product development capability supports reliable pump solutions.",
      image: "/images/factory/capability/motor.jpg"
    },
    {
      number: "02",
      title: "PRECISION MANUFACTURING",
      text: "Advanced forming, machining and automated production systems ensure consistent quality.",
      image: "/images/factory/capability/forming.jpg"
    },
    {
      number: "03",
      title: "GLOBAL OEM CAPABILITY",
      text: "From components to complete pump systems, Winning Pumps delivers reliable OEM and ODM solutions worldwide.",
      image: "/images/factory/capability/assembly.jpg"
    }
  ];


  return (

<section className="bg-[#f7f7f5] py-40">


<div className="max-w-7xl mx-auto px-8">


{/* HEADER */}

<div className="max-w-3xl mb-28">


<p className="
text-[11px]
tracking-[0.5em]
text-orange-400
mb-6
">
MANUFACTURING STRENGTH
</p>


<h2 className="
text-5xl
font-bold
leading-tight
text-slate-900
">

Integrated Manufacturing
<br/>
From Design To Production

</h2>


<p className="
mt-8
text-slate-500
leading-relaxed
max-w-xl
">

With independent engineering capability and integrated production systems,
Winning Pumps controls key manufacturing processes to deliver reliable OEM
and ODM solutions.

</p>


</div>





{/* FEATURE IMAGE */}


<div className="mb-36">


<div className="
relative
overflow-hidden
">


<img

src={items[2].image}

className="
w-full
aspect-[21/9]
object-cover
"

/>



<div className="
absolute
inset-0
bg-black/35
"/>




<div className="
absolute
left-10
bottom-10
text-white
max-w-xl
">


<p className="
text-xs
tracking-[0.5em]
text-orange-300
mb-5
">

03

</p>



<h3 className="
text-5xl
font-bold
leading-tight
">

GLOBAL OEM
<br/>
CAPABILITY

</h3>


<p className="
mt-6
text-white/80
leading-relaxed
">

{items[2].text}

</p>


</div>



</div>



</div>






{/* TWO FOUNDATION */}


<div className="
grid
md:grid-cols-2
gap-24
">



{
items.slice(0,2).map((item)=>(


<div
key={item.number}
>


<img

src={item.image}

className="
w-full
aspect-[4/3]
object-cover
"

/>



<div className="
mt-10
"
>


<p className="
text-orange-400
text-xs
tracking-[0.5em]
mb-5
">

{item.number}

</p>



<h3 className="
text-3xl
font-semibold
text-slate-900
leading-tight
">

{item.title}

</h3>



<p className="
mt-5
text-slate-500
leading-relaxed
">

{item.text}

</p>



</div>


</div>


))


}



</div>





{/* TRANSITION */}


<div className="
mt-36
pt-20
border-t
border-slate-200
text-center
">


<p className="
text-[11px]
tracking-[0.5em]
text-orange-400
mb-6
">

PRODUCTION PROCESS

</p>



<h3 className="
text-4xl
font-bold
text-slate-900
">

From Raw Material
To Complete Pump System

</h3>


<p className="
mt-5
text-slate-500
">

A complete manufacturing chain
from stainless steel forming to final performance testing.

</p>


</div>



</div>


</section>


  );
}