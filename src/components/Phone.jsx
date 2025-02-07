import { act, Suspense, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, ScrollControls, useGLTF, useAnimations, useScroll } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'



useGLTF.preload('./phone4/scene.gltf')

const Phone = () => {
  const {nodes, phone, materials, animations, scene} = useGLTF( './alien.glb')
  const {actions, clips } = useAnimations(animations, scene)
  const scroll = useScroll()

  useEffect(()=>{
    console.log(actions)
    actions["mixamo.com"].play().paused = true
  },[])

  useFrame (()=>
    (actions["mixamo.com"].time =  
      (actions["mixamo.com"].getClip().duration*scroll.offset) / 3
    )
  )
 
 return (
    <group>
    <primitive object={scene} scale={1.5} position={[0, -2, 0]}
    />
    </group>
  )
}


const PhoneCanvas = () => {
  return (
    <Canvas gl={{antialias:true}} dpr={[1,1.5]} >
      <directionalLight  
        castShadow
        intensity={1}
        position={[-5,-4,2]}
      />
      <ambientLight  
        castShadow
        intensity={2}
        position={[-5,-5,-5]}
      />
      <Suspense fallback={null}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <ScrollControls pages={3} damping={0.21}>
        <Phone />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
export default PhoneCanvas