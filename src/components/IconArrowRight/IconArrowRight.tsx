import IIcon from './interfaces/IIcon';

function IconArrowRight({ id }: IIcon) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath={`url(#${id})`}>
        <path d="M1 16H29" stroke="currentColor" strokeWidth="3" />
        <path d="M18 5L29 16L18 27" stroke="currentColor" strokeWidth="3" />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="100%" height="100%" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconArrowRight;
