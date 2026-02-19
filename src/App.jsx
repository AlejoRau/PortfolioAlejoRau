import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { ThemeToggle } from "./components/ThemeToggle"

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeToggle /> {}
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
