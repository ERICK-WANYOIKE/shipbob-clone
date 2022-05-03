const ProductFeature = () => {
    return (
        <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
          Services We Offer
          </p>
          <p className="text-base text-lg  text-indigo-700 md:text-2xl">
             We Manage Lead Logistics For World’s Multinational Companies.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 pt-12"
              src="https://www.dbschenker.com/resource/image/2228/16:9/767/0/d451dee9bbffd8c60e1a0b6bfc0b9644/oU/air-product-stage-image--global-en-.jpg"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Air Freight
            </h5>
            <p className="text-gray-700 text-xs ">
            with a global network and advanced logistics solutions, 
            our air freight services provide comprehensive solutions for your air cargo needs.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://www.dbschenker.com/resource/image/2294/16:9/767/0/17641fb020ae449a65cc336421dc81aa/xl/lt-product-stage-image--global-en-.jpg"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Land Transport
            </h5>
            <p className="text-gray-700 text-xs">
            With 430 land transportation branches across Europe, 
            DB Schenker’s land transport products and services cover an extensive network. From road to rail, our surface freight solutions get your shipments where they need to be, when they need to be there
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://www.dbschenker.com/resource/image/639398/16:9/767/0/32146d460a18dcd795728bb8a33ab9bf/Bi/ocean-freight-category-focus-right-global-en-.jpg"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Ocean Freight
            </h5>
            <p className="text-gray-700 text-xs">
            DB Schenker’s ocean freight ships more than 5,500 containers a day to ports all around the world, 
            making us a top forwarder for your ocean freight shipment
            </p>
          </div>
        </div>
      </div>
      );
}
 
export default ProductFeature;