
import React, { useState } from 'react';

const Navigation :React.FC = () => {
    const Menus =[
      
        {  name:"Home", icon:"/public/icon phone.svg",dis:"translate-x-0"},
        {  name:"profile", icon:"/public/icon casque.svg",dis:"translate-x-16"},
        {  name:"Message", icon:"/public/icon computer.svg",dis:"translate-x-32"},
        {  name:"photos", icon:"/public/icon casque.svg",dis:"translate-x-48"},
        {  name:"settings", icon:"/public/icon gaming.svg",dis:"translate-x-64"},
    ];
    const [active, setActive] = useState(0)
    return (
        <div className='bg-white mt-10 max-h-[6rem] px-6 rounded-t-xl h-screen flex justify-center items-center'>
           <ul className='flex relative -mt-[4rem]'>
            <span className={` bg-rose-600 border-4 duration-500 ${Menus[active].dis} rounded-full absolute -ml-2 border-gray-900 h-16 w-16`}>
                <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1'></span>
                <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tr-[11px] shadow-myShadow2'></span>
            </span>
            {Menus.map((menu, i) =>( 
                <li key={i} className='w-16 text-white'>
                    {active}
                    <a className='flex flex-col text-center pt-6' onClick={()=>setActive(i)}>
                    <span className={`text-xl absolute cursor-pointer duration-500 ${i === active && "-mt-10 text-white"}`}>
                       <img src={menu.icon} alt="" />
                    </span>
                        <span className={`${active === i? "translate-y-4 duration-700 opacity-100" : "opacity-0 translate-y-10"}`}>{menu.name}</span>
                    </a>
                </li>
            ))}
            </ul> 
        </div>
    );
};

export default Navigation;