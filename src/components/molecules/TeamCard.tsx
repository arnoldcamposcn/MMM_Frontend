// src/components/molecules/TeamCard.tsx
import React from "react";

interface TeamCardProps {
    member?: {
        name: string;
        title: string;
    };
    image?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, image }) => {
    if (image) {
        return (
            <div className="flex flex-col justify-between bg-white rounded-3xl h-[345px] overflow-hidden">
                <img 
                    src={image} 
                    alt="Team member" 
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 ease-in-out" 
                />
            </div>
        );
    }

    if (member) {
        return (
            <div className="flex flex-col justify-between bg-white rounded-3xl p-8 h-[345px]">
                <div>
                    <h2 className="title-text-black">{member.name}</h2>
                </div>
                <div className="flex mt-2">
                    <span>{member.title}</span>
                </div>
            </div>
        );
    }

    return null;
};
