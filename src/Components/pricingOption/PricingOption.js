
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefits/Benefit';

const PricingOption = (props) => {
    const {name,price,benifits}=props.option;
    return (
      <div className="bg-white p-4 rounded-lg">
        <h2 className="capitalize bg-indigo-300 py-4 text-xl font-bold">
          {name}
        </h2>
        <p>
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-2xl font-bold text-gray-500">/mo</span>
        </p>
        <div className="bg-indigo-200 rounded">
          <h3 className="text-2xl m-3 capitalize font-bold text-left">
            benifits :{" "}
          </h3>
          {benifits.map((benefit) => (
            <Benefit benefit={benefit}></Benefit>
          ))}
        </div>
        <button className="capitalize text-xl font-bold bg-green-500 w-full rounded p-2 flex items-center justify-center hover:bg-indigo-400 ">
          buy now <ArrowRightIcon className="w-4 h-4 ml-2"></ArrowRightIcon>
        </button>
      </div>
    );
};

export default PricingOption;