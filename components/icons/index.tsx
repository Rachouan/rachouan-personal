import clsx from "clsx";

export interface IconProps {
  className?: string;
  strokeWidth?: number;
  size?: number;
  children?: React.ReactNode;
}

export default function Icon({
  className,
  strokeWidth = 1.5,
  children,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={clsx("w-6 h-6", className)}
    >
      {children}
    </svg>
  );
}
export function IconHeart({ ...props }: IconProps) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </Icon>
  );
}

export function IconSun({ ...props }: IconProps) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </Icon>
  );
}
export function IconMoon({ ...props }: IconProps) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </Icon>
  );
}

export function IconNextJs({ ...props }: IconProps) {
  return (
    <Icon strokeWidth={0} {...props}>
      <path
        d="M11.3451 2.00538C11.3021 2.00929 11.1652 2.02297 11.042 2.03275C8.20137 2.28882 5.54057 3.82134 3.85533 6.17681C2.91691 7.48649 2.31672 8.9721 2.08993 10.5457C2.00978 11.095 2 11.2572 2 12.002C2 12.7467 2.00978 12.909 2.08993 13.4582C2.63343 17.2133 5.30596 20.3683 8.9306 21.5372C9.57967 21.7464 10.2639 21.8891 11.042 21.9751C11.3451 22.0083 12.6549 22.0083 12.958 21.9751C14.3011 21.8265 15.4389 21.4942 16.5611 20.9215C16.7331 20.8335 16.7664 20.81 16.7429 20.7905C16.7273 20.7788 15.9941 19.7955 15.1144 18.607L13.5152 16.4471L11.5112 13.4817C10.4086 11.8514 9.50147 10.5183 9.49365 10.5183C9.48583 10.5164 9.47801 11.8338 9.4741 13.4426C9.46823 16.2594 9.46628 16.3728 9.43109 16.4392C9.38025 16.535 9.34115 16.5741 9.25904 16.6171C9.19648 16.6484 9.14174 16.6543 8.84653 16.6543H8.50831L8.41838 16.5976C8.35973 16.5604 8.31672 16.5116 8.28739 16.4549L8.24633 16.3669L8.25024 12.4476L8.25611 8.52642L8.31672 8.45018C8.348 8.40913 8.41447 8.35635 8.46139 8.33094C8.54154 8.29185 8.57282 8.28794 8.91105 8.28794C9.30987 8.28794 9.37634 8.30358 9.47996 8.41695C9.50929 8.44823 10.5943 10.0824 11.8925 12.0508C13.1906 14.0193 14.9658 16.707 15.8377 18.0265L17.4213 20.425L17.5015 20.3722C18.2111 19.9109 18.9619 19.2541 19.5562 18.5699C20.8211 17.1175 21.6364 15.3465 21.9101 13.4582C21.9902 12.909 22 12.7467 22 12.002C22 11.2572 21.9902 11.095 21.9101 10.5457C21.3666 6.7906 18.694 3.63564 15.0694 2.4667C14.4301 2.2595 13.7498 2.1168 12.9873 2.03079C12.7996 2.01125 11.5073 1.98974 11.3451 2.00538ZM15.4389 8.05337C15.5327 8.10028 15.609 8.1902 15.6364 8.28403C15.652 8.33485 15.6559 9.42169 15.652 11.871L15.6461 15.3856L15.0264 14.4356L14.4047 13.4856V10.9308C14.4047 9.279 14.4125 8.35049 14.4242 8.30553C14.4555 8.19607 14.5239 8.11006 14.6178 8.05923C14.6979 8.01818 14.7273 8.01427 15.0342 8.01427C15.3236 8.01427 15.3744 8.01818 15.4389 8.05337Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export function IconMenu({ ...props }: IconProps) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </Icon>
  );
}
