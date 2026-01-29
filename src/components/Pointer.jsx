import { Physics, useSphere } from "@react-three/cannon"
import { Canvas, useFrame, useThree } from "@react-three/fiber"

export function Pointer() {
  const viewport = useThree((state) => state.viewport)
  const [ref, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))
  useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
  return (
    <mesh ref={ref} scale={0.2}>
      <sphereGeometry />
      <meshBasicMaterial color={[4, 4, 4]} toneMapped={false} />
      <pointLight intensity={8} distance={10} />
    </mesh>
  )
}
