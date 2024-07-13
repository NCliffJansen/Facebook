import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Video from './components/video/Video.jsx';
import Friends from './components/friends/Friends.jsx';
import Marketplace from './components/marketplace/Marketplace.jsx';
import Notifications from './components/notifications/Notifications.jsx';
import Menu from './components/menu/Menu.jsx'
import Layout from './components/Layout/Layout.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="video" element={<Video/>}/>
          <Route path="friends" element={<Friends/>}/>
          <Route path="marketplace" element={<Marketplace/>}/>
          <Route path="notifications" element={<Notifications/>}/>
          <Route path="menu" element={<Menu/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
