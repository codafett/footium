import { Club } from '@/__generated__/graphql';
import React from 'react';

type ClubBannerProps = {
  club: Partial<Omit<Club, 'players'>>;
};

const ClubBanner: React.FC<ClubBannerProps> = ({ club }) => {
  return (
    <div className="flex flex-col pb-4 mb-4 border-b border-gray-500">
      <h1 className="text-2xl text-blue-500 mb-4">{club.name}</h1>
      <p className="text-xs text-gray-200 px-2">{club.description}</p>
    </div>
  );
};

export default ClubBanner;