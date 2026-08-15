import Hero from "./Hero";
import FactoryCapability from "./Capability";
import FactoryProcess from "./process";
import Philosophy from "./Philosophy";
import { company } from "@/data/company";


export default function FactoryPage() {

  return (

    <main>

      <Hero />

      <FactoryCapability />

      <FactoryProcess />

      <Philosophy />


      <section
        className="
        bg-slate-950
        text-white
        py-28
        "
      >

        <div
          className="
          max-w-5xl
          mx-auto
          px-6
          text-center
          "
        >

          <h2
  className="
  text-5xl
  md:text-6xl
  font-semibold
  leading-tight
  "
>
  Engineering Reliable
  <br />
  Pump Solutions Since {company.facts.pumpTechnologySince}
</h2>


          <p
  className="
  mt-8
  text-slate-300
  max-w-2xl
  mx-auto
  leading-relaxed
  "
>
  From precision components to complete pumping solutions,
  Winning Pumps delivers reliable OEM and ODM manufacturing
  capabilities for global partners.
</p>

          <button
            className="
            mt-10
            bg-white
            text-slate-900
            px-8
            py-3
            rounded-full
            font-bold
            "
          >
            Request A Factory Quote
          </button>


        </div>

      </section>


    </main>

  );

}
