import './App.css';
import './index.css';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import CampaignListPage from './pages/campaign-list-page';
import CampaignDetailPage from './pages/campaign-detail-page'; // Import CampaignDetailPage component
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
            <Route index element={<CampaignListPage/>}/>
            <Route path="campaign-detail" element={<CampaignDetailPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
