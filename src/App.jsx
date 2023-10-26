import React from "react"
//yarn add react-fetch-hook

import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function App() {
  return (
    <>
      <header style={{ display: "flex", gridGap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  )
}
export default App
