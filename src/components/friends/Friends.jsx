import './Friends.css'
import Friend from './Friend.jsx'
import friendRequests from '../../data/friendRequests.js'
function Friends () { 
  const requestsList = friendRequests.map((fRequest)=><Friend fRequest={fRequest}/>)
  return(
    <div className="main">
      <div className="f-header">
        <div className='f-head'>
          <div className="friends-head-text">
            <span>Friends</span></div>
          <div className="f-search"><i className="fa-solid fa-search"></i></div>
        </div>
        <div className="f-nav-section">
          <div>Suggestions</div>
          <div>Your friends</div>
        </div>
      </div>
      {requestsList}
    </div>
    )
}

export default Friends;