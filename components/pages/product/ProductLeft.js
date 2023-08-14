import { classNames } from "utils/Function";
import React, { useState } from "react";
import Details, { Delivery, Fit, Share } from "./Tabs";

const tabs = [
  { name: "Details", href: "#", current: false },
  { name: "Delivery", href: "#", current: false },
  { name: "Fit", href: "#", current: true },
  { name: "Share", href: "#", current: false },
];
const ProductLeft = () => {
  const [active, setActive] = useState(0);

  const selectTab = (index) => setActive(index);

  return (
    <div className="sm:pr-4 sm:order-none order-last sm:block hidden">
      <div className="sm:sticky top-0" id="left-panel">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab, i) => i === active).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab, i) => (
              <button
                key={tab.name}
                href={tab.href}
                className={classNames(
                  i === active
                    ? " text-black font-semibold"
                    : "text-gray-500 hover:text-gray-700",
                  "rounded-md px-3 py-2 text-sm  uppercase"
                )}
                onClick={() => selectTab(i)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
          <div className="font-xs px-3">
            {active === 0 && <Details />}
            {active === 1 && <Delivery />}
            {active === 2 && <Fit />}
            {active === 3 && <Share />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductLeft;
