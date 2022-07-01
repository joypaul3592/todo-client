import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../assect/logo.png'
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [user] = useAuthState(auth)


    const userSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
        toast.success('LogOut Successful!!')
    }



    return (
        <Disclosure
            as="nav" className=" shadow-md sticky top-0 z-40 bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
                        <div className="relative flex items-center justify-between h-16 ">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden ">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center lg:justify-between justify-center lg:items-stretch   ">
                                <div>
                                    <Link className="flex-shrink-0 flex items-center h-full" to={'/'}>
                                        <img
                                            className="block h-6 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />

                                    </Link>
                                </div>
                                <div className="hidden  lg:block sm:ml-6 ">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to={'/'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-md font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >To-Do</NavLink>
                                        <NavLink
                                            to={'complateTask'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-md font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Completed Tasks</NavLink>
                                        <NavLink
                                            to={'calender'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-md font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Calendar
                                        </NavLink>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden ">
                        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-md font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >To-Do</NavLink>
                            <NavLink
                                to={'complateTask'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-md font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Completed Tasks</NavLink>
                            <NavLink
                                to={'calender'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-md font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Calendar
                            </NavLink>
                        </div>

                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >


    );
};

export default Navbar;