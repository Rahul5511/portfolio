import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Stars, Line } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import WelcomeLogo from '../utils/WelcomeLogo';

const HomePage = () => {
  return (
    <div className="h-screen" style={{ marginLeft: "255px",backgroundColor:'black'}}>
    { /* <Canvas camera={{ position: [0, 0, 10] }}>
        <color attach="background" args={['black']} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <WelcomeLogo />
        </Float>
        <Stars saturation={0} count={400} speed={0.5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
  </Canvas>*/}
      <div className='flex justify-center items-center ml-64' style={{position:'absolute',top:'42%',left:"22%"}} >
        <div className='text-center text-white'>
          <h1 >Hi, I am Rahul Biswal</h1>
          <p >I am a MERN stack developer</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
