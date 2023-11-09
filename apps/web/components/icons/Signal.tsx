import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const SignalIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="m80-80 800-800v800H80Z" />
  </svg>
);
export default SignalIcon;
