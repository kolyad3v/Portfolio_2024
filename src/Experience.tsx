import { OrbitControls, Stage } from '@react-three/drei'
import { Perf } from 'r3f-perf'

const Experience = () => {
	return (
		<>
			<Perf position='top-left' />
			<OrbitControls makeDefault />
			<Stage
				shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
				environment='sunset'
				preset='portrait'
				intensity={6}>
				<mesh
					position-y={1}
					position-x={-2}>
					<sphereGeometry />
					<meshStandardMaterial color='orange' />
				</mesh>

				<mesh
					position-y={1}
					position-x={2}
					scale={1.5}>
					<boxGeometry />
					<meshStandardMaterial color='mediumpurple' />
				</mesh>
			</Stage>
		</>
	)
}

export default Experience
