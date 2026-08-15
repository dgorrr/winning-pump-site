import Link from "next/link";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#111318] text-zinc-300 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">


        <div className="grid gap-10 lg:grid-cols-4">


          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="
                flex h-10 w-10 
                items-center justify-center 
                rounded-md 
                bg-blue-600 
                text-sm 
                font-bold 
                text-white
              ">
                WP
              </div>


              <div>

                <p className="text-white font-semibold">
                  {company.brandName}
                </p>


                <p className="text-xs text-zinc-300">
                  {company.tagline}
                </p>

              </div>

            </div>



            <p className="
              mt-5 
              max-w-xs 
              text-sm 
              leading-relaxed
              text-zinc-300
            ">
              {company.facts.manufacturingExperience} of stainless steel pump
              manufacturing expertise.
              Providing reliable OEM and ODM
              solutions worldwide.
            </p>


          </div>





          {/* PRODUCTS */}
          <div>


            <h3 className="
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-white
            ">
              Products
            </h3>



            <ul className="
              space-y-3
              text-sm
              text-zinc-300
            ">


              <li>
                Circulating & Inline Pumps
              </li>


              <li>
                Boosting & Fire Pumps
              </li>


              <li>
                End Suction Pumps
              </li>


              <li>
                Sewage & Drainage Pumps
              </li>


            </ul>


          </div>






          {/* COMPANY */}
          <div>


            <h3 className="
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-white
            ">
              Company
            </h3>



            <ul className="
              space-y-3
              text-sm
            ">


              <li>

                <Link
                  href="/about"
                  className="
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                  About Us
                </Link>

              </li>



              <li>

                <Link
                  href="/rfq"
                  className="
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                  Request Quote
                </Link>

              </li>




              <li>

                <Link
                  href="/contact"
                  className="
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                  Contact
                </Link>

              </li>


            </ul>


          </div>








          {/* CONTACT */}
          <div>


            <h3 className="
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-white
            ">
              Contact
            </h3>



            <div className="
              text-sm
              leading-relaxed
              text-zinc-300
              space-y-4
            ">


              <p>
                {company.location.address},
                <br />
                {company.location.city}, {company.location.province},
                <br />
                {company.location.country} {company.location.postalCode}
              </p>




              <p>
                Tel:
                <br />

                <span className="text-zinc-300">
                  {company.contact.phone}
                </span>

              </p>





              <p>

                Email:
                <br />

                <a
                  href={`mailto:${company.contact.email}`}
                  className="
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                 {company.contact.email}
                </a>

              </p>



            </div>



          </div>



        </div>







        {/* COPYRIGHT */}

        <div className="
          mt-10
          border-t
          border-zinc-800
          pt-6
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-4
        ">


          <p className="
            text-xs
            text-zinc-600
          ">
            © {new Date().getFullYear()} {company.legalName}
            All rights reserved.
          </p>



          <div className="
            flex
            gap-6
            text-xs
            text-zinc-600
          ">

            <span>
              ISO 9001:2015
            </span>


            <span>
              CE Certified
            </span>


            <span>
              Export License
            </span>


          </div>


        </div>


      </div>


    </footer>
  );
}
