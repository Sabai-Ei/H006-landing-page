import type { SVGProps } from "react";
import type { FunctionId } from "@/content/functions";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 20, children, strokeWidth = 1.6, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const DropIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5s6 6.2 6 10.3a6 6 0 0 1-12 0C6 9.7 12 3.5 12 3.5z" />
  </Base>
);
export const WindIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    <path d="M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2" />
  </Base>
);
export const EarIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
    <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
  </Base>
);
export const EyeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Base>
);
export const PowerIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v8" />
    <path d="M6.3 6.3a8 8 0 1 0 11.4 0" />
  </Base>
);
export const PlugIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 2v5" />
    <path d="M15 2v5" />
    <path d="M6 7h12v4a6 6 0 0 1-12 0V7z" />
    <path d="M12 17v5" />
  </Base>
);
export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Base>
);
export const PlusIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4v16M4 12h16" />
  </Base>
);

export const functionIcons: Record<FunctionId, (p: IconProps) => React.JSX.Element> = {
  drink: DropIcon,
  inhale: WindIcon,
  ear: EarIcon,
  eyes: EyeIcon,
};
