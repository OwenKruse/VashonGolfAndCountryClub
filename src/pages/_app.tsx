import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#0973ae',
    },
    text: {
      primary: '#191919',
    },
},
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    )
}
