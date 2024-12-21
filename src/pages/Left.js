import React, { useContext, useState } from 'react';
import icon from "../images/icon-calculator.svg"
import { useMoney } from '../context/Money';
import { useRight } from '../context/Right';
// import illustration from "../images/illustration-empty.svg"

const Left = () => {

    const {money, setmoney} = useMoney();
    const {right, setright} = useRight();


    const [errors, seterrors] = useState({})

    const [block, setblock] = useState(true);

    const [form, setform] = useState({
        mort_amount: null,
        mort_term: null,
        mort_rate: null,
    });

    const handleForm = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setform({...form, [name]: value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let newErrors = {};

        if(!form.mort_amount){
            newErrors.mort_amount = true;
        }else{
            errors.mort_amount = false;
        }
        if(!form.mort_rate){
            newErrors.mort_rate = true;
        }else{
            errors.mort_rate = false;
        }
        if(!form.mort_term){
            newErrors.mort_term = true;
        }else{
            errors.mort_term = false;
        }
        if(block){newErrors.mort_type = true;}else{errors.mort_type = false}

        if (Object.keys(newErrors).length>0) {
            seterrors(newErrors);
        }else{
            let ans = form.mort_amount*form.mort_rate*form.mort_term / 100;
            setmoney(Number.parseFloat(ans))
            setright(true);
        }
    }
    

    //input css change
    const [focusedelement, setfocusedelement] = useState(null);
    const handlefocus = (name) => {
        setfocusedelement(name);
    }
    const handleblur = () => {
        setfocusedelement(null);
    }
    const isfocused = (name) => {
        return name === focusedelement;
    }

    //selection css change
    const [repayfocus, setrepayfocus] = useState(null);
    const handlerepayfocus = (name) => {
        setblock(false)
        setrepayfocus(name);
    }
    const handlerepayblur = () => {
        setrepayfocus(null);
    }
    const isrepayfocused = (name) => {
        return name === repayfocus;
    }
    
    


    return (
        <div className='flex flex-col rounded-tl-2xl rounded-bl-2xl h-[500px] w-[30vw] bg-white p-7 gap-5'>
            <div className="top flex justify-between items-center ">
                <span className='text-2xl font-semibold text-slate_900'>Mortage Calculator</span>
                <button className='text-sm font-medium underline text-slate_500 hover:text-slate-800'>Clear All</button>
            </div>

            <form className='flex flex-col justify-between gap-4' onSubmit={handleSubmit} >
                <div onFocus={() => handlefocus('mort_amount')} onBlur={handleblur} className="amount flex flex-col gap-2">
                    <label className='text-slate_700 text-sm font-medium' htmlFor="mort_amount">Mortgage Amount</label>
                    <div className='relative'>
                        <span className={`z-10 absolute bottom-0 font-semibold rounded-md text-slate_700 px-4 py-[6px] ${isfocused('mort_amount') ? "bg-Lime" : "bg-slate_500"} bg-opacity-20`}>£</span>
                        <input name='mort_amount' value={form.mort_amount} onChange={(e)=>handleForm(e)} className='outline-Lime border-[2px] h-9 border-slate_300 rounded-[4px] p-2 pl-11' type='number' />
                    </div>
                    {errors.mort_amount && <span className='text-xs text-Red'>This field is required</span>}
                </div>

                <div className="termint flex gap-5 w-full">
                    <div onFocus={() => handlefocus('mort_term')} onBlur={handleblur} className="term flex flex-col gap-2 relative">
                        <label className='text-slate_700 text-sm font-medium' htmlFor="mort_term">Mortgage Term</label>
                        <div className="relative">
                            <span className={`z-10 absolute right-0 bottom-0 font-semibold text-slate_700 px-4 py-[6px] rounded-md ${isfocused('mort_term') ? "bg-Lime" : "bg-slate_500"}  bg-opacity-20`}>years</span>
                            <input value={form.mort_term} onChange={(e)=>handleForm(e)} className='border-[2px] h-9 border-slate_300 rounded-[4px] p-2 pr-20 w-full' name='mort_term' type="number" />
                        </div>
                        {errors.mort_term && <span className='text-xs text-Red'>This field is required</span>}
                    </div>
                    <div onFocus={() => handlefocus('mort_rate')} onBlur={handleblur} className="interest flex flex-col gap-2 relative">
                        <label className='text-slate_700 text-sm font-medium' htmlFor="mort_rate">Interest Rate</label>
                        <div className="relative">
                            <span className={`z-10 absolute right-0 bottom-0 font-semibold rounded-md text-slate_700 px-4 py-[6px] ${isfocused('mort_rate') ? "bg-Lime" : "bg-slate_500"} bg-opacity-20`}>%</span>
                            <input value={form.mort_rate} onChange={(e)=>handleForm(e)} className='border-[2px] h-9 border-slate_300 rounded-[4px] p-2 pr-12 w-full' name='mort_rate' type="number" />
                        </div>
                        {errors.mort_rate && <span className='text-xs text-Red'>This field is required</span>}
                    </div>
                </div>
                <div className="morttype flex flex-col gap-2">
                    <span className="type text-slate_700 text-sm font-medium">Mortgage Type</span>
                    <div name='repayment' onClick={() => handlerepayfocus('repayment')} onBlur={() => handlerepayblur()} className={`interestonly cursor-pointer flex justify-start items-center border-[2px] p-2 rounded-[4px] ${isrepayfocused('repayment')? "border-Lime": "border-slate_300"}  hover:border-Lime gap-2`}>
                        {!isrepayfocused('repayment') && <div className='w-5 h-5 border-[2px] rounded-full border-slate_500'></div>}
                        {isrepayfocused('repayment') && <div className='w-5 h-5 border-[2px] rounded-full border-Lime flex justify-center items-center'>
                            <div className=' w-3 h-3 bg-Lime rounded-full'></div>
                        </div>}
                        <input className='hidden' type="checkbox" name="Repayment" />
                        <span className='font-semibold'>Repayment</span>
                    </div>
                    <div name='interest_only' onClick={() => handlerepayfocus('interest_only')} onBlur={() => handlerepayblur()} className={`interestonly cursor-pointer flex justify-start items-center border-[2px] p-2 rounded-[4px] ${isrepayfocused('interest_only')? "border-Lime": "border-slate_300"}  hover:border-Lime gap-2`}>
                        {!isrepayfocused('interest_only') && <div className='w-5 h-5 border-[2px] rounded-full border-slate_500'></div>}
                        {isrepayfocused('interest_only') && <div className='w-5 h-5 border-[2px] rounded-full border-Lime flex justify-center items-center'>
                            <div className=' w-3 h-3 bg-Lime rounded-full'></div>
                        </div>}
                        <input className='hidden' type="checkbox" name="Interest Only" />
                        <span className='font-semibold'>Interest Only</span>
                    </div>
                    {errors.mort_type && <span className='text-xs text-Red'>This field is required</span>}
                </div>
                <div className="calc">
                    <button className='flex gap-2 items-center py-3 px-6 bg-Lime hover:bg-opacity-50 duration-300 rounded-full' type="submit" >
                        <img className='' src={icon} alt="calculator" />
                        <span className='font-semibold'>Calculate Repayments</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Left;