import React from 'react';
import PricingOption from '../pricingOption/PricingOption';

const Pricing = () => {

    const pricingOptions = [
      {
        id: 1,
        name: "free",
        price: 0,
        benifits: [
          "lifetime free",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
      {
        id: 2,
        name: "regular",
        price: 9.99,
        benifits: [
          "everything on free",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
      {
        id: 3,
        name: "premium",
        price: 19.99,
        benifits: [
          "evreything on regular",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
    ];


    return (
      <div className="mt-8 p-4 bg-indigo-400 ">
        <h1 className="text-6xl  font-mono text-white">
          Best deal of the town
        </h1>
        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero possimus odit aliquam dolores rerum nesciunt voluptatibus unde eos recusandae officiis.</p>
        <div className='grid md:grid-cols-3 mt-8 gap-3'>
            {
                pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
            }
        </div>
      </div>
    );
};

export default Pricing;