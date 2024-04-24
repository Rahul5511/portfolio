import React from 'react';
import '../css/aboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faCode, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import Scene from '../Threejs/Scene';
import pdfFile from '../assests/pdf/dummy.pdf'

const AboutPage = () => {

  const downloadPdf = () => {
    //creating new blob file
    const blob = new Blob([pdfFile.default],{type:'application/pdf'})
   
    //creating url for the blobfile and download
    const url = URL.createObjectURL(blob);
    const a  = document.createElement('a');
    a.href = url;
    a.download = 'dummy.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className='bg-black h-screen pl-64 flex flex-col overflow-auto' >
       <div className='about-me-text pt-20 pl-8' >
         <h3 className='text-white'>About Me</h3>
         <div className='bg-white w-24 h-2 rounded-full relative'>
         <div className='absolute bg-blue-500 w-12 rounded-full' style={{ height:'8px'}}></div>
         </div>
       </div>
      <div className='about-me-container flex'>
      <div class="w-2/3 h-64 bg-white border-4 border-red-500 ml-4 mt-40">
       <Scene/> 
      </div>
      <div className='mt-32 ml-48'>
       <h3 className='text-white'>I am <span className='text-blue-500'>Rahul Biswal</span></h3>
        <p className='text-gray-500'>Proficient in MERN stack development, encompassing MongoDB, Express.js, React, and Node.js</p>
        <p className='text-gray-500'>Experienced in building dynamic and interactive web applications utilizing JavaScript across both frontend and backend development.</p>
        <p className='text-gray-500'>Skilled in database management, server-side programming, and client-side rendering to create robust and scalable solutions.</p>
        <button className='w-32 h-12 hover:bg-red-700 border-t-2 border-black' style={{ backgroundColor: "aqua" }} onClick={downloadPdf}>
        Download CV
        </button>
        {/*<a href={pdfFile} download>Download PDF</a>*/}

      </div>     
      </div>
      <div className='services-text'>
        <h3 className='text-white pt-32 pl-8'>Skills</h3>
        <div className='bg-white w-24 h-2 rounded-full relative ml-8'>
         <div className='absolute bg-blue-500 w-12 rounded-full' style={{ height:'8px'}}></div>
        </div>
        <div className='serviceCard-container mt-16 ml-4 flex mb-8'>
          <div className='servicecardOne w-72 h-64 rounded-3 hover:shadow-md transition-transform duration-300 ease-in-out' style={{ backgroundColor: 'rgba(62, 111, 158, 0.8)' }}>
          <div className='text-white flex flex-col pb-2 mt-2'>
          <FontAwesomeIcon icon={faBrush}  style={{fontSize:'26px'}} className='icon'/>
          </div>
          <div className='heading-container'>
          <h3 className='text-white'>Web Design</h3>
          </div>
             <p className='text-white'>Web design encompasses the creation of visually appealing and functional websites, focusing on layout, color scheme, typography, and user experience to effectively communicate content and engage visitors.</p>
          </div>
          <div className='servicecardTwo w-72 h-64 ml-12 rounded-3 hover:shadow-md transition-transform duration-300 ease-in-out' style={{ backgroundColor: 'rgba(62, 111, 158, 0.8)' }}>
          <div className='code-icon text-white flex flex-col pb-2 mt-2'>
           <FontAwesomeIcon icon={faCode}  style={{fontSize:'26px'}} className='icon'/>
          </div>
          <div className='heading-container'>
          <h4 className='text-white'>Web Devlopment</h4>
          </div>
          <p className='text-white'>Web development involves creating and maintaining websites or web applications using languages like HTML, CSS, and JavaScript, along with frameworks, libraries, and tools for functionality, design, and user interaction.</p>
          </div>
          <div className='servicecardThree w-72 h-64 ml-12 rounded-3 hover:shadow-md transition-transform duration-300 ease-in-out ' style={{ backgroundColor: 'rgba(62, 111, 158, 0.8)' }}>
          <div className='code-icon text-white flex flex-col pb-2 mt-2'>
          <FontAwesomeIcon icon={faMobileScreenButton}  style={{fontSize:'26px'}} className='icon'/>
         </div>
         <div className='heading-container'>
         <h4 className='text-white'>Mobile Devlopment</h4>
         </div>
         <p className='text-white'>React Native development utilizes JavaScript to build cross-platform mobile applications, allowing for code reuse across iOS and Android platforms. It enables fast development with a rich ecosystem and native performance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
