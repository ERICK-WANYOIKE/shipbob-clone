export const Features = () => {
    return (
      <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-20 py-20">
        <div className="max-w-xl mb-12  md:mx-auto sm:text-center lg:max-w-2xl">
          <p className="text-base text-2xl text-gray-900 md:text-3xl">
          More than just picking, packing, <br/> and shipping
          </p>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
             <img src="https://www.shipbob.com/wp-content/uploads/2019/11/product-sec10-1.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
            Solutions for your unique needs
            </h6>
            <p className="max-w-md mb-3 text-xs text-gray-600 sm:mx-auto">
            ShipBob can accommodate your business if you require additional services such as kitting, 
            B2B orders, international fulfillment, and much more. 
            </p>
          </div>

          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img src="https://www.shipbob.com/wp-content/uploads/2019/11/product-sec10-2.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">A scalable partner as you grow</h6>
            <p className="max-w-md mb-3 text-xs text-gray-600 sm:mx-auto">
            From helping you grow to supporting your growth, ShipBob makes it easy to increase revenue, reduce cart abandonment,
            and expand domestically or internationally.
            </p>
          </div>

          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
           <img src="https://www.shipbob.com/wp-content/uploads/2019/11/product-sec10-3.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">World-class support</h6>
            <p className="max-w-md mb-3 text-xs text-gray-600 sm:mx-auto">
            You get fast support from the same people who are familiar with your unique needs.
             We also have on-site reps at each location to help troubleshoot any issues that arise. 
            </p>
          </div>
        </div>
      </div>
    );
  };