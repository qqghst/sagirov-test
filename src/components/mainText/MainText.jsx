import React from 'react';
import style from './MainText.module.scss';
import Button from '../ui/Button/Button';

const MainText = () => {
    return (
        <div className='flex flex-col gap-[100px] mx-[24px] md:mx-0'>
            <div className='flex flex-col z-40'>
                <h1 className={`${style.h1} text-[48.83px] xl:text-[72.29px] font-bold mb-[-20px]`}>ПУТЕШЕСТВИЕ</h1>
                <span className={`${style.h1} text-[25.00px] xl:text-[33.18px] font-light`}>на красную планету</span>
            </div>
            <div>
                <Button children={'Начать путешествие'} />
            </div>
        </div>
    )
}

export default MainText;