// import React, { Component} from 'react';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// 

export default function Example() {

    const [Shop, setShop] = useState([]);

    useEffect(() => {
        getShop()
    }, []);

    const getShop = () => {
        Axios.get(`https://raw.githubusercontent.com/revanpermamna/zumii-store/main/Shop.json`)
            .then(res => {
                const data = res.data;
                setShop(data.Shop)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className="bg-white">


            {/* <Navbar /> */}
            <Navbar></Navbar>

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Shop</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {Shop.map(Shop => (
                        <a key={Shop.id} href={Shop.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    // src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg'
                                    // alt='Person using a pen to cross a task off a productivity paper card.'
                                    src={Shop.url}
                                    // alt={products.ProductName}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{Shop.Name}</h4>
                            <p class="text-blue-500">{Shop.Harga}</p>
                            <a href = "https://instabio.cc/ZumiiStore">
                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                            </a>
                        </a>
                    ))}


                    {/* {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))} */}

                    
                </div>
            </div>
            <Footer></Footer>
        </div>
        
    )
}
