import React, { useState } from 'react';
import { Logo, Menu, Close } from '../../assets/exports';
import style from './Navbar.module.scss'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <>
            <nav className={`${style.line} flex flex-col justify-between w-full fixed z-50 bg-[rgba(0,0,0,0.2)]`}>
                <div className='container mx-auto flex'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='hover:animate-pulse'>
                            <a href="/">
                                <img src={Logo} alt="" />
                            </a>
                        </div>

                        <div className='white flex-row gap-[48px] xl:flex hidden '>
                            <ul className={`flex gap-[48px] text-[#BCBCBC]`}>
                                <li className={`${style.navbar}`}>
                                    <a href="/">Главная</a>
                                </li>
                                <li className={`${style.navbar}`}>
                                    <a href="/">Технология</a>
                                </li>
                                <li className={`${style.navbar}`}>
                                    <a href="/">График полетов</a>
                                </li>
                                <li className={`${style.navbar}`}>
                                    <a href="/">Гарантии</a>
                                </li>
                                <li className={`${style.navbar}`}>
                                    <a href="/">О компании</a>
                                </li>
                                <li className={`${style.navbar}`}>
                                    <a href="/">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='xl:hidden flex z-50 mx-[24px] md:mx-0`'>
                        <img
                            src={showMenu ? Close : Menu}
                            alt='menu'
                            className='object-contain z-[100]'
                            onClick={() => setShowMenu(prevState => !prevState)}
                        />
                        <div className={`${showMenu ? 'flex' : 'hidden'} bg-[#F65E06] absolute top-0 right-0  w-screen h-screen rounded-xl sidebar flex justify-center items-center z-50`}>
                            <div className={`flex flex-col gap-[40px] z-50`}>
                                <ul className={`flex flex-col justify-center text-center  gap-[32px] text-whiteOppacity text-[16.00px] text-white items-start  tracking-[4px]`}>
                                    <li className=''>
                                        <a onClick={closeMenu} href='/#'>Главная</a>
                                    </li>
                                    <li className=''>
                                        <a onClick={closeMenu} href='/#'>Технология</a>
                                    </li>
                                    <li className=''>
                                        <a onClick={closeMenu} href='/#'>График полетов</a>
                                    </li>
                                    <li className=''>
                                        <a onClick={closeMenu} href='/#'>Гарантии</a>
                                    </li>
                                    <li className=''>
                                        <a onClick={closeMenu} href='/#'>О компании</a>
                                    </li>
                                    <li className=''>
                                        <a onClick={closeMenu} href='/#'>Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar;