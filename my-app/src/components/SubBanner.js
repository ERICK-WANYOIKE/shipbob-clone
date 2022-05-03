const SuBanner = () => {
    return (  
        <div className="bg-gray-100 px-6 py-16 lg:py-16 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="h-100 bg-cover lg:rounded-lg lg:h-full px-6 ">
                <img className="px-12 py-6" src="https://www.shipbob.com/wp-content/uploads/2020/02/2-Day-Express_Cart_iPhone-e1620748167529.png" alt=""/>
                </div>
            </div>

            <div className="max-w-xl px-6 py-16 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl fpont-basetext-purple-800  md:text-4xl">2-Day Express <br/>
                 Shipping Program
            
                </h2>
                <p className="mt-4 text-gray-600 text-xs text-gray-900 w-9/12 ">
                ShipBob’s 2-Day Express Shipping Program enables fast delivery for all continental US orders for any of our ecommerce store integrations. With 2-day shipping as the standard, merchants have been able to reduce cart abandonment by 18% and increase average order value by 97%. 
                 <br/><br/>
                Whether you ship from one or multiple fulfillment center locations, you can offer fast delivery to 100% of US-based customers. Our proprietary algorithm uses a combination of ground, air, and regional carriers to provide high on-time delivery rates for 2-day orders. 
                </p>
                
            </div>
        </div>
    </div>   
    );
}
 
export default SuBanner;