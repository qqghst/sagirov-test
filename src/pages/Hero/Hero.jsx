import React from 'react'
import { Line, Mars } from '../../assets/exports'
import MainText from '../../components/mainText/MainText'
import Squares from '../../components/squares/Squares'
import style from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={`${style.hero}`}>
            <div className='container mx-auto'>
                <div className=''>
                    <img src={Mars} alt="" className={`${style.mars} z-20`} />
                </div>
                <div className=''>
                    <img src={Line} alt="" className={`${style.line} z-30`} />
                </div>
                <div className='flex justify-between items-center h-screen w-full'>
                    <div className='inline-block my-[50vh] md:flex md:my-0 md:justify-between items-center w-full'>
                        <div className='mb-[80px] md:mb-0 z-50 2xl:z-10' >
                            <MainText />
                        </div>
                        <Squares />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero