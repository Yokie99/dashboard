import React from 'react'
import fb from "../images/icon-facebook.svg"
import up from "../images/icon-up.svg"

import { ICard } from '../Interfaces/interface'
const CardComponent = (values:ICard) => {

    const arrowClass = `text-center ${values.color} flex items-center justify-center text-sm font-bold`


    return (
        <>
            <div className={values.topBorder}>
            <div className={values.igBorder}></div>
                <ul className="flex items-center justify-center text-center">
                    <li>
                        <img src={values.image} alt={values.image} className="mr-2" />
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 font-bold ">
                       {values.handle}
                    </li>
                </ul>

                <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5 ">
                    {values.followers}
                    <span className="text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest">
                        Followers
                    </span>
                </h2>

                <p className={arrowClass}>
                    <img src={values.arrow} alt="" className="mr-2 w-3" />
                    {values.number} today
                </p>
            </div>
        </>
    )
}

export default CardComponent