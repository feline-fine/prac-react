import React from 'react';
import campaign from '../campaign.jpg';
import { UserGroupIcon } from "@heroicons/react/24/solid"; // Import the UserCircleIcon from Heroicons

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
            <p className="text-xs font-josefins font-medium">Location: California</p>
            <p className="text-xs font-josefins font-medium">Date: 30-10-24</p>
            <div className="flex items-center mt-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg> */}

                <UserGroupIcon className="w-4 h-4 mr-2 text-light-black" />  {/*Use the UserCircleIcon */}
                <p className="text-xs font-josefins">17 volunteers</p>
            </div>
            <div className="flex items-center justify-between">
                <div>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                    <div className="bg-nav-green h-full" style={{ width: '90%' }}></div> {/* Adjust width dynamically based on progress */}
                </div>
                <p className="text-xs font-josefins mt-1">900$ raised of 1000$</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
