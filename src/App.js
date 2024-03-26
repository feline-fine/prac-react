import './App.css';
import './index.css';
import SideNavbar from './components/side-bar';
import CampaignCard from './components/campaign-card';
import NavBar from './components/nav-bar';
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='p-20 w-full mt-20 flow-root'>
        <div className='float-left ml-20'>
          <p className='font-josefins text-lg font-semibold'>Campaigns</p>
          <p className='font-josefins text-sm font-light'>List of campaigns on Plantify</p>
        </div>
        
        <div className='float-right mr-20'>
          <p className='font-josefins text-sm font-medium'>Filters</p>
          <select className="font-josefins text-sm bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-nav-green">
            <option value="all">All</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='float-right mr-10'>
          <a href=''><PlusCircleIcon className="w-4 h-4 mr-2 text-sage-200" /></a>
        </div>
        <div className="mt-20">
          <div className="flex flex-wrap justify-left gap-4 p-8 ml-12">
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            {/* Add more CampaignCard components as needed */}
          </div>
        </div>
          
      </div>
      {/* <div className="flex flex-wrap justify-left gap-4 p-8 ml-20 mt-60">
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
      </div> */}
    </div>
  );
}

export default App;
