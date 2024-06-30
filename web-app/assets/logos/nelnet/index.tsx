import styles from "./nelnet.module.css";

/** A component for Nelnet's logo */
const NelnetLogo = ({
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={width}
    height={height ?? (width ? undefined : "1em")}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1785.6 549"
    role="img"
  >
    <defs>
      <linearGradient
        id="gradient"
        x1="3399.33"
        y1="-7190.13"
        x2="3399.33"
        y2="-7189.06"
        gradientTransform="translate(-1746745.61 3695246.3) scale(513.93)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#afd136" />
        <stop offset="1" stopColor="#71ba44" />
      </linearGradient>
    </defs>

    <path
      fill="url(#gradient)"
      d="M274.5,0C123.14,0,0,123.13,0,274.48s123.14,274.52,274.5,274.52,274.5-123.15,274.5-274.51S425.84,0,274.5,0ZM56.5,274.48c0-120.18,97.77-218,218-218s218,97.78,218,218-97.77,218-217.95,218S56.55,394.7,56.55,274.48"
    />

    <g>
      <path
        className={styles.text}
        d="M1715.16,357.6c-19.55-.92-31-5.21-40.84-15.1-7.48-8.66-11.77-24-11.77-42v-100.21h49.32c2.35-.02,4.25-1.94,4.23-4.29v-48.25c.03-2.36-1.86-4.29-4.22-4.32h-49.33V77.52c.01-2.37-1.89-4.29-4.26-4.31h-63.57c-2.36,.01-4.26,1.93-4.25,4.29h0v223.05c0,39.41,11.66,68.52,35.66,88.93,18.37,16.17,47.71,25.08,82.56,25.08,2.12,0,4.26,0,6.4-.1,2.32-.1,4.14-2.01,4.13-4.33v-48.21c.02-2.3-1.77-4.2-4.06-4.32"
      />
      <path
        className={styles.text}
        d="M994.37,356.68h-3.18c-18.05,0-30-4-37.42-12.69-7.69-9.21-11.43-23.94-11.43-45.12V33.68c.03-2.36-1.85-4.3-4.21-4.33h-63.6c-2.37,.02-4.27,1.96-4.25,4.33h0V299.34c0,41.25,11.5,71.28,35.12,91.77,17.07,15.11,43.77,23.44,75.18,23.44,4.66,0,9.41-.16,14.21-.53,2.23-.2,3.93-2.08,3.92-4.32v-48.7c0-1.16-.46-2.26-1.28-3.08-.83-.78-1.93-1.22-3.07-1.23"
      />
      <path
        className={styles.text}
        d="M658.57,257c3-40.36,23.13-63.48,55.49-63.48,35.63,0,51.52,18.46,51.52,59.86v3.62h-107.01Zm54-120.77c-86.89,0-125.8,70.47-125.8,140.34s39.32,139.92,127.16,139.92c39.92,0,76.31-14.2,99.84-39,1.44-1.53,1.6-3.87,.37-5.58l-25.41-34.84c-1.33-1.89-3.95-2.34-5.84-1.01h-.01c-20.6,15.18-42.41,23.21-63,23.21-1.74,0-3.48,0-5.34-.18-29.72-.9-49.38-21-55.74-56.74h167.74c2.11-.01,3.89-1.57,4.19-3.66,1.57-10.26,2.36-20.62,2.37-31,0-82.39-45.06-131.56-120.52-131.56"
      />
      <path
        className={styles.text}
        d="M1170.36,136.26c-29.92,0-51.06,13.43-68.95,29.31l-1-18.47c-.1-2.28-1.96-4.08-4.24-4.1h-57.09c-2.37,.02-4.27,1.96-4.25,4.33h0V406.6c-.01,2.36,1.89,4.29,4.25,4.31h63.55c2.37-.02,4.27-1.94,4.26-4.31V227.83c23.19-26.72,33.5-31.06,48.83-31.06,21.33,0,44.12,14.71,44.12,56v153.83c-.02,2.36,1.88,4.29,4.24,4.31h63.57c2.36-.02,4.26-1.95,4.25-4.31V239.6c0-67.83-51.08-103.32-101.55-103.32"
      />
      <path
        className={styles.text}
        d="M1379.8,257c3-40.36,23.15-63.48,55.51-63.48,35.62,0,51.52,18.46,51.52,59.86,0,1.17,0,2.38-.06,3.62h-106.97Zm54-120.77c-86.9,0-125.8,70.47-125.8,140.34s39.33,139.92,127.16,139.92c39.92,0,76.3-14.2,99.84-39,1.44-1.53,1.59-3.88,.35-5.58l-25.35-34.78c-1.33-1.89-3.95-2.34-5.84-1.01h-.06c-20.61,15.18-42.4,23.21-63,23.21-1.74,0-3.48,0-5.34-.18-29.73-.9-49.38-21-55.75-56.74h167.79c2.11-.01,3.89-1.57,4.19-3.66,1.56-10.26,2.35-20.62,2.36-31,0-82.39-45.07-131.56-120.51-131.56"
      />
      <path
        className={styles.text}
        d="M1756.56,384.53h4.44c.94,0,1.88,0,2.82-.11,.87-.04,1.72-.24,2.52-.58,1.69-.65,2.73-2.35,2.54-4.15,.03-.78-.16-1.55-.55-2.23-.34-.58-.83-1.07-1.41-1.41-.62-.36-1.3-.62-2-.76-.73-.14-1.46-.21-2.2-.22h-6.16v9.46Zm0,15.38h-3.45v-28h10.57c3.13,0,5.34,.67,6.66,2,1.43,1.57,2.15,3.65,2,5.77,.03,1.14-.16,2.27-.55,3.34-.34,.87-.85,1.65-1.5,2.32-.65,.62-1.4,1.12-2.21,1.49-.86,.37-1.75,.64-2.67,.82l8.21,12.24h-3.91l-8.2-12.24h-4.94v12.26Zm-15.19-13.91c-.02,2.78,.52,5.53,1.6,8.09,1.02,2.45,2.49,4.69,4.34,6.59,1.86,1.88,4.06,3.38,6.49,4.43,5.07,2.18,10.82,2.18,15.89,0,10.55-4.67,15.31-17,10.65-27.54-2.1-4.75-5.9-8.55-10.65-10.65-5.07-2.2-10.83-2.2-15.9,0-2.42,1.04-4.62,2.54-6.47,4.42-1.86,1.9-3.33,4.13-4.35,6.58-1.07,2.56-1.62,5.31-1.6,8.09m-3.47,0c-.02-3.24,.62-6.44,1.89-9.42,2.43-5.77,6.97-10.39,12.7-12.91,5.91-2.56,12.61-2.56,18.52,0,5.72,2.52,10.26,7.14,12.67,12.91,2.55,6.03,2.55,12.82,0,18.85-2.41,5.78-6.96,10.4-12.69,12.92-5.9,2.56-12.61,2.56-18.51,0-5.73-2.52-10.28-7.14-12.71-12.91-1.27-2.98-1.91-6.19-1.89-9.43"
      />
      <path
        className={styles.text}
        d="M291.47,136.73c-29.92,0-51.05,13.43-69,29.31l-1-18.47c-.09-2.28-1.95-4.08-4.23-4.1h-57.03c-2.35,.04-4.23,1.98-4.21,4.33V407.07c-.01,2.36,1.89,4.29,4.25,4.31h63.55c2.37-.02,4.27-1.94,4.26-4.31V228.31c23.19-26.73,33.48-31.07,48.82-31.07,21.33,0,44.12,14.72,44.12,56v153.83c-.01,2.36,1.89,4.29,4.25,4.31h63.57c2.36-.02,4.26-1.95,4.24-4.31V240.07c0-67.82-51.07-103.32-101.55-103.32"
      />
    </g>
  </svg>
);

export default NelnetLogo;
