import React from "react";
import logo from '../logo.png';

const NavBar = () => {
    return(
        <nav class="bg-nav-green fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="../App.js" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-8" alt="Flowbite Logo"></img>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" class="font-josefins bg-sage-200 text-sm font-semibold text-light-black p-2 rounded-full">Start Donating</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-josefins text-sm md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li>
                            <a href="../App.js" class="block py-2 px-3 text-light-black hover:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Shop</a>
                        </li>
                        <li>
                            <a href="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Campaigns</a>
                        </li>
                        <li>
                            <a href="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Plantify Network</a>
                        </li>
                        <li>
                            <a href="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Personal Growth</a>
                        </li>
                        <li>
                            <a href="../App.js" class="block py-2 px-3 text-light-black hover:text-white">About us</a>
                        </li>
                        <li>
                            <a href="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;
