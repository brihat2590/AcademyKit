import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fbfef5] text-[#0b0b2b] px-6 md:px-20 py-10 text-sm cursor-pointer">
      <div className="max-w-7xl mx-auto border-b font-semibold border-lime-200 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-[17px]">
        {/* Product */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Product</h4>
          <ul className="space-y-3">
            <li className="hover:text-[#85c226]">Features</li>
            <li className="flex items-center gap-2 hover:text-[#85c226]">
              Solutions
              <span className="text-xs bg-[#0b0b2b] text-white px-2 py-0.5 rounded-full">New</span>
            </li>
            <li className="hover:text-[#85c226]">Tutorials</li>
            <li className="hover:text-[#85c226]">Pricing</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Company</h4>
          <ul className="space-y-3">
            <li className="hover:text-[#85c226]">About us</li>
            <li className="hover:text-[#85c226]">Media kit</li>
            <li className="hover:text-[#85c226]">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4 cursor-pointer">Resources</h4>
          <ul className="space-y-3 ">
            <li className="hover:text-[#85c226]">FAQs</li>
            <li className="hover:text-[#85c226]">Request Demo</li>
            <li className="hover:text-[#85c226]">Help center</li>
            <li className="hover:text-[#85c226]">Support</li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Use cases</h4>
          <ul className="space-y-3">
            <li className="hover:text-[#85c226]">Customer Success</li>
            <li className="hover:text-[#85c226]">Employee Training</li>
            <li className="hover:text-[#85c226]">Capacity Building</li>
            <li className="hover:text-[#85c226]">On-Boarding</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Legal</h4>
          <ul className="space-y-3">
            <li className="hover:text-[#85c226]">Terms</li>
            <li className="hover:text-[#85c226]">Privacy</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-4">Community</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-1 hover:text-[#85c226]">
              <FaDiscord /> Discord
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
        <p className="text-sm text-gray-700 mt-4 md:mt-0">© 2024 SursaTech</p>
      </div>
    </footer>
  );
}
