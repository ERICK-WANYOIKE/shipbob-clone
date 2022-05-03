const SubWraper = () => {
    return ( 
        <div className="bg-gray-100 px-6 py-16 lg:py-16 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="h-100 bg-cover lg:rounded-lg lg:h-full px-6 ">
                <img className="px-12 py-6" src="https://www.shipbob.com/wp-content/uploads/2019/11/product-sec4.png" alt=""/>
                </div>
            </div>

            <div className="max-w-xl px-6 py-16 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-base text-purple-800  md:text-4xl">
                Inventory <br/> management 
                </h2>
                <p className="mt-4 text-gray-600 text-xs text-gray-900 w-9/12 ">
                At ShipBob, we empower merchants to manage their inventory with the right tools and guidance. It’s easy to view the status of inventory and quantity on hand across locations at any point in time, identify slow-moving inventory with high storage costs, and gain insights into the performance of units sold over time by channel.
                  <br/><br/>
                Our inventory management software helps you set reminders to proactively replenish inventory with reorder notifications, bundle your products for promotions, make inventory transfer requests, and much more.
                
                
                </p>
                
            </div>
        </div>
    </div> 
     );
}
 
export default SubWraper;