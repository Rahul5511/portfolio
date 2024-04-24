import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className='bg-black h-full pl-64'>
    <div className='my-skill-text pt-24 pl-8'>
      <h2 className='text-white'>My Skills</h2>
      <div className='bg-white h-2 w-40 rounded relative'>
      <span className='absolute  bg-blue-500 w-16 rounded-full' style={{ height:'9px'}}></span>
      </div>
    </div>
     <div className='html-css-conatiner pt-14  flex justify-around'>
     <div className='html-container'>
     <h4 className='text-white'>HTML5</h4>
     <div className='html-skill-container flex p-2'>
        <span className='text-white'>95%</span>
        <div className='w-80 h-2 bg-white relative top-1.5 ml-4'>
          <span className='w-72 h-2 bg-blue-500 absolute'></span>
        </div>
     </div>
     </div>
     
     <div className='css-container'>
     <h4 className='text-white'>CSS3</h4>
     <div className='css-skill-container flex p-2'>
        <span className='text-white'>85%</span>
        <div className='w-80 h-2 bg-white relative top-1.5 ml-4'>
        <span className='w-64 h-2 bg-blue-500 absolute'></span></div>
     </div>
     </div>

     </div>

     <div className='javscript-react-container flex justify-around pt-8'>
     <div className='javascript-container'>
     <h4 className='text-white'>JavaScript</h4>
     <div className='javascript-skill-container flex p-2'>
        <span className='text-white'>91%</span>
        <div className='w-80 h-2 bg-white relative top-1.5 ml-4'>
        <span className='w-72 h-2 bg-blue-500 absolute'></span>
        </div>
     </div>
     </div>
     
     <div className='react-container'>
     <h4 className='text-white'>React Js</h4>
     <div className='react-skill-container flex p-2'>
        <span className='text-white'>87%</span>
        <div className='w-80 h-2 bg-white relative top-1.5 ml-4'>
        <span className='w-64 h-2 bg-blue-500 absolute'></span></div>
     </div>
     </div>
     </div>

     <div className='native-node-container flex justify-around pt-8'>
     <div className='native-container'>
     <h4 className='text-white'>React Native</h4>
     <div className='Native-skill-container flex p-2'>
        <span className='text-white'>81%</span>
        <div className='w-80 h-2 bg-white relative top-1.5 ml-4'>
        <span className='w-60 h-2 bg-blue-500 absolute'></span>
        </div>
     </div>
     </div>
     
     <div className='node-container'>
     <h4 className='text-white'>Node Js</h4>
     <div className='node-skill-container flex p-2'>
        <span className='text-white'>77%</span>
        <div className='w-80 h-2 bg-white relative top-1.5 ml-4'>
        <span className='w-52 h-2 bg-blue-500 absolute'></span></div>
     </div>
     </div>
     </div>

     <div className='resume-section pt-24 pl-12'>
        <div className='resume-header'>
           <h2 className='text-white'>Resume</h2>
           <div className='w-40 h-2 bg-white rounded-full relative'>
             <span className='w-20 h-2 bg-blue-500 rounded absolute'></span>
           </div>
        </div>

        <div className='work-experience pt-8'>
          <div className='work-icon text-white text-3xl flex'>
          <FontAwesomeIcon icon={faBriefcase}/>
            <h3 className='text-white ml-4'>Working Experience</h3>
          </div>
        </div>
   <div className='resumeDetails-container flex mr-0'>
   <section class="text-gray-600 body-font">
   <div class="container px-5 py-8 mx-auto flex flex-wrap">
     <div class="flex flex-wrap w-full">
       <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
         <div class="flex relative pb-12">
           <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
             <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
           </div>
           <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
             {/*<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
   </svg>*/}
           </div>
           <div class="flex-grow pl-4 pb-36">
             <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 1</h2>
            
           </div>
         </div>
         <div class="flex relative pb-32">
           <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
             <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
           </div>
           <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
             {/*<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
               <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
 </svg>*/}
           </div>
           <div class="flex-grow pl-4 pb-32">
             <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 2</h2>
             
           </div>
         </div>
         <div class="flex relative pb-44">
           <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
             <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
           </div>
           <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
             {/*<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
               <circle cx="12" cy="5" r="3"></circle>
               <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
 </svg>*/}
           </div>
           <div class="flex-grow pl-4 pb-16">
             <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 3</h2>
                
           </div>
         </div>
       </div>
     </div>
   </div>
         </section>
     <div className='resume-details-container flex flex-col'>
     <div className='resume-details mt-12 flex flex-col pl-44'>
     <h4 className='text-white'>MERN Stack Devloper</h4>
     <h5 className='text-white'>VIRA</h5>
     <p className='text-white w-72'>Lorem ipsum dolor sit amet consectetur, 
     adipisicing elit. Quas, magni mollitia, 
     aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
      Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
   </div>
  <hr className='text-white'/>
   <div className='pl-44'>
     <h4 className='text-white'>Front End Devloper</h4>
     <h5 className='text-white'>TATA POWER</h5>
     <p className='text-white w-72'>Lorem ipsum dolor sit amet consectetur, 
     adipisicing elit. Quas, magni mollitia, 
     aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
      Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
   </div>
   <hr className='text-white'/>
   <div className='pl-44'>
     <h4 className='text-white'>Front End Devloper</h4>
     <h5 className='text-white'>AIRTEL-VODAFONE</h5>
     <p className='text-white w-72'>Lorem ipsum dolor sit amet consectetur, 
     adipisicing elit. Quas, magni mollitia, 
     aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
      Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
   </div>
     </div>
   </div>
     </div>

    </div>
  )
}

export default Resume
