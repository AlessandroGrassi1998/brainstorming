import { createMuiTheme } from '@material-ui/core/styles'
import {blue, green} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[500] },
        secondary: { main: green[500], dark: green[900] },
    },
    spacing: 8,
    
})

export default theme;