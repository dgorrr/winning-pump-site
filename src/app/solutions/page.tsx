import Image from "next/image";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import ImageLightbox from "@/components/ImageLightbox";

export default function SolutionsPage() {
  return (
    <div>

      {/* HERO */}
      <section
        className="
          relative
          h-[620px]
          overflow-hidden
        "
      >
        <Image
          src="/images/solutions/solutions-hero.jpg"
          alt="Pump Solutions"
          fill
          priority
          className="object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-black/45
          "
        />

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-8
            h-full
            flex
            items-center
            pt-20
          "
        >
          <div
            className="
              max-w-2xl
              text-white
            "
          >
            <p
              className="
                text-base
                tracking-[0.45em]
                text-orange-400
                font-bold
                mb-6
              "
            >
              ENGINEERED SOLUTIONS
            </p>

            <h1
              className="
                text-5xl
                md:text-6xl
                font-black
                leading-tight
              "
            >
              Engineered Pump Solutions
              <br />
              For Every Fluid Challenge
            </h1>

            <p
              className="
                mt-8
                text-lg
                text-slate-200
                leading-relaxed
              "
            >
              30+ years of pump manufacturing expertise,
              delivering reliable fluid transfer solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION SOLUTIONS */}
      <section
        className="
          max-w-[1440px]
          mx-auto
          px-10
          py-24
        "
      >
        <div className="mb-12">
          <p
            className="
              text-sm
              tracking-[0.4em]
              text-orange-500
              font-semibold
            "
          >
            APPLICATION SOLUTIONS
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              text-slate-900
            "
          >
            Find The Right Pump For Your Application
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-slate-500
            "
          >
            Explore pump recommendations based on different application requirements.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {solutions.map((item) => (
            <div
              key={item.slug}
              className="
                group
                bg-white
                border
                border-slate-200
                rounded-xl
                overflow-hidden
                hover:shadow-lg
                transition
                duration-300
              "
            >
              <ImageLightbox
                src={item.image}
                alt={item.title}
              />

              <div className="p-6">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <div className="mt-6">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-widest
                      font-bold
                      text-blue-600
                    "
                  >
                    Challenge
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    {item.challenge}
                  </p>
                </div>

                <div className="mt-5">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-widest
                      font-bold
                      text-slate-400
                    "
                  >
                    Pump Recommendation
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    {item.recommendation}
                  </p>
                </div>

                {/* RECOMMENDED PUMPS */}
                <div className="mt-6">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-widest
                      font-bold
                      text-slate-400
                    "
                  >
                    Recommended Pumps
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {item.pumps.map((pump) => (
                      <Link
                        key={pump.name}
                        href={pump.url}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          bg-blue-50
                          text-blue-700
                          text-xs
                          hover:bg-blue-100
                          transition
                        "
                      >
                        {pump.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="
                    inline-block
                    mt-6
                    text-sm
                    font-semibold
                    text-blue-600
                    hover:text-blue-800
                  "
                >
                  Explore Solution →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="
          bg-slate-50
          py-24
        "
      >
        <div
          className="
            max-w-[1200px]
            mx-auto
            px-8
          "
        >
          <div
            className="
              text-center
              mb-14
            "
          >
            <p
              className="
                text-xs
                tracking-[0.4em]
                text-orange-500
                font-semibold
              "
            >
              OUR PROCESS
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
              "
            >
              How We Help You Select The Right Pump
            </h2>

            <p
              className="
                mt-4
                text-slate-500
              "
            >
              From application requirements to pump recommendation,
              we help you find a suitable pumping solution.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
            "
          >
            <div
              className="
                bg-white
                rounded-xl
                border
                border-slate-200
                p-8
              "
            >
              <div
                className="
                  text-5xl
                  font-black
                  text-blue-600
                "
              >
                01
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                "
              >
                Hydraulic Requirements Review
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  text-slate-600
                  leading-relaxed
                "
              >
                Submit your flow, head and operating conditions.
                Our engineers review your application requirements.
              </p>
            </div>

            <div
              className="
                bg-white
                rounded-xl
                border
                border-slate-200
                p-8
              "
            >
              <div
                className="
                  text-5xl
                  font-black
                  text-blue-600
                "
              >
                02
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                "
              >
                Pump Selection & Engineering Support
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  text-slate-600
                  leading-relaxed
                "
              >
                We recommend suitable pump solutions based on performance requirements.
              </p>
            </div>

            <div
              className="
                bg-white
                rounded-xl
                border
                border-slate-200
                p-8
              "
            >
              <div
                className="
                  text-5xl
                  font-black
                  text-blue-600
                "
              >
                03
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                "
              >
                Manufacturing & Global Delivery
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  text-slate-600
                  leading-relaxed
                "
              >
                Quality-controlled production with reliable worldwide delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          bg-slate-950
          text-white
          py-20
        "
      >
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
            px-8
          "
        >
          <p
            className="
              text-xs
              tracking-[0.4em]
              text-orange-400
            "
          >
            PUMP CONSULTATION
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
            "
          >
            Unsure Which Pump Fits Your Application?
          </h2>

          <p
            className="
              mt-5
              text-slate-300
            "
          >
            Talk directly with our engineering team.
            Receive pump selection support, technical documents and factory-direct quotation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="
                inline-block
                bg-white
                text-slate-900
                px-8
                py-3
                rounded-full
                font-semibold
              "
            >
              Request A Quote
            </Link>

            <Link
              href="/products"
              className="
                inline-block
                border
                border-white/30
                bg-white/10
                text-white
                px-8
                py-3
                rounded-full
                font-semibold
                hover:bg-white/20
                transition
              "
            >
              Explore Pump Catalog
            </Link>

            <Link
              href="/factory"
              className="
                inline-block
                border
                border-white/30
                bg-white/10
                text-white
                px-8
                py-3
                rounded-full
                font-semibold
                hover:bg-white/20
                transition
              "
            >
              Manufacturing & OEM
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}