import React from 'react';
import './pga.css';
import Tournament from './components/Tournament'
import Golfer from './components/Golfer';

export default function pgaPage() {
    return (
        <div className = "pga-content"> 
            <Tournament />
            <Golfer />
            <Golfer />
            <Golfer />
            <Golfer />
            <Golfer />
            <Golfer />
            <Golfer />
            <Golfer />
            <Golfer />
        </div>
    )
}