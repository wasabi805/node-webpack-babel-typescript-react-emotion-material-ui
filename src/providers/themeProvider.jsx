

import { createTheme } from '@mui/material'
import red from '@material-ui/core/colors/red';
// THIS IS BASICALLY WHERE YOU'RE GONNA CREATE THE DEFAULTS YOUR THINGS LIKE TYPOGRAPHY. 
const theme = createTheme({
    overrides: {
        MuiButton: { // Name of the component ⚛️ / style sheet
          text: { // Name of the rule
            color: red, // Some CSS
          },
        },
      },


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




