import React from 'react';
import campaign from '../campaign.jpg';
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Import the UserCircleIcon from Heroicons

const CampaignCard = () => {
  return (
    <div className="bg-white w-80 h-40 rounded-lg overflow-hidden flex border-2 border-nav-green">
      <div className="w-full flex">
        <div className="relative h-full w-1/2 opacity-80">
          <img
            src={campaign}
            alt="Campaign"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex flex-col justify-between w-1/2">
          <p className="text-xs font-josefinsans font-medium">Location: California</p>
          <p className="text-xs font-josefinsans font-medium">Date: 30-10-24</p>
          <div className="flex items-center mt-2">
            <UserCircleIcon className="w-4 h-4 mr-2 text-gray-500" /> {/* Use the UserCircleIcon */}
            <p className="text-xs font-josefinsans">17 volunteers</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                <div className="bg-nav-green h-full" style={{ width: '90%' }}></div> {/* Adjust width dynamically based on progress */}
              </div>
              <p className="text-xs font-josefinsans mt-1">900$ raised of 1000$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
