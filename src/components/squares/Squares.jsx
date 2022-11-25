import React from 'react';
import style from './Squares.module.scss';

const Squares = () => {
    return (

        <div className='flex flex-col gap-[16px] mx-[24px] md:mx-0'>
            <div className='flex gap-[16px] z-40'>
                <div className={`${style.gridLeftTop}`}>
                    <p className='text-[#BCBCBC] flex flex-col justify-center items-center w-[110px] h-[110px] xl:w-[220px] xl:h-[220px]'>
                        <span className='text-[11.11px] xl:text-[16px]'>мы</span>
                        <span className='text-[31.25px] xl:text-[76.29px] font-semibold text-white'>1</span>
                        <span className='text-[11.11px] xl:text-[16px]'>на рынке</span>
                    </p>
                </div>
                <div className={`${style.gridRightTop}`}>
                    <p className='text-[#BCBCBC] flex flex-col justify-center items-center w-[110px] h-[110px] xl:w-[220px] xl:h-[220px]'>
                        <span className='text-[11.11px] xl:text-[16px]'>гаранитируем</span>
                        <span className='text-[31.25px] xl:text-[76.29px] font-semibold text-white'>50%</span>
                        <span className='text-[11.11px] xl:text-[16px]'>безопаность</span>
                    </p>
                </div>
            </div>
            <div className='flex gap-[16px] z-40'>
                <div className={`${style.gridLeftBottom}`}>
                    <p className='text-[#BCBCBC] flex flex-col justify-center items-center w-[110px] h-[110px] xl:w-[220px] xl:h-[220px]'>
                        <span className='text-[11.11px] xl:text-[16px]'>календарик за</span>
                        <span className='text-[31.25px] xl:text-[76.29px] font-semibold text-white'>2001</span>
                        <span className='text-[11.11px] xl:text-[16px]'>в подарок</span>
                    </p>
                </div>
                <div className={`${style.gridRightBottom}`}>
                    <p className='text-[#BCBCBC] flex flex-col justify-center items-center w-[110px] h-[110px] xl:w-[220px] xl:h-[220px]'>
                        <span className='text-[11.11px] xl:text-[16px]'>путешествие</span>
                        <span className='text-[31.25px] xl:text-[76.29px] font-semibold text-white'>597</span>
                        <span className='text-[11.11px] xl:text-[16px]'>дней</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Squares