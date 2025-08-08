import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fbfef5] text-[#0b0b2b] px-6 md:px-20 py-10 text-sm cursor-pointer">
      <div className="max-w-7xl mx-auto border-b font-semibold border-lime-200 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-[17px]">
        {/* Product */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Product</h4>
          <ul className="space-y-3 flex flex-col">
            <Link href={"/why"} className="hover:text-[#85c226]">Features</Link>
            <Link href={"/solutions"} className="flex items-center gap-2 hover:text-[#85c226]">
              Solutions
              <span className="text-xs bg-[#0b0b2b] text-white px-2 py-0.5 rounded-full">New</span>
            </Link>
            <a href="https://docs.academykit.co/app-documentation/post-deployment/general" target="_blank" rel="noopener noreferrer" className="hover:text-[#85c226]">Tutorials</a>
            <Link href={"/pricing"} className="hover:text-[#85c226]">Pricing</Link>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Company</h4>
          <ul className="space-y-3 flex flex-col">
            <Link href={"/about-us"} className="hover:text-[#85c226]">About us</Link>
            <a href={"https://docs.academykit.co/app-documentation/quickstart"} target="_blank" rel="noopener noreferrer" className="hover:text-[#85c226]">Media kit</a>
            <Link href={"/contact"} className="hover:text-[#85c226]">Contact</Link>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4 cursor-pointer">Resources</h4>
          <ul className="space-y-3 flex flex-col ">
            <Link href={"/FAQ"} className="hover:text-[#85c226]">FAQs</Link>
            <Link href={"/request-demo"} className="hover:text-[#85c226]">Request Demo</Link>
            <a href={"https://docs.academykit.co/app-documentation/introduction"} target="_blank" rel="noopener noreferrer" className="hover:text-[#85c226]">Help center</a>
            <a href={"mailto:hello@academykit.co"} className="hover:text-[#85c226]">Support</a>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Use cases</h4>
          <ul className="space-y-3 flex flex-col">
            <Link href={"/customer-success"} className="hover:text-[#85c226]">Customer Success</Link>
            <Link href={"/employee-training"} className="hover:text-[#85c226]">Employee Training</Link>
            <Link href={"/capacity-building"} className="hover:text-[#85c226]">Capacity Building</Link>
            <Link href={"/on-boarding"} className="hover:text-[#85c226]">On-Boarding</Link>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Legal</h4>
          <ul className="space-y-3 flex flex-col">
            <Link href={"/terms"} className="hover:text-[#85c226]">Terms</Link>
            <Link href={"/privacy"} className="hover:text-[#85c226]">Privacy</Link>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Community</h4>
          <ul className="space-y-2">
            <li className=" hover:text-[#85c226]">
              <a href="https://discord.com/invite/cqeE5DKNuH" 
              target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center" ><FaDiscord /> Discord</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <img src={'/logo.png'} className="h-8"/>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-700 mt-4 md:mt-0">© 2025 SursaTech</p>
      </div>
    </footer>
  );
}
