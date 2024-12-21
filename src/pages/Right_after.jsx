import React, { useEffect } from 'react'
import { useMoney } from '../context/Money';

const Right_after = () => {
    const {money, setmoney} = useMoney();


    return (
        <div className='flex flex-col pt-5 items-center gap-8 h-[500px] w-[30vw] bg-slate_900 rounded-tr-2xl rounded-br-2xl rounded-bl-[80px]'>
            <div className="up flex flex-col gap-2 px-6">
                <div className="results text-2xl font-semibold text-white">Your results</div>
                <div className="paraaaa text-slate_500 text-sm font-medium">Your results are shown below based on the information you provided. To adjust the results, edit the form, and click "calculate repayments" again.</div>
            </div>
            <div className="down text-white flex flex-col justify-center gap-6 w-10/12 bg-slate-900 py-6 rounded-xl shadow-custom-shadow">
                <div className="downup flex flex-col gap-2 px-8">
                    <div className="ymr text-slate_500 text-sm font-medium">Your monthly repayments</div>
                    <div className="sum text-5xl text-Lime font-medium">£{(money/12).toFixed(2)}</div>
                </div>
                <div className="line h-px w-10/12 bg-slate_300 mx-auto"></div>
                <div className="downdown flex flex-col gap-2 px-8">
                    <div className='text-slate_500 text-sm font-medium'>Total you'll repay over the term</div>
                    <div className='text-xl font-semibold'>£{money.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}

export default Right_after;