export default function Process() {

const processes = [
{
number:"01",
title:"Material Preparation",
description:"Carefully selected stainless steel materials provide the foundation for reliable pump production.",
image:"/images/factory/process/material.jpg",
},
{
number:"02",
title:"Stainless Steel Forming",
description:"Advanced stamping technology shapes stainless steel components with high consistency.",
image:"/images/factory/process/forming.jpg",
},
{
number:"03",
title:"Precision Machining",
description:"CNC machining processes ensure accurate dimensions and stable performance.",
image:"/images/factory/process/machining.jpg",
},
{
number:"04",
title:"Motor Manufacturing",
description:"Independent motor manufacturing capability supports complete pump solutions.",
image:"/images/factory/process/motor.jpg",
},
{
number:"05",
title:"Pump Assembly",
description:"Professional assembly lines integrate components into finished pump systems.",
image:"/images/factory/process/assembly.jpg",
},
{
number:"06",
title:"Performance Testing",
description:"Every pump undergoes strict testing before delivery to ensure reliability.",
image:"/images/factory/process/testing.jpg",
},
{
number:"07",
title:"Global Delivery",
description:"Reliable packaging and logistics services support global customers.",
image:"/images/factory/process/delivery.jpg",
}
];


return (

<section className="bg-white py-40">


<div className="max-w-6xl mx-auto px-6">


{/* TITLE */}

<div className="mb-32">

<p className="
text-xs
tracking-[0.5em]
text-orange-400
mb-8
">
PRODUCTION PROCESS
</p>


<h2 className="
text-4xl
md:text-5xl
font-bold
text-slate-900
leading-tight
">

From Raw Material
<br/>
To Complete Pump System

</h2>


<p className="
mt-8
max-w-xl
text-slate-500
leading-relaxed
">

A complete manufacturing chain
from stainless steel forming
to final performance testing.

</p>

</div>




{/* GALLERY */}


<div className="space-y-40">


{processes.map((item,index)=>(


<div

key={item.number}

className={`

grid
md:grid-cols-12
gap-16
items-center

`}

>


{/* IMAGE */}


<div

className={`

md:col-span-7

${index % 2 !== 0 ? "md:order-2" : ""}

`}

>


<div className="
overflow-hidden
rounded-2xl
">

<img

src={item.image}

alt={item.title}

className="
w-full
aspect-[4/3]
object-cover
hover:scale-105
transition-transform
duration-700
"

/>

</div>


</div>



{/* TEXT */}


<div

className={`

md:col-span-5

${index % 2 !== 0 ? "md:order-1" : ""}

`}

>


<p className="
text-sm
tracking-[0.4em]
text-orange-400
mb-8
">

{item.number}

</p>



<h3 className="
text-2xl
md:text-3xl
font-semibold
text-slate-900
mb-6
">

{item.title}

</h3>



<p className="
text-slate-500
leading-relaxed
max-w-sm
">

{item.description}

</p>


</div>



</div>


))}


</div>


</div>


</section>

)

}