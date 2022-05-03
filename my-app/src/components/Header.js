const Header = () => {
    return ( 
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col  sm:text-center sm:mb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl ">

          <div className="max-w-screen-xl mx-auto mb-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1
              w-16 h-16 mb-4 rounded-full bg-gray-200">
                  <img className="h-6" src="https://www.shipbob.com/wp-content/uploads/2019/11/logo-shopify.svg" alt=""/>
              </div>

              <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1
              w-16 h-16 mb-4 rounded-full bg-gray-200">
                 <img className="h-6" src="https://www.shipbob.com/wp-content/uploads/2019/12/bigcommerce.svg" alt=""/>
              </div>

              <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1
              w-16 h-16 mb-4 rounded-full bg-gray-200">
                  <img className="h-6" src="https://www.shipbob.com/wp-content/uploads/2019/11/logo-woo.svg" alt=""/>
              </div>

              <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1
              w-16 h-16 mb-4 rounded-full bg-gray-200">
                 <img className="h-6" src="https://www.shipbob.com/wp-content/uploads/2021/01/wix_logo.png" alt=""/>
              </div>

              <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1
              w-16 h-16 mb-4 rounded-full bg-gray-200">
               <img className="h-6" src="https://www.shipbob.com/wp-content/uploads/2021/01/wix_logo.png" alt=""/>
              </div>
          </div>
      </div>
            <h1 className="text-base font-extrabold text-4xl px-6  text-purple-900 md:text-4xl leading-none">
            Robust integrations to <br/> streamline  order fulfillment, <br/> plus APIs for custom builds
            </h1>
          </div>
          <div>
          <button className="h-10 px-6  text-xs font-semibold rounded-full bg-purple-900 text-white">
            Request Quote
          </button>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Header;