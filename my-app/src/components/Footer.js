import { Link as ReactLink } from 'react-router-dom';
const Footer = () => {
    return ( 
        <div className="bg-gray-900 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
         <ReactLink className="flex" to="/">
            <span class=" mainHeader px-2  ">
            <img className="h-8" src="https://www.shipbob.com/wp-content/themes/ShipBob/assets/svg/logo.svg" alt=""/>
           </span>
         </ReactLink>
          <div className="mt-4 lg:max-w-sm">
           <h1 className="text-base font-semibold text-gray-500  text-2xl">Picked, packed, <br/> and shipped.</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-300 ">
            Company
            </p>
            <ul className="mt-2 space-y-2 text-gray-500  text-xs">

              <li>
              <ReactLink to="/about">About</ReactLink>
              </li>

              <li>
              <ReactLink to="/resources">Resources</ReactLink>
              </li>

              <li>
              <ReactLink to="/products">Products</ReactLink>
              </li>

              <li>
              <ReactLink to="/careers">careers</ReactLink>
              </li>

            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-300 ">
            Integrations & Partners
            </p>
            <ul className="mt-2 space-y-2 text-gray-500  text-xs">
            <li>
            <ReactLink to="/shopify">shopify</ReactLink>
            </li>

            <li>
            <ReactLink to="/woocommerce">woocommerce</ReactLink>
            </li>

            <li>
            <ReactLink to="/squarespace">squarespace</ReactLink>
            </li>

            <li>
            <ReactLink to="/marketplaces">marketplaces</ReactLink>
            </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-300 ">
            Legal
            </p>
            <ul className="mt-2 space-y-2 text-gray-500  text-xs">
             <li>
              <ReactLink to="/privacy">Privacy Policy</ReactLink>
             </li>

            <li>
            <ReactLink to="/Terms of Service">Terms of Service</ReactLink>
            </li>

            <li>
            <ReactLink to="/Acceptable Products and Use Policy">Acceptable Products and Use Policy</ReactLink>
            </li>

            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-300 ">
            Resources   
            </p>
            <ul className="mt-2 space-y-2 text-gray-500  text-xs">
            <li>
            <ReactLink to="/Shipping Carrier Data">Shipping Carrier Data</ReactLink>
            </li>

            <li>
            <ReactLink to="/Shopify + ShipBob">Shopify + ShipBob</ReactLink>
            </li>

            <li>
            <ReactLink to="/Growth Plan for Startups">Growth Plan for Startups</ReactLink>
            </li>

            <li>
            <ReactLink to="/Fulfilling Subscription Orders">Fulfilling Subscription Orders</ReactLink>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-12 text-xs  border-t sm:flex-row">
        <p className="text-xs text-gray-500 ">
        © Copyright 2022 ShipBob, Inc. All Rights Reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <ReactLink to="/">
          <svg viewBox="0 0 24 24" fill="white" className="h-5">
           <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </ReactLink>
          
        <ReactLink to="/">
          <svg viewBox="0 0 30 30" fill="white" className="h-6">
            <circle cx="15" cy="15" r="4" />
           <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
         </svg>
        </ReactLink>

        <ReactLink to="/">
          <svg viewBox="0 0 24 24" fill="white" className="h-5">
           <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </ReactLink>
        </div>
      </div>
    </div>
     );
}
 
export default Footer;