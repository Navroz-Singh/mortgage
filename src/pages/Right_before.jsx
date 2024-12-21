import React from 'react';
import illustration from "../images/illustration-empty.svg"

const Right_before = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 h-[500px] w-[30vw] bg-slate_900 rounded-tr-2xl rounded-br-2xl rounded-bl-[80px]'>
            <div className="mid flex w-full justify-center items-center">
                <img src={illustration} alt="illustration" />
            </div>
            <div className="bottm flex flex-col justify-center items-center gap-3">
                <div className="results text-white text-2xl font-semibold">Results shown here</div>
                <div className="paraa text-slate_500 px-10 text-center font-medium">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</div>
            </div>
        </div>
    );
}

export default Right_before;