export const Postslist = ({ setVisiblePosts, userName, visiblePosts }) => {
  return (
    <div>List of Posts of {userName}

      <ol>
        {visiblePosts.map(post=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button
        className='button is-medium is-fullwidth is-primary is-outlined'
        onClick={()=>setVisiblePosts([])}
      >
        Back to Users
      </button>
    </div>
  )
}