import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const MessageIcon: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
  </svg>
);
export default MessageIcon;
