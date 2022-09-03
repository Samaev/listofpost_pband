export const Postslist = ({ setVisiblePosts, userName, visiblePosts }) => {
  return (
    <div>List of Posts of {userName}
    <button
      onClick={()=>setVisiblePosts([])}
    >Back to Users</button>
      <ol>
        {visiblePosts.map(post=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  )
}