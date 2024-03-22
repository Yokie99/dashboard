import React from 'react'

interface ToggleButtonComponentProps{
  toggleFuntion: () => void
}

const ToggleButtonComponent = (props: ToggleButtonComponentProps) => {
  return (
    <div className="toggle" >
          <label
            htmlFor="checkbox"
            className="font-bold text-slate-600 dark:text-slate-400 text-sm cursor-pointer"
            
          >
            Dark Mode
          </label>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={props.toggleFuntion}
          />
          <label htmlFor="checkbox" className="label" >
            <div className="ball"></div>
          </label>
        </div>
  )
}

export default ToggleButtonComponent