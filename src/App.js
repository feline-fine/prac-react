import './App.css';
import './index.css';
import SideNavbar from './components/side-bar';
import CampaignCard from './components/campaign-card';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <div className="ml-60 mt-10">
        <p className='font-josefins text-lg font-semibold'>Campaigns</p>
        <p className='font-josefins text-sm font-light'>List of campaigns on Plantify</p>
      </div> */}
      <div className="flex flex-wrap justify-center gap-4 p-4 ml-60 mt-60"> {/* Use flexbox with wrap and justify-center */}
        <CampaignCard /> {/* Render the CampaignCard component */}
        <CampaignCard /> {/* Render another CampaignCard component */}
        <CampaignCard /> {/* Render another CampaignCard component */}
        <CampaignCard /> {/* Render the CampaignCard component */}
        <CampaignCard /> {/* Render another CampaignCard component */}
        <CampaignCard /> {/* Render another CampaignCard component */}
        <CampaignCard /> {/* Render the CampaignCard component */}
        <CampaignCard /> {/* Render another CampaignCard component */}
        <CampaignCard /> {/* Render another CampaignCard component */}
      </div>
    </div>
  );
}

export default App;
