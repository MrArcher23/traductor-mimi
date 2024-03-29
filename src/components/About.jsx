import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../src/index.css';




const Message = () => {

    const showToast = () => {
        let myMsg = 'Texto Copiado!'
        toast.success(myMsg, {
        position: toast.POSITION.TOP_CENTER,
        toastId: '001',
        autoClose: 3000,
        transition: Zoom
      })
      };

 
  const inputFrase = useRef(null);
  const resultadoMimi = useRef(null);


  const hacerMagia = () => {
    let valorInput = inputFrase.current.value;
    let updateFrase = valorInput.replace(/[aeouáéíóúAEOUÁÉÓÚ]/g, 'i');
    resultadoMimi.current.innerHTML = updateFrase;
    inputFrase.current.value = '';    
  };

  const copyToClipboard = () => {
    resultadoMimi.current.select();
    document.execCommand('copy');
  };


  return (
    <div>

<div className="bg-white">
    <div className="text-center w-full mx-auto pt-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h1>Traductor Mimi</h1>
        <h2 className="text-2xl font-extrabold text-black sm:text-4xl">
            <span className="block">
                Pega o escribe la frase,
            </span>
            <span className="block text-sky-700">
                burlate un ratillo! xD
            </span>
        </h2>
        
    </div>
</div>

<section className="xl:w-2/5 lg:w-2/5 md:w-2/5 mx-auto py-12 px-4">
<div className="container">
    <textarea ref={inputFrase} className="w-full resize-none rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Escribe la frase mamadora"/>
    </div>


      
<div className="flex justify-end">
<button type="button" onClick={hacerMagia} className="self-end mt-4 py-2 px-4 bg-sky-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    Clic Magico
</button> 
</div>  

<div className="container mt-8">
    <textarea 
    ref={resultadoMimi}  
    className="w-full resize-none rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" 
    placeholder="Aqui aparecera tu frase a copiar"/>    
    </div>

    <div className="flex justify-end">
<button type="button" 
onClick={() =>{
    copyToClipboard();
    showToast();
}} 
className="self-end mt-4 py-2 px-4  bg-sky-700 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
    Copiar Texto 
</button> 
<ToastContainer />
</div>  
</section>

<footer className="xl:w-2/5 lg:w-2/5">
    <div className="flex flex-col">
        <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
            
            <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
            </div>
            <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                <a className="hover:text-primary-gray-20" target='_blank' href="https://github.com/MrArcher23/traductor-mimi">
                    <span className="sr-only">
                        View on GitHub
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                        </path>
                    </svg>
                </a>
                
            </div>
            <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
            </div>
            <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                <span className="">
                    © 2021
                </span>
                <span className="mt-7 md:mt-1">
                    Created by 
                    <a className="underline hover:text-primary-gray-20" target='_blank' href="https://twitter.com/MrArcher23">
                        MrArcher
                    </a>
                </span>
            </div>
        </div>
    </div>
</footer>

    </div>
  );
};

export default Message;