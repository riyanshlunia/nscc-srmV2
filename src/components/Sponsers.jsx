import React from 'react';
import FlipCard from './utils/FlipCard'; 

export default function Sponsers() {
    return(
        <div className=" sponsi-container">
            <div className="Sponser  font-helvetica-neue flex flex-col lg:flex-row lg:justify-between">
                <p className="Sponser-Title flex justify-center items-center pt-5 lg:py-10 lg:px-5">
                    Our Sponsers.
                </p>
                <p className="Sponsi-Text text-sm text-left lg:mt-10 px-9 lg:px-5 text-gray-300 lg:w-1/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati 
                </p>
            </div>
            <div className="hidden lg:block">
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

            <div className="lg:hidden px-6">
                <div className="grid grid-cols-2">
                    <FlipCard name="Sponser #1" bgColor="rgb(49, 196, 191)" />
                    <FlipCard name="Sponser #2" bgColor="rgb(205, 207, 209)" />
                    <FlipCard name="Sponser #3" bgColor="rgb(94, 142, 214)" />
                    <FlipCard name="Sponser #4" bgColor="rgb(94, 142, 214)" />
                </div>
                <div className="grid grid-cols-2">
                    <FlipCard name="Sponser #5" bgColor="rgb(94, 142, 214)" />
                    <FlipCard name="Sponser #6" bgColor="rgb(49, 196, 191)" />
                    <FlipCard name="Sponser #7" bgColor="rgb(206, 209, 214)" />
                    <FlipCard name="Sponser #8" bgColor="rgb(49, 196, 191)" />
                </div>
                <div className="grid grid-cols-2">
                    <FlipCard name="Sponser #9" bgColor="rgb(203, 210, 214)" />
                    <FlipCard name="Sponser #10" bgColor="rgb(49, 196, 191)" />
                    <FlipCard name="Sponser #11" bgColor="rgb(94, 142, 214)" />
                    <FlipCard name="Sponser #12" bgColor="rgb(214, 211, 222)" />
                </div>
            </div>

        </div>
    )}