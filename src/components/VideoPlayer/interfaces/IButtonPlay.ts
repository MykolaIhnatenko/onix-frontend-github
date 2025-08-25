interface IButtonPlay {
  showButton: boolean;
  buttonText: string;
  handlePlayPause: () => void;
  isJakarta?: boolean;
}

export default IButtonPlay;
