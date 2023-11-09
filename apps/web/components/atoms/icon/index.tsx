import { ComponentType, FC, SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

interface Props {
  width?: string | number;
  height?: string | number;
  color?: string;
  style?: React.CSSProperties;
  component: ComponentType<SvgComponentProps>;
}

const Icon: FC<Props> = ({
  height,
  width,
  color,
  style,
  component: Component,
}) => {
  return <Component width={width} height={height} fill={color} style={style} />;
};

export default Icon;
