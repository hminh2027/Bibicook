import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Disclosure, Transition } from "@headlessui/react";
const Filter = ({ title, content, ...props }) => {
  const [curSelection, setCurSelection] = useState(0);
  return (
    <Disclosure className="card items-start bg-pink-salmon-50 p-4" defaultOpen>
      <RadioGroup value={curSelection} onChange={setCurSelection}>
        <Disclosure.Button className="text-pink-salmon-600 w-full text-left">
          <RadioGroup.Label className=" cursor-pointer ">
            {title}
          </RadioGroup.Label>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform h-0 opacity-0"
          enterTo="transform h-full opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform h-full opacity-100"
          leaveTo="transform h-0 opacity-0"
        >
          <Disclosure.Panel className="">
            {content.map((item) => (
              <RadioGroup.Option key={item.value} value={item.value}>
                {({ checked, active }) => (
                  <span
                    className={`my-4 cursor-pointer  w-full
                  ${checked ? " text-pink-salmon-300" : "text-pink-salmon-900 "}
                 ${active ? "" : ""}
              `}
                  >
                    {item.label}
                  </span>
                )}
              </RadioGroup.Option>
            ))}
          </Disclosure.Panel>
        </Transition>
      </RadioGroup>
    </Disclosure>
  );
};

export default Filter;
