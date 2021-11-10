import React from 'react';
import { Navbar } from '../components/ui/Narbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import {Route} from "react-router-dom";
import { Routes } from '../../node_modules/react-router-dom/index';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container mt-2">
            <Routes>
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/marvel/:heroeid" element={<HeroScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                {/* default route */}
                <Route path="*" element={<MarvelScreen />} />
            </Routes>

            </div>

        </>
    )
}
