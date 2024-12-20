import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {
  size: number
}

export function ArrowRight(props: Props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      fill="none"
      {...props}
    >
      <path
        fill="#292D32"
        d="M17.143 32.286c7.89 0 14.285-6.396 14.285-14.286S25.034 3.714 17.143 3.714C9.253 3.714 2.857 10.11 2.857 18s6.396 14.286 14.286 14.286Z"
        opacity={0.4}
      />
      <path
        fill="#292D32"
        d="M15.343 24.114c-.271 0-.543-.1-.757-.314a1.078 1.078 0 0 1 0-1.514L18.872 18l-4.286-4.286a1.078 1.078 0 0 1 0-1.514 1.078 1.078 0 0 1 1.514 0l5.043 5.043c.414.414.414 1.1 0 1.514L16.1 23.8a1.06 1.06 0 0 1-.757.314Z"
      />
    </svg>
  )
}