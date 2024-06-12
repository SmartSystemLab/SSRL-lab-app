import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './Test'

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/test' element={<Test />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes