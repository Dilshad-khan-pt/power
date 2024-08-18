import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BtmNav from './components/BtmNav';
import Page1 from './components/Page1';
import ProductPage from './components/ProductPage';
import NotFound from './components/NotFound'; // Create this component for 404 page
import Team from './pages/Team';
import Recharge from './pages/Recharge/Recharge.jsx';
import News from './pages/News.jsx';
import WithdrawalPage from './pages/Withdraw/WithdrawalPage.jsx';
import Refer from './pages/Refer/Refer.jsx'
import My from './pages/my/My.jsx'



const App = () => {
  return (
    <Router>
      <div>
        <BtmNav />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/news" element={<News />} />
          <Route path="withdraw" element={<WithdrawalPage />} />
          <Route path="/refer" element = {<Refer />} />
          <Route path="/my" element = { <My />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
