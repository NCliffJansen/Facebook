import './video.css'

import Post from '../Home/Post.jsx'
import {videoPosts} from '../../data/data.js'

function Video  () { 
    
    
  const list = videoPosts.map((post)=> <Post post={post}/>
  )
  return (
  <div className="main">
    <div className="video-head">
      <div className="v-section-head">
        <div>
          <span>Video</span>
        </div>
        <div className='search-section'>
          <div><i className="fa-solid fa-user"></i></div>
          <div><i className="fa-solid fa-search"></i></div>
        </div>
      </div>
      <div className="videos-category">
        <span>Live</span>
        <span>For you</span>
        <span>Reels</span>
        <span>Following</span>
      </div>
    </div>
    <div>
      {list}
    </div>
  </div>
  )
}

export default Video;