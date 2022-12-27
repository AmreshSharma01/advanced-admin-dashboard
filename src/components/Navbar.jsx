import React from 'react'


const Navbar = ({ isDark, setIsDark }) => {


    return (
        <div className={`fixed z-10 w-full flex items-center justify-between h-14 text-white ${isDark ? 'dark' : ''}`}>

            {/* Admin Section */}

            <div className=' flex items-center   justify-start md:justify-center pl-3 w-14  h-14 md:w-64 bg-navbar-light dark:bg-navbar-dark  border-none'>
                <img className=" w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                <span className="hidden md:block">ADMIN</span>
            </div>
            {/* ---------------------------------------------- */}

            {/* Searchbox +ThemeButton+Logout */}



            <div className='flex justify-between items-center h-14 bg-navbar-light dark:bg-primary-dark w-[calc(100%-3.5rem)] md:w-[calc(100%-16rem)]'> {/*  here : 16rem = w-64 in tailwind */}

                {/* Search bar */}

                <div className='bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200'>
                    <button className="outline-none focus:outline-none">
                        <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <input type="search" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" /> </div>

                {/* ------------------------------------------------ */}

                {/* Theme and Logout */}
                {/* https://marysallent.medium.com/how-to-toggle-images-icons-using-react-hooks-for-beginners-by-a-beginner-e4b8459f1ce4 */}

                {/* https://css-tricks.com/swapping-svg-icons/  */}
                <div className='flex items-center'>

                    <div>
                        <button
                            onClick={() => setIsDark(!isDark)}

                            className=' group p-2  duration-200 rounded-full shadow-md bg-blue-200  dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none'>
                            {/* -------------------------------------------------- */}

                            {/* icon for light mode */}

                            <svg width="24" height="24" style={{ display: isDark === false ? 'inline-block' : 'none' }} className='fill-current   text-gray-700 " group-hover:text-gray-500   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke=""'>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>


                            {/* icon for dark mode  */}

                            <svg width="24" height="24"
                                style={{ display: isDark === true ? 'inline-block' : 'none' }} className="fill-current text-gray-700 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke=""  >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                            {/* ------------------------------------------------------------ */}


                        </button>
                    </div>

                    <div className="block w-px h-6 mx-3 bg-gray-400"></div>

                    <div >
                        <a href="#" className='flex items-center mr-4 hover:text-blue-100'>
                            <span className='inline-flex mr-1'><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg></span>
                            Logout
                        </a>
                    </div>

                </div>
                {/* ------------------------- */}

            </div >
            {/* End of search bar +Theme +Logout */}

        </div >
    )
}

export default Navbar