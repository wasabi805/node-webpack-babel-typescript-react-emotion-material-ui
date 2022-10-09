

import { createTheme } from '@mui/material'
// THIS IS BASICALLY WHERE YOU'RE GONNA CREATE THE DEFAULTS YOUR THINGS LIKE TYPOGRAPHY. 
const theme = createTheme({
    typography:{
        fontFamily: [].join(''),
        h1:{ color: 'magenta' ,
        fontSize: '3rem' }
    },

    palette: {

        primary: {
            main: '#0b5994',
        },
        color: 'red'
       
    },

    breakpoints: {
		keys: ['xs', 'sm', 'md', 'lg', 'xl'],
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
})

export default theme




