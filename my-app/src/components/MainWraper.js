const MainWraper = () => {
    return (
        <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:px-12 lg:w-6/12">
                <div class="lg:max-w-lg">
                    <h1 class="text-2xl font-semibold text-sm text-purple-900 font-fantasy leading-none  lg:text-3xl">
                    Order management
                    </h1>
                    <p class="mt-12 text-xs text-gray-900">
                    At ShipBob, we track your orders from A to Z. Filter orders by status, search for specific orders, see a quick timeline view of where your order is in the fulfillment process (e.g. when an order is picked, packed, or shipped), easily find shipping-related information (e.g., weights, dimensions, or carrier service), and get a quick snapshot of any orders that require action.
                        <br/><br/>
                    With order management software for your direct-to-consumer and wholesale shipments, you can manage subscriptions, make changes to your orders post-purchase, map your store’s shipping options to ShipBob, and automatically share tracking information with your customers.
                    </p>  
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full mt-6 lg:px-8 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-2xl " src="https://www.shipbob.com/wp-content/uploads/2019/11/product-sec5.png"/>
            </div>
        </div>
    </div>
      );
}
 
export default MainWraper;