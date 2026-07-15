import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
      <div className="container-main py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-lg font-bold text-white">
                WP
              </div>
              <div>
                <p className="font-bold text-white">Winning Pumps</p>
                <p className="text-xs text-zinc-400">Professional Water Pump Manufacturer</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Professional water pump manufacturer in China. Serving global B2B
              clients with quality products and reliable OEM/ODM services.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=submersible" className="hover:text-white">
                  Submersible Pumps
                </Link>
              </li>
              <li>
                <Link href="/products?category=centrifugal" className="hover:text-white">
                  Centrifugal Pumps
                </Link>
              </li>
              <li>
                <Link href="/products?category=booster" className="hover:text-white">
                  Booster Pumps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rfq" className="hover:text-white">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                Longtoushan Industrial Zone,BeiGuan Town,Yangdong District
                <br />
                Yangjiang City, Guangdong Province, China 529932
              </li>
              <li>
                <a  className="hover:text-white">
                Tel: +86-0662-8886888
                Email:727599117@qq.com
                </a>
              </li>
              <li>
                <a href="mailto:sales@winningpumps.com" className="hover:text-white">
                
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-700 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Winning Pumps Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-400">
            <span>ISO 9001:2015</span>
            <span>CE Certified</span>
            <span>Export License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}