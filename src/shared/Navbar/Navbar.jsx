import React from 'react';
import bgImg from '../../assets/bg/BG.png';
import Button from '../../components/Button/Button';

export default function Navbar() {
    return (
        <div className="relative">
            {/* Navbar with transparent background */}

            {/* Banner with image background */}
            <div className="bg-cover bg-center h-[600px]" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="navbar text-white z-30 lg:px-16">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Event <span className="text-yellow-300">360</span></a>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    {/* Open Menu */}
                    <div className="flex-none block lg:hidden">
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className=" p-4 w-80 min-h-full bg-slate-800 text-white">
                                    {/* Sidebar content here */}
                                    <li className='bg-slate-900 p-3'>
                                        <a className="text-gray-300 hover:text-white">Home</a>
                                    </li>
                                    <li className='bg-slate-900 p-3 my-2'>
                                        <a className="text-gray-300 hover:text-white">About</a>
                                    </li>
                                    <li className='bg-slate-900 p-3'>
                                        <a className="text-gray-300 hover:text-white">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-28'>
                    <div>
                        <div className='space-y-3 lg:max-w-[800px]'>
                            <h1 className='text-white uppercase font-bold text-center'>Brand New event Packages</h1>
                            <h2 className='text-yellow-300 uppercase font-bold text-center'>For Winter</h2> <br />
                            <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.</p>
                            <div className='flex justify-center py-4'>
                                <Button title={`Explore`} width={`200px`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
