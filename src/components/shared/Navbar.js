import React from 'react';
import CustomLink from './CustomLink';

const Navbar = () => {
    return (
        <div style={{ background: '#0F1D20' }} class="navbar  lg:px-16 fixed top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a style={{ textDecoration: 'none' }} className='text-warning' href='/'><img style={{ hight: '50px', width: '50px' }} src="https://my-portfolio-4d605.web.app/static/media/logo.70cadf8139d4b270d1ca.png"></img></a>

            </div>


            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">

                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                    <CustomLink to='/contact'>Contact</CustomLink>
                    <CustomLink to='/blog'>Blog</CustomLink>
                    <CustomLink to='/allproject'>All Projects</CustomLink>


                </ul>
            </div>


        </div>


    );
};

export default Navbar;