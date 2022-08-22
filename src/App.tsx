import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { DefaultLayout } from './styling/layouts/default'
import { defaultTheme } from './styling/theme/default'

import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Post } from './pages/Post'

import { GlobalStyle } from './styling/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="posts">
              <Route path=":id" element={<Post />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
