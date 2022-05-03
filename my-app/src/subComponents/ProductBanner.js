const ProductBanner = () => {
    return ( 
        <div className="bg-gray-100 px-6 py-16 lg:py-16 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="h-100 bg-cover lg:rounded-lg lg:h-full px-6 ">
                <img className="px-12 py-6" src="http://qesco.themezinho.net/wp-content/uploads/2020/10/side-image01.jpg" alt=""/>
                </div>
            </div>

            <div className="max-w-xl px-6 py-16 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-base text-purple-800  md:text-4xl">Fast and reliable <br/> shipping services  
                onboarding
                </h2>
                <p className="mt-4 text-gray-600 text-xs text-gray-900 w-9/12 ">
                We’ve onboarded thousands of ecommerce merchants and helped some of the fastest-growing brands scale effortlessly.
                Our implementation team sets you up for success with everything from configuring your ship options, to syncing your online store.
                <br/><br/>
                ShipBob’s turnkey integrations with all major ecommerce platforms and marketplaces – including Shopify, BigCommerce, Amazon, and Walmart – let you import orders and send data back and forth for a two-way flow of information.
                </p>
                
            </div>
        </div>
    </div> 
     );
}
 
export default ProductBanner;