const MediaPlayer = ({ toggle, closeComponent }) => {
  return (
    <div
      id={toggle ? 'toggle' : ''}
      onClick={closeComponent}
      className="player_container"
    >
      <div className="content">
        <iframe
          src="https://player.vimeo.com/video/359173943?app_id=122963"
          id={toggle ? 'toggle' : ''}
          title="SONOS Video"
          className="video_player"
        ></iframe>
      </div>
    </div>
  )
}

export default MediaPlayer
