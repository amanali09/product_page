"use client";

import { classNames } from "utils/Function";
import { RadioGroup } from "@headlessui/react";

const Sizes = ({ detail, form, handleForm }) => (
  <div className="mt-10">
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <h3 className="text-sm font-bold text-gray-900 uppercase">Size</h3>
        {form && <span>{form.size}</span>}
      </div>
      <button className="text-sm font-medium  uppercase underline">
        Size guide
      </button>
    </div>

    <RadioGroup
      value={form}
      onChange={(data) => handleForm("size", data)}
      className="mt-4"
    >
      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        {detail.sizes.map((size) => (
          <RadioGroup.Option
            key={size.name}
            value={size.name}
            disabled={!size.inStock}
            className={({ active }) =>
              classNames(
                size.inStock
                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                  : "cursor-not-allowed text-gray-400",
                size.name === form?.size
                  ? " !bg-black text-white hover:bg-black"
                  : "",
                "group relative flex items-center justify-center rounded-full border py-1 px-4 text-sm font-medium uppercase hover:bg-gray-50  bg-white focus:outline-none sm:flex-1 sm:py-2"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                {size.inStock ? (
                  <span
                    className={classNames(
                      "pointer-events-none absolute -inset-px rounded-full"
                    )}
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[8px]  "
                  >
                    <svg
                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line
                        x1={0}
                        y1={100}
                        x2={100}
                        y2={0}
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                )}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  </div>
);

export default Sizes;
