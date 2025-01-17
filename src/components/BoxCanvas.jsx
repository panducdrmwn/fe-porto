import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

const Box = (props) => {

  const [decal] = useTexture([props?.imgUrl])

  return (
    <Float speed={1.5} floatIntensity={0} rotationIntensity={1.6} >
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.5]}/>
      <mesh
        castShadow
        receiveShadow
        scale={2.5}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal 
          position={[0,0,1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          flatShading 
          map={decal}
        />
      </mesh>
    </Float>

  )
}


export default function BoxCanvas({icon}) {
  return (
    <Canvas gl={{preserveDrawingBuffer:true}}>
      <Suspense>
        <OrbitControls enableZoom={false}/>
        <Box  imgUrl={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


