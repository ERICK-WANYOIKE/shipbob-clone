const Hero = () => {
    return ( 
        <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:px-12 lg:w-6/12">
                <div class="lg:max-w-lg">
                    <h1 class="text-2xl font-semibold text-sm text-purple-900 font-fantasy leading-none  lg:text-3xl">
                    How ShipBob <br/> works
                    </h1>
                    <p class="mt-12 text-xs text-gray-900">
                    ShipBob is a tech-enabled 3PL. We use our proprietary software across our fulfillment network for a cohesive experience. 
                    Orders are automatically sent to our warehouses, where inventory is picked, packed, and shipped to your customers.
                     <br/>
                    Our fulfillment services help you optimize for time and cost, use the delivery experience to beat customer expectations, and own more of the customer relationship.
               
                  
                    </p>
                    <button className="h-10 px-6 mt-12 text-xs font-semibold rounded-full bg-purple-900 text-white">
                    Request A Fulfillment Quote
                    </button>  
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full mt-6 lg:px-8 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-2xl" src="https://www.shipbob.com/wp-content/uploads/2019/11/product-hero.jpg"/>
            </div>
        </div>
    </div>
          
     );
}
 
export default Hero;