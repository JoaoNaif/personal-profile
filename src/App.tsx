import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Container } from './components/Container'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container />
      <GlobalStyle />
    </ThemeProvider>
  )
}
