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
    <svg width={width ?? "7"} height={height ?? "14"} viewBox="0 0 7 14">
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
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 448 512"
    >
      <path
        fill={fill}
        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
      />
    </svg>
  );
};

export const UpArrowIcon = ({
  fill,
  height,
  width,
}: customIconsProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 1024 1280"
    >
      <path
        fill={fill}
        d="M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
      />
    </svg>
  );
};

export const CloseIcon = ({
  fill,
  height,
  width,
}: customIconsProps): ReactElement => {
  return (
    <svg
      width={width ?? "12"}
      height={height ?? "12"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 1.175L10.4917 0L5.83333 4.65833L1.175 0L0 1.175L4.65833 5.83333L0 10.4917L1.175 11.6667L5.83333 7.00833L10.4917 11.6667L11.6667 10.4917L7.00833 5.83333L11.6667 1.175Z"
        fill={fill}
      />
    </svg>
  );
};
