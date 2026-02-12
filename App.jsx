import React, { useState } from 'react';
import CarMarketplace from './CarMarketplace';
import ProfilePage from './ProfilePage';
import MyAdsPage from './MyAdsPage';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="App">
      {activePage === 'profile' ? (
        <ProfilePage onNavigate={setActivePage} activePage={activePage} />
      ) : activePage === 'myads' ? (
        <MyAdsPage onNavigate={setActivePage} activePage={activePage} />
      ) : (
        <CarMarketplace onNavigate={setActivePage} activePage={activePage} />
      )}
    </div>
  );
}

export default App;
