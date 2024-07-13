import './Layout.css';
import {Link, Outlet} from 'react-router-dom';
import Header from '../Home/HHeader.jsx';

function Layout () {
  const addHeader= ()=>{
    const header=document.querySelector(".home-header");
    header.style.display="flex";
  }
  const removeHeader = ()=>{
    const header=document.querySelector(".home-header");
    header.style.display="none";
  }
  
  const clearNotifications=()=>{
    const notifications = document.querySelector(".notifications-count");
    notifications.style.display="none";
  }
  const toggle= (e)=>{
    const element=e.target.parentNode;
        if(element.toString()==="http://localhost:3000/home"){
          addHeader();
        }else{
          removeHeader();
        }
        if(e.target.parentNode.toString()==="http://localhost:3000/notifications"){
          clearNotifications();
        }
  }
  
  return (
    <div className="nav">
      <Header/>
      <ul className ="nav-bar" 
        onClick={(e)=>toggle(e)}>
        <li className="home">
          <Link to="/home"><i className="fa-solid fa-house icon"></i></Link>
        </li>
        <li>
          <Link to="/video"><i className="fa-solid fa-tv icon"></i></Link>
        </li>
        <li>
          <Link to="/friends"><i className="fa-solid fa-user-group icon"></i></Link>
        </li>
        <li>
          <Link to="/marketplace"><i className="fa-solid fa-store icon"></i></Link>
        </li>
        <li>
          <Link to="/notifications"><i className="fa-solid fa-bell icon"></i></Link>
          <span className="notifications-count">15</span>
        </li>
        <li>
          <Link to="/menu"><i className="fa-solid fa-bars icon"></i></Link>
        </li>
      </ul>
      <Outlet/>
    </div>
    )
}

export default Layout;