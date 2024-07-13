

function Post({post}){
  return(
  <div className="all-post">
    <div className="posting-profile-details">
        <div className="left">
          <img src="" alt="pp"/>
        </div>
        <div className = "middle">
          <div className="posting-profile-name">
            <span>{post.name}</span>
          </div>
          <div className="shared-details">
            <span>{post.time}</span>
            <span>{post.sharing}</span>
          </div>
        </div>
        <div className="right">
          <div>
            <i className="fa-solid fa-bell"></i>
          </div>
          <div>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
      </div>
      <div className="caption">
        <span>{post.caption}</span>
      </div>
      <div className="posting-profile-post">
          post
      </div>
      <div className="post-likes-comments">
        <span>nlikes</span>
        <span>ncomments</span>
        <span>nshared</span>
      </div>
      <div className="post-reaction">
         <div>
          <i className="fa-solid fa-thumbs-up"></i>
         </div>
         <div>
           <i className="fa-solid fa-comment"></i>
         </div>
         <div>
           <i className="fa-solid fa-link"></i>
         </div>
         <div> 
          <i className="fa-solid fa-share"></i>
         </div>
        </div>
      </div>
    )
}

export default Post;