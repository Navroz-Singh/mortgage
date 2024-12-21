import React from 'react'
import { useRight, RightContextProvider } from '../context/Right';
import Left from './Left';
import Right_after from './Right_after';
import Right_before from './Right_before';

const MainComp = () => {
    const { right } = useRight();
    return (

        <div className="App h-screen w-screen flex justify-center items-center bg-slate-300">
            <div className='flex justify-center items-center rounded-2xl bg-white'>
                <Left />
                {!right && <Right_before />}
                {right && <Right_after />}
            </div>
        </div>
    );
}

export default MainComp;