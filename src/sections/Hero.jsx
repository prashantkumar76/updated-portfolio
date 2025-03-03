import React, { Suspense, useState, useMemo, useEffect } from "react";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";

const Canvas = React.lazy(() => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })));
const PerspectiveCamera = React.lazy(() => import("@react-three/drei").then((mod) => ({ default: mod.PerspectiveCamera })));
const HackerRoom = React.lazy(() => import("../components/HackerRoom.jsx"));
const CanvasLoader = React.lazy(() => import("../components/CanvasLoader.jsx"));
const Target = React.lazy(() => import("../components/Target.jsx"));
const ReactLogo = React.lazy(() => import("../components/ReactLogo.jsx"));
const Cube = React.lazy(() => import("../components/Cube.jsx"));
const Rings = React.lazy(() => import("../components/Rings.jsx"));
const HeroCamera = React.lazy(() => import("../components/HeroCamera.jsx"));
const Button = React.lazy(() => import("../components/Button.jsx"));

const Hero = () => {
  // const controls = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },

  // })
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

const sizes = useMemo(() => calculateSizes(isSmall, isMobile, isTablet), [isSmall, isMobile, isTablet]);
const [update, setUpdate] = useState(false);
useEffect(() => {
  setUpdate((prev) => !prev); // Force a re-render when sizes change
}, [sizes]);

  
  return (
    <section className="min-h-screen w-full  flex flex-col relative " id='' >
        <div className="w-full  mx-auto  flex  flex-col  sm:mt-36 mt-20  c-space gap-3  ">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans" >Hi, I'm Prashant <span className="waving-hand ">👋🏻</span></p>
            <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
          </div>
            <div className="w-full h-full  absolute  inset-0 ">
                 <Leva />
                <Canvas className="w-full h-full">
                    
                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[30, 30, 30]}/>
                     <HeroCamera>
                      
                    <HackerRoom 
                        // scale={0.07} 
                        // position={[0, 0, 0]} 
                        // rotation={[0, 280, 0]}
                           position={sizes.deskPosition} 
                           rotation={[0.1, -Math.PI, 0]}
                           scale={sizes.deskScale}

                    />
                      
                     </HeroCamera>
                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cube position={sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} />
                    </group>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />

                    </Suspense>
                </Canvas>

            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
        

      
    </section>
  )
}

export default Hero




