"use client";

import Link from "next/link";
import React from "react";

export default function FAQ() {
  return (
    <section className="bg-[#fbfef5] px-6 md:px-16 py-12 text-indigo-950 border-b border-gray-200      ">
    
      <div className="max-w-7xl mx-auto ">
        <h4 className="text-sm font-semibold text-gray-500">Support</h4>
        <h2 className="text-4xl font-bold my-3">FAQs</h2>
        <p className="text-lg text-indigo-950 mb-10">
          Everything you need to know about AcademyKit. Can’t find the answer
          you’re looking for? Please{" "}
          <Link href=" /contact" className="text-[#85c226] underline hover:opacity-80">
            let us know.
          </Link>
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-sm md:text-base">
          {/* FAQ 1 */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Is It Really Free</h3>
            <p className="">
              Yes, if your team is small, then AcademyKit is free for you for a
              lifetime. You may download and use it within your premises with
              your own resources.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">
              Can You Provide Technical Support?
            </h3>
            <p className="">
              Yes, if you need any assistance installing our software, we can
              help. Please contact us at{" "}
              <a
                href="mailto:hello@academykit.co"
                className="text-[#85c226] underline"
              >
                hello@academykit.co
              </a>
              .
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">
              How Many Users Can The Free Version Accommodate?
            </h3>
            <p className="">
              Currently, the free version can support up to 20 users. If you
              require the involvement of more people, you'll need to upgrade
              your plan.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">
              Is AcademyKit Suitable For My Organization?
            </h3>
            <p className="">
              AcademyKit caters to a diverse range of users, including
              educational institutions, corporations, individual educators, and
              trainers. Whether you're managing a large-scale training program
              or a single course, AcademyKit offers the flexibility and
              scalability to meet your organization's needs.
            </p>
          </div>

          {/* FAQ 5 */}
          <div>
            <h3 className="font-semibold mb-2">
              Can I Customize AcademyKit To Fit My Branding?
            </h3>
            <p className="">
              Yes, AcademyKit offers extensive customization options, allowing
              you to personalize the platform to align with your organization's
              branding and unique requirements. From logo integration to color
              schemes, you can create a cohesive learning environment that
              reflects your brand identity.
            </p>
          </div>

          {/* FAQ 6 */}
          <div>
            <h3 className="font-semibold mb-2">
              How Easy Is It To Set Up AcademyKit On My Server?
            </h3>
            <p className="">
              Setting up AcademyKit is straightforward and intuitive, with
              step-by-step instructions provided in our documentation. You can
              simply download and deploy on your server. Our support team is
              also available to assist you with any questions or issues you may
              encounter during the setup process.
            </p>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
