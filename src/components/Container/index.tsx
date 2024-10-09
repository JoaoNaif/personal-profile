import { Header } from '../Header'
import { Main } from '../Main'
import { MainContaier } from './styles'

export function Container() {
  return (
    <MainContaier>
      <Header />
      <Main />
    </MainContaier>
  )
}
