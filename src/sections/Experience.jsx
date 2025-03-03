import React, { Suspense, useState, useRef, useEffect } from "react";

const Canvas = React.lazy(() => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })));
const OrbitControls = React.lazy(() => import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls })));
const CanvasLoader = React.lazy(() => import("../components/CanvasLoader"));
const Developer = React.lazy(() => import("../components/Developer"));

import { workExperiences } from "../constants"; 

const Experience = () => {    
const [animationName, setAnimationName] = useState('idle');
    const canvasRef = useRef(null);
    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.addEventListener("webglcontextlost", (event) => {
                event.preventDefault();
                console.warn("WebGL context lost. Reloading...");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            });
        }
    }, []);

  return (
    <section 
        className="c-space my-20" id='work'>
        <div className="w-full text-white-600 ">
            <h3 className="head-text">My Work Experience </h3>
            <div className="work-container">
                <div className="work-canvas">
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1}  />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<CanvasLoader />}>
                        <Developer position-y={-3} scale={3} animationName={animationName}/>

                        </Suspense>

                    </Canvas>

                </div>

                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map(({id, name, pos, icon, duration, title, animation}) => (
                            <div key={id} className="work-content_container group" onClick={() => setAnimationName(animation.toLowerCase())} 
                            onPointerOver={()=> setAnimationName(animation.toLowerCase())} onPointerOut={()=> setAnimationName('idle')}>
                                <div className="flex flex-col h-full  justify-start  items-center  py-2 ">
                                    <div className="work-content_logo ">
                                        <img src={icon} alt="logo" className="w-full h-full" />

                                    </div>
                                    <div className="work-content_bar"/>

                                </div>

                                <div className="sm:p-5 px-2.5 py-5 ">
                                    <p className="font-bold text-white-800">{name}</p>
                                    <p className="text-sm mb-5">{pos} -- {duration}</p>
                                    <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>


                                </div>


                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Experience