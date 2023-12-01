import { AccumulativeShadows, Environment, Float, Lightformer, OrbitControls, PerformanceMonitor, RandomizedLight, Stage } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color, Depth, LayerMaterial } from 'lamina'
import { Leva } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef, useState } from 'react'
import * as THREE from 'three'

const Experience = () => {
	const [degraded, degrade] = useState(false)

	return (
		<>
			<Perf position='top-left' />
			<OrbitControls makeDefault />
			{/* <Leva collapsed /> */}
			{/* <AccumulativeShadows
				position={[0, -1.16, 0]}
				frames={100}
				alphaTest={0.9}
				scale={10}>
				<RandomizedLight
					amount={8}
					radius={10}
					ambient={0.5}
					position={[1, 5, -1]}
				/>
			</AccumulativeShadows> */}
			{/** PerfMon will detect performance issues */}
			<PerformanceMonitor onDecline={() => degrade(true)} />
			{/* Renders contents "live" into a HDRI environment (scene.environment). */}
			<Environment
				frames={degraded ? 1 : Infinity}
				resolution={256}
				background
				blur={1}>
				<Lightformers />
			</Environment>
		</>
	)
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
	const group = useRef(!null)
	useFrame((state, delta, clock) => {
		// group.current!.position.z += delta * 10) > 20 && (group.current!.position.z = -20))
		group.current!.position.z = 5 * Math.sin(state.clock.elapsedTime + 2)

		// console.log(delta)
	})
	return (
		<>
			{/* Ceiling */}
			<Lightformer
				intensity={0.75}
				rotation-x={Math.PI / 2}
				position={[0, 5, -9]}
				scale={[10, 10, 1]}
				color='#ffe29c'
			/>
			<group rotation={[0, 0.5, 0]}>
				<group ref={group}>
					{positions.map((x, i) => (
						<Lightformer
							key={i}
							form='circle'
							color='#ffe29c'
							intensity={4}
							rotation={[Math.PI / 2, 0, 0]}
							position={[x, 4, i * 4]}
							scale={[3, 1, 1]}
						/>
					))}
				</group>
			</group>
			{/* Sides */}
			<Lightformer
				intensity={4}
				rotation-y={Math.PI / 2}
				position={[-5, 1, -1]}
				scale={[20, 0.1, 1]}
				color='#db3400'
			/>
			<Lightformer
				rotation-y={Math.PI / 2}
				position={[-5, -1, -1]}
				scale={[20, 0.5, 1]}
				color='#db3400'
			/>
			<Lightformer
				rotation-y={-Math.PI / 2}
				position={[10, 1, 0]}
				scale={[20, 1, 1]}
				color='#db3400'
			/>
			{/* Accent () */}
			<Float
				speed={5}
				floatIntensity={2}
				rotationIntensity={2}>
				<Lightformer
					form='ring'
					color='#ff6600'
					intensity={1}
					scale={10}
					position={[-15, 4, -18]}
					target={[0, 0, 0]}
				/>
			</Float>
			{/* Background */}
			{/* <mesh scale={100}>
				<sphereGeometry args={[1, 64, 64]} />
				<LayerMaterial side={THREE.BackSide}>
					<Color
						color='#ff6600'
						alpha={1}
						mode='normal'
					/>
					<Depth
						colorA='#ff6600'
						colorB='#ff6600'
						alpha={0.5}
						mode='normal'
						near={0}
						far={300}
						origin={[100, 100, 100]}
					/>
				</LayerMaterial>
			</mesh> */}
		</>
	)
}
export default Experience

// orange ff6600
// red db3400
// cream ffe29c
