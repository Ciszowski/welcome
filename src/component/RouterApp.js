import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './welcome/Welcome';

function RouterApp()
{
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route exact path="/home" element={<Welcome/>} />
                    <Route path="/" element={ <Navigate replace to="/home" />} />
                </Routes>
            </Router>
        </React.Fragment>
    )
};

export default RouterApp;