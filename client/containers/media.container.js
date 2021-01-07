import MediaPlayer from '../components/MediaPlayer'

const MediaPlayerContainer = ({ closeComponent, toggle }) => {
  return (
    <MediaPlayer closeComponent={closeComponent} toggle={toggle}></MediaPlayer>
  )
}

export default MediaPlayerContainer
