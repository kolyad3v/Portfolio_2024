const Overlay = () => {
	return (
		<div className='overlay-container'>
			<h1>
				Full Stack <br /> Developer.
			</h1>
			<h2>React // Vue // TS + PHP // Node </h2>
			<nav>
				<a
					href='!#'
					aria-label='Go to projects section'>
					Projects
					<svg
						className='arrow-svg'
						width='35'
						height='40'
						viewBox='0 0 35 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							className='arrow arrow-1'
							d='M29.6973 24.394L29.6973 14.8485L14.8488 25.4546L0.000294209 14.8485L0.000294209 24.394L14.8488 35L29.6973 24.394Z'
							fill='#353535'
						/>
						<path
							className='arrow arrow-2'
							d='M29.6973 9.54545L29.6973 0L14.8488 10.6061L0.000294209 0L0.000294209 9.54545L14.8488 20.1515L29.6973 9.54545Z'
							fill='#353535'
						/>
					</svg>
				</a>
			</nav>
		</div>
	)
}

export default Overlay
