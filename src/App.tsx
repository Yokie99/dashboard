import React, { useEffect, useState } from 'react';
import './App.css';
import CardComponent from './Components/CardComponent';
import OverviewCardComponent from './Components/OverviewCardComponent';

import fb from "./images/icon-facebook.svg"
import ig from "./images/icon-instagram.svg"
import yt from "./images/icon-youtube.svg"
import twitter from "./images/icon-twitter.svg"

import up from "./images/icon-up.svg"
import down from "./images/icon-down.svg"
import ToggleButtonComponent from './Components/ToggleButtonComponent';

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log(darkMode)
  };

  // Add or remove the 'dark' class based on the darkMode state
  // This effect will run whenever darkMode changes
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      (darkMode) ? (body.classList.add("dark")) : (body.classList.remove("dark"))
        
    }
  }, [darkMode]);


  const divClass1 = ` dark:hover:bg-[hsl(228,26%,27%)] hover:bg-[hsl(232,33%,91%)] bg-[hsl(222,50%,96%)] dark:bg-[hsl(228,29%,20%)] p-5  shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 rounded-lg`
  const divClass2 = " dark:hover:bg-[hsl(228,26%,27%)] hover:bg-[hsl(232,33%,91%)] bg-[hsl(222,50%,96%)] dark:bg-[hsl(228,29%,20%)] p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 relative"
  return (
      <div className='bg-white dark:bg-[hsl(225,17%,14%)] h-full lg:h-screen text-slate-800 dark:text-white p-10'>
         <div
          className="bg-[hsl(225,100%,98%)] dark:bg-[hsl(232,19%,15%)] h-64 w-full absolute top-0 left-0 rounded-b-3xl"
          style={{
            zIndex: 0,
          }}
        ></div>
        <div className='relative z-10 max-w-7xl mx-auto flex items-center justify-between'>

          <div className='flex flex-col font-bold gap-1'>
            <h1 className='text-3xl'>Social Media Dashboard</h1>
            <p className='text-[hsl(228,34%,66%)]'>Total Followers: 23,004</p>
          </div>

          <div>
            <ToggleButtonComponent toggleFuntion={toggleTheme}/>
            
          </div>
          

        </div>


        <div className='relative z-10 max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <CardComponent number={12} image={fb} handle='@nathanf' followers={"1987"} arrow={up} color={'text-emerald-600'} topBorder={divClass1 + ' border-blue-600'} igBorder='' />
          <CardComponent number={99} image={twitter} handle='@nathanf' followers={"1044"} arrow={up} color={'text-emerald-600'} topBorder={divClass1 + ' border-blue-500'} igBorder='' />
          <CardComponent number={1099} image={ig} handle='@realnathanf' followers={"11k"} arrow={up} color={'text-emerald-600'} topBorder={divClass2} igBorder="instagram h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0" />


          <CardComponent number={144} image={yt} handle='@Nathan F.' followers={"8239"} arrow={down} color='text-rose-600' topBorder={divClass1 + ' border-red-700'} igBorder='' />


        </div>
        <h2 className="max-w-7xl mx-auto text-slate-600 dark:text-white font-bold mb-5 text-2xl md:text-3xl">
          Overview - Today
        </h2>
        <div className='max-w-7xl mt-6 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>

          <OverviewCardComponent metric='Page Views' numbers='87' arrow={up} color={'text-emerald-600'} image={fb} percentage='3%' />
          <OverviewCardComponent metric='Likes' numbers='52' arrow={down} color='text-rose-600' image={fb} percentage='2%' />
          <OverviewCardComponent metric='Likes' numbers='5462' arrow={up} color={'text-emerald-600'} image={ig} percentage='2257%' />
          <OverviewCardComponent metric='Profile Views' numbers='52k' arrow={up} color={'text-emerald-600'} image={ig} percentage='1375%' />
          <OverviewCardComponent metric='Retweets' numbers='117' arrow={up} color={'text-emerald-600'} image={twitter} percentage='303%' />
          <OverviewCardComponent metric='Likes' numbers='507' arrow={up} color={'text-emerald-600'} image={twitter} percentage='553%' />
          <OverviewCardComponent metric='Likes' numbers='107' arrow={down} color='text-rose-600' image={yt} percentage='3%' />
          <OverviewCardComponent metric='Total Views' numbers='1407' arrow={up} color={'text-emerald-600'} image={yt} percentage='12%' />


        </div>


      </div>


    
  );
}

export default App;
