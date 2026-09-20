import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
const AnimatedCounters = () => {
  return (
    <div id="counters" className="padding-x-lg xl:mt-0 mt-32 md:mt-[230px] ">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div key={`${item.label}-${index}`} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-lg p-10 flex flex-col justify-center transition-colors duration-300">
            <div
              className="counter-number text-gray-900 dark:text-white text-4xl font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-gray-600 dark:text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounters;
