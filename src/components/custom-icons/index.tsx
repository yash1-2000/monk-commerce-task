import { ReactElement } from "react";

type customIconsProps = {
  fill: string;
  height?: string;
  width?: string;
};

export const OpenInFullIcon = ({
  fill,
  height,
  width,
}: customIconsProps): ReactElement => {
  return (
    <svg width={height ?? "7"} height={width ?? "14"} viewBox="0 0 7 14">
      <circle cx="1" cy="7" r="1" fill={fill} fillOpacity="0.5" />
      <circle cx="6" cy="7" r="1" fill={fill} fillOpacity="0.5" />
      <circle cx="1" cy="1" r="1" fill={fill} fillOpacity="0.5" />
      <circle cx="6" cy="1" r="1" fill={fill} fillOpacity="0.5" />
      <circle cx="1" cy="13" r="1" fill={fill} fillOpacity="0.5" />
      <circle cx="6" cy="13" r="1" fill={fill} fillOpacity="0.5" />
    </svg>
  );
};

export const DownArrowIcon = ({
  fill,
  height,
  width,
}: customIconsProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height ?? "20"}
      height={width ?? "20"}
      viewBox="0 0 448 512"
    >
      <path
        fill={fill}
        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
      />
    </svg>
  );
};
