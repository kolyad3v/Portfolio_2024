import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Canvas
			shadows={true}
			camera={{
				position: [5, 0, 15],
				fov: 30,
			}}>
			<Experience />
		</Canvas>
		<Overlay />
	</React.StrictMode>
)

function Overlay() {
	return <>{/* <h2>Hello!</h2> */}</>
}
