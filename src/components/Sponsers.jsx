import React from 'react';
import FlipCard from './utils/FlipCard';  // Assuming Card component is saved in the same directory

// const Front = ({ children }) => (
//   <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
//     {children}
//     Hello
//   </div>
// );

// const Back = ({ children }) => (
//   <div style={{ padding: '20px', backgroundColor: '#ccc', borderRadius: '8px' }}>
//     {children}
//     Bye
//   </div>
// );

export default function Sponsers() {
    return(
        <div className="h-full bg-sponsi">
            <div className="Sponser  font-helvetica-neue py-1">Our Sponsers.</div>
            <div className="flex flex-row">
                <FlipCard name="Sponser #1" />
                <FlipCard name="Sponser #2" />
                <FlipCard name="Sponser #3" />
                <FlipCard name="Sponser #4" />
            </div>
            <div className="flex flex-row">
                <FlipCard name="Sponser #5" />
                <FlipCard name="Sponser #6" />
                <FlipCard name="Sponser #7" />
                <FlipCard name="Sponser #8" />
            </div>
            <div className="flex flex-row">
                <FlipCard name="Sponser #9" />
                <FlipCard name="Sponser #10" />
                <FlipCard name="Sponser #11" />
                <FlipCard name="Sponser #12" />
            </div>
        </div>
    )}