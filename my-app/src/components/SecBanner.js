const SecBanner = () => {
    return ( 
        <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:px-12 lg:w-6/12">
                <div class="lg:max-w-lg px-8">
                    <h1 class="text-2xl font-base text-purple-800  md:text-4xl">
                    Distributed <br/> inventory 
                    </h1>
                    <p class="mt-12 text-xs text-gray-900">
                    With ShipBob’s network of fulfillment centers,
                     you can strategically split your inventory across our locations to get your products from point A to point B more quickly and affordably. Storing inventory near your customers helps reduce the shipping zones and costs associated with shipping orders to faraway destinations.
                       <br/><br/>
                    Distributed inventory also helps you stay competitive by offering two-day shipping to your customers. When an order is placed, ShipBob’s algorithm automatically selects the warehouse and carrier that will give you the quickest turnaround at the best price. This strategy has helped our merchants bring 13% savings to their bottom line.
                    </p>  
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full mt-6 lg:px-8 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-2xl px-6" src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/cargo-home-img-2-new.png"/>
            </div>
        </div>
    </div>
     );
}
 
export default SecBanner;