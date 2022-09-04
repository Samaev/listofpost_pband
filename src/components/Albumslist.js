import './Albumlist.css'

export const AlbumslistModal = ({ userName, visibleAlbums, setVisibleAlbums }) => {
  if (visibleAlbums.length === 0) {
    return null;
  }

  return (
    <div className="modal">
      <div className='modal-content'>
        <div className='modal-header'>
          <div className='modal-title'>
            List of Albums of {userName}
          </div>
        </div>
        <ol className='modal-body'>
          {visibleAlbums.map(album => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ol>
        <div className='modal-footer'>
          <button
            className='button is-medium is-fullwidth is-primary is-outlined'
            onClick={()=>setVisibleAlbums([])}
          >Back to Users</button>
        </div>
      </div>
    </div>
  )
}