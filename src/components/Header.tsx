'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { company } from "@/data/company";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/products', label: 'Products' },
    { href: '/factory', label: 'Factory' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];



  return (

<header
className={`
fixed
top-0
left-0
w-full
z-50
transition-all
duration-300

${
scrolled
?
"bg-white shadow-md border-b border-slate-200"
:
"bg-black/20 backdrop-blur-sm"
}

`}
>


<div className="max-w-7xl mx-auto px-6">

<div className="flex items-center justify-between h-20">


{/* LOGO */}

<Link href="/" className="flex items-center gap-2">

<div
className={`
w-10
h-10
rounded-xl
flex
items-center
justify-center

${
scrolled
?
"bg-[#0A66C2]"
:
"bg-white"
}

`}
>

<span
className={`
font-bold
text-2xl

${
scrolled
?
"text-white"
:
"text-[#0A66C2]"
}

`}
>
W
</span>

</div>



<span
className={`
font-semibold
text-2xl
tracking-tight

${
scrolled
?
"text-slate-900"
:
"text-white"
}

`}
>
{company.brandName.toUpperCase()}
</span>


</Link>





{/* DESKTOP NAV */}

<nav
className="
hidden
md:flex
items-center
gap-8
text-base
font-medium
"
>

{
navLinks.map((link)=>(

<Link

key={link.href}

href={link.href}

className={`
transition

${
scrolled
?
"text-slate-700"
:
"text-white"
}

hover:text-[#0A66C2]

`}

>

{link.label}

</Link>

))

}


</nav>





{/* BUTTONS */}

<div
className="
hidden
md:flex
items-center
gap-3
"
>



<Link

href="/products?action=rfq#rfq"

className={`
px-5
py-2.5
text-sm
font-semibold
rounded-2xl
transition-all

${
scrolled

?

"border border-[#0A66C2] text-[#0A66C2] bg-white"

:

"border border-white text-white bg-transparent"

}

hover:bg-[#0A66C2]
hover:text-white

`}

>

Request a Quote

</Link>




<Link

href="/contact"

className="
px-5
py-2.5
text-sm
font-semibold
bg-[#0A66C2]
text-white
rounded-2xl
hover:bg-[#084d94]
transition
"

>

Contact Us

</Link>


</div>






{/* MOBILE BUTTON */}

<button

onClick={()=>setIsMenuOpen(!isMenuOpen)}

className="
md:hidden
p-2
"

>

<div className="space-y-1.5">


<span
className={`
block
w-6
h-0.5

${
scrolled
?
"bg-slate-900"
:
"bg-white"
}

transition
`}
></span>


<span
className={`
block
w-6
h-0.5

${
scrolled
?
"bg-slate-900"
:
"bg-white"
}

transition
`}
></span>


<span
className={`
block
w-6
h-0.5

${
scrolled
?
"bg-slate-900"
:
"bg-white"
}

transition
`}
></span>


</div>

</button>



</div>

</div>





{/* MOBILE MENU */}

{

isMenuOpen &&

(

<div
className="
md:hidden
border-t
bg-white
px-6
py-6
"
>


<nav
className="
flex
flex-col
gap-4
text-base
font-medium
"
>


{

navLinks.map((link)=>(

<Link

key={link.href}

href={link.href}

className="
hover:text-[#0A66C2]
"

onClick={()=>setIsMenuOpen(false)}

>

{link.label}

</Link>

))

}


</nav>


</div>

)

}



</header>


  );

}
