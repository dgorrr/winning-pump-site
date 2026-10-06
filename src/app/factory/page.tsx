import Link from "next/link";
import Hero from "./Hero";
import FactoryCapability from "./Capability";
import FactoryProcess from "./process";
import Philosophy from "./Philosophy";
import { company } from "@/data/company";

export default function FactoryPage() {
  return (
    <div>

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

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/products"
              className="
                bg-white
                text-slate-900
                px-8
                py-3
                rounded-full
                font-bold
                hover:bg-slate-100
                transition
              "
            >
              Explore Our Pumps
            </Link>

            <Link
              href="/solutions"
              className="
                border
                border-white/30
                bg-white/10
                text-white
                px-8
                py-3
                rounded-full
                font-bold
                hover:bg-white/20
                transition
              "
            >
              Explore Pump Solutions
            </Link>

            <Link
              href="/products?action=rfq#rfq"
              className="
                border
                border-orange-400/40
                bg-orange-500
                text-white
                px-8
                py-3
                rounded-full
                font-bold
                hover:bg-orange-400
                transition
              "
            >
              Request A Factory Quote
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}