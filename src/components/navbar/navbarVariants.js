const variants = {
	menu: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.07,
				delayChidlren: 0.2,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				when: 'afterChildren',
			},
		},
	},
	menuItem: {
		initial: {
			x: -50,
			opacity: 0,
			marginBottom: '2em',
		},
		animate: {
			x: 0,
			marginBottom: '2em',
			opacity: 1,
			transition: {
				type: 'tween',
				duration: 0.2,
			},
		},
	},
};

export default variants;
