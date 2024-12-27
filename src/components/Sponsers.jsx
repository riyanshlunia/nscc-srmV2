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
        <div className="h-full bg-center bg-cover sponsi-container">
            <div className="Sponser  font-helvetica-neue flex justify-between">
                <p className="Sponser-Title py-1 px-5">
                    Our Sponsers.
                </p>
                <p className="Sponsi-Text px-5 text-gray-300 w-1/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati 
                </p>
            </div>
            <div className="flex flex-row">
                <FlipCard name="Sponser #1" bgColor="rgb(49, 196, 191)" />
                <FlipCard name="Sponser #2" bgColor="rgb(205, 207, 209)" />
                <FlipCard name="Sponser #3" bgColor="rgb(94, 142, 214)" />
                <FlipCard name="Sponser #4" bgColor="rgb(94, 142, 214)" />
            </div>
            <div className="flex flex-row">
                <FlipCard name="Sponser #5" bgColor="rgb(94, 142, 214)" />
                <FlipCard name="Sponser #6" bgColor="rgb(49, 196, 191)" />
                <FlipCard name="Sponser #7" bgColor="rgb(206, 209, 214)" />
                <FlipCard name="Sponser #8" bgColor="rgb(49, 196, 191)" />
            </div>
            <div className="flex flex-row">
                <FlipCard name="Sponser #9" bgColor="rgb(203, 210, 214)" />
                <FlipCard name="Sponser #10" bgColor="rgb(49, 196, 191)" />
                <FlipCard name="Sponser #11" bgColor="rgb(94, 142, 214)" />
                <FlipCard name="Sponser #12" bgColor="rgb(214, 211, 222)" />
            </div>
        </div>
    )}