import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

import { baseUrl } from './utils/functions'
import AdminPage from './pages/admin'
import LogPage from './pages/log'

export default function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route exact path={baseUrl + '/'} element={<Home />} />
                <Route exact path={baseUrl + '/login'} element={<LogPage/>} />
                <Route exact path={baseUrl + '/admin'} element={<AdminPage />} />
            </Routes>
        </Router>
    )
}