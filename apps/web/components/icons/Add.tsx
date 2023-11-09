import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const AddIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M450.001-450.001h-230v-59.998h230v-230h59.998v230h230v59.998h-230v230h-59.998v-230Z" />
  </svg>
);
export default AddIcon;
