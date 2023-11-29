import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {

  // stores the computer 3D model (react-theejs)
  const computer = useGLTF("./desktop_pc/scene.gltf");


  // lighting required 
  return (
    <mesh> 
      <hemisphereLight intensity={2} groundColor={0x000000} />   
      <pointLight intensity={5} 
              angle={0.12}
              penumbra={1}
              castShadow
              shadow-mapSize={1024}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
  
      {/* component that displays on the screen  */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);


  // responsiveness of the computer component 
  useEffect(() => {
    const mediaQuary = matchMedia('(max-width: 650px)') // returns true && false 

    setIsMobile(mediaQuary.matches) 

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuary.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuary.removeEventListener('change', handleMediaQueryChange)
    }

  }, [])

  // Loading State handler 
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.6} /> 
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
