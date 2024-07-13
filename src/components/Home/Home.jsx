import './Home.css';
import Post from './Post.jsx'
import {videoPosts} from '../../data/data.js'
import Story from './Story.jsx'
import Create from './Create.jsx'
import AddPost from './AddPost.jsx'

function Home  () { 
  const posts = videoPosts.map((post)=><Post post={post}/>)
  return(
    <>
      <div className="main">
        <AddPost/>
        <div className="story-section">
          <Create/>
          <Story/>
        </div>
        {posts}
    </div>
    </>
    )
}

export default Home;