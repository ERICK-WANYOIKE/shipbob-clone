import { Link as ReactLink } from 'react-router-dom';
import React ,{useState} from 'react';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed sticky bg-white opacity-98 top-0 py-2 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-24 border-b-2 border-gray-200">
        <div className="relative items-center flex justify-between ">
            <ReactLink className="flex" to="/">
              <span class=" mainHeader px-2  ">
               <img className="h-6" src="https://www.shipbob.com/wp-content/themes/ShipBob/assets/svg/logo.svg" alt=""/>
             </span>
            </ReactLink>

          <ul className="primaryNav flex  justify-between items-center hidden space-x-6  lg:flex text-gray-900
           font-san font-medium text-xs">
          <ReactLink to="/products">Products</ReactLink>
          <ReactLink to="/faq">FAQ</ReactLink>
          <ReactLink to="/contacts">contacts</ReactLink>
          <ReactLink to="/careers">Careers</ReactLink>
          </ul>
          <ul className="secondary nav flex items-center hidden space-x-4 lg:flex
          serif text-sm font-normal">
            <ReactLink className=" signIn  text-xs font-semibold" to="/sign in">sign in </ReactLink>
              <button className="h-10 px-6 font-semibold rounded-md bg-black text-white text-xs">
              <ReactLink to="/get started">Get started</ReactLink>
              </button>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="py-2 px-6 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <ReactLink className="flex" to="/">
                         <span class=" mainHeader px-2  ">
                           <img className="h-6" src="https://www.shipbob.com/wp-content/themes/ShipBob/assets/svg/logo.svg" alt=""/>
                         </span>
                      </ReactLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                       <ReactLink to="/product">Products</ReactLink>
                      </li>
                      <li>
                      <ReactLink to="/prices">Prices</ReactLink>
                      </li>
                      <li>
                      <ReactLink to="/contact">contact</ReactLink>
                      </li>
                      <li>
                      <ReactLink to="/Careers">Careers</ReactLink>
                      </li>
                      <li>
                      <ReactLink className=" text-sm font-semibold rounded-md text-blue-500" to="/sign in">log in </ReactLink>
                      </li>
                      <li>
                        <button className="h-10 px-6 text-xs font-semibold rounded-md bg-black text-white">
                         Get started
                         </button>    
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
          )
        }
 
export default NavBar;
