import React from 'react'
import fb from "../images/icon-facebook.svg"
import { IOverview } from '../Interfaces/interface'
const OverviewCardComponent = (values:IOverview) => {

    const arrowClass = `flex items-center ${values.color} font-bold text-sm`

  return (
    <div className="w-80 bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              {values.metric}
            </li>
            <li>
              <img src={values.image} alt={values.image} />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              {values.numbers}
            </li>
            <li className={arrowClass}>
              <img src={values.arrow} alt="" className="w-3 mr-2" />
              {values.percentage}
            </li>
          </ul>
        </div>
  )
}

export default OverviewCardComponent