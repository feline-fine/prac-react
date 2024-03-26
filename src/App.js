import './App.css';
import './index.css';
import SideNavbar from './components/side-bar';
import CampaignCard from './components/campaign-card';

function App() {
  return (
    <div className="App">
      <SideNavbar/>
      <div className="flex flex-wrap justify-center gap-4 p-4 ml-60 mt-20"> {/* Use flexbox with wrap and justify-center */}
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
