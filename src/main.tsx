import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Overlay from './Overlay'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Overlay />
		<Canvas
			shadows={true}
			camera={{
				position: [5, 0, 15],
				fov: 30,
			}}>
			<Experience />
		</Canvas>
	</React.StrictMode>
)
