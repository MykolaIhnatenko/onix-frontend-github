interface IMutedButton {
  onClick: () => void;
  onMouseEnter: () => void;
  volumeRange: number;
  isMuted: boolean;
}

export default IMutedButton;
