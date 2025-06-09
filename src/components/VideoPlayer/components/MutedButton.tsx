import React from 'react';

import IMutedButton from '../interfaces/IMutedButton';
import IconSpeaker from '../../../assets/icon/videoPlayer/ic_speaker.svg';
import IconSpeakerMute from '../../../assets/icon/videoPlayer/ic_speaker_mute.svg';

import styles from '../sass/videoPlayer.module.scss';

function MutedButton({
  onMouseEnter, onClick, isMuted, volumeRange,
}:IMutedButton) {
  return (
    <button
      className={`w-6 ${styles.buttonControls}`}
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {volumeRange && !isMuted
        ? <IconSpeaker className="w-6 h-6" />
        : <IconSpeakerMute className="w-6 h-6" />}
    </button>
  );
}

export default MutedButton;
