import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { useToggle } from '../../hooks/useToggle';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useToggle(false);
  const vidRef = React.useRef();

  const onPlay = () => {
    setPlayVideo(!playVideo);
    if (playVideo) vidRef.current.pause();
    else vidRef.current.play();
  }

  return (
    <div className="app__video">
      <video
        type="video/mp4"
        src={meal}
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={onPlay}>
          {
            playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  );
};

export default Intro;