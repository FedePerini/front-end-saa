/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { WorkBench } from './Pages/Workbench'
import { MainPage } from './Pages/MainPage'

export const PageRoutes = () => 
    <Router>
        <Routes>
            <Route exact={true} path="/" element={<WorkBench/>} />
            <Route exact={true} path="/main" element={<MainPage/>} />
        </Routes>
    </Router>