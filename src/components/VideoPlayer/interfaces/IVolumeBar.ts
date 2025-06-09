interface IVolumeBar {
  isVisibleVolumeBar: boolean;
  multiPlayer?: boolean;
  handleVolumeBarMouseLeave: () => void;
  handleVolumeBarMouseEnter: () => void;
  volumeRange: number;
  isMuted: boolean;
  changeVolume: (volume: number) => void;
}

export default IVolumeBar;
