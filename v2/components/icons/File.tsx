type Props = {
  color?: string;
  size?: number;
  strokeWidth?: number;
};

export const File = ({ color, size, strokeWidth }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 24}
      height={size ? size : 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ? color : "#000"}
      strokeWidth={strokeWidth ? strokeWidth : 1}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
};