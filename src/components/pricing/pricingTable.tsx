import React from 'react';
import { Check } from 'lucide-react';

const PricingTable = () => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-[#fbfef5] px-2 mt-9">
      {/* Header Row */}
      <div className="grid grid-cols-[1.6fr_1.2fr_1.2fr] border-b border-gray-200">
        <div className="px-6 py-4 text-left">
          <h3 className="text-lg font-medium text-gray-900">Overview</h3>
        </div>
        <div className="px-6 py-4 text-center   flex justify-center">
          <h3 className="text-lg font-medium text-gray-900">Essential (Free)</h3>
        </div>
        <div className="px-6 py-4 text-center  flex justify-center">
          <h3 className="text-lg font-medium text-gray-900">Premium</h3>
        </div>
      </div>

      {/* Table Rows */}
      {[
        ['Basic features', true, true],
        ['Number of Users', '20', 'Unlimited'],

        ['Content Management', '', ''],
        ['Authoring tools', true, true],
        ['Content libraries', true, true],
        ['Discussion Forum', true, true],
        ['Pre- & Post-Assessment', true, true],

        ['User Management', '', ''],
        ['Role-based access', true, true],
        ['User groups', true, true],
        ['Detailed profiles', true, true],

        ['Exam Module - MCQ', true, true],
        ['Digital Certificates', true, true],

        ['Reporting and analytics', '', ''],
        ['Report Generator', true, true],
        ['Data visualization', true, true],
        ['Export reports', true, true],

        ['Assistance', '', ''],
        ['Support', 'Community Support on Discord', 'Dedicated 24/7 Support'],
      ].map(([label, essential, premium], index) => {
        const isSectionHeader = !essential && !premium;

        return (
          <div
            key={index}
            className={`grid grid-cols-[1.6fr_1.2fr_1.2fr] border-b   border-gray-200 ${
              isSectionHeader ? '' : ''
            }`}
          >
            <div className="px-6 py-4">
              <span
                className={`text-gray-900 ${
                  isSectionHeader ? 'font-medium' : ''
                }`}
              >
                {label}
              </span>
            </div>

            <div className="px-6 py-4 border-x border-gray-200 flex justify-center text-center">
              {essential === true ? (
                <div className="w-6 h-6 text-gray-900 rounded flex items-center justify-center">
                  <Check className="w-6 h-6" strokeWidth={2.5} />
                </div>
              ) : (
                <span className="text-gray-900 text-sm">{essential}</span>
              )}
            </div>

            <div className="px-6 py-4   flex justify-cenWter text-center">
              {premium === true ? (
                <div className="w-6 h-6 rounded flex items-center justify-center">
                  <Check className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                </div>
              ) : (
                <span className="text-gray-900 text-sm">{premium}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingTable;
