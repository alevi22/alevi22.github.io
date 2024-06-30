import styles from "./garmin.module.css";

/** A component for Garmin's logo */
const GarminLogo = ({
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={width}
    height={height ?? (width ? undefined : "1em")}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 424.67 60.89"
    role="img"
  >
    <g id="garmin" data-name="garmin">
      <path
        className={styles.text}
        d="M110.85,3.72a5.1,5.1,0,0,0-4.17-2.58h-3.23a5,5,0,0,0-4.14,2.61L73.68,57.29c-.71,1.42.07,2.43,1.66,2.43h5.92a4,4,0,0,0,4-2.37c.64-1.3,2-4.13,2.32-4.71.36-.78,1.49-1.26,3.08-1.26l27.57,0c1.59,0,2.61.3,3.08,1.24.31.61,1.72,3.16,2.41,4.55a4.28,4.28,0,0,0,4.15,2.53h8.6c1.59,0,2.28-1.21,1.71-2.33ZM94.66,43.11A1.7,1.7,0,0,1,93,40.49l10.09-21.63c.68-1.45,1.76-1.44,2.42,0l9.83,21.64a1.72,1.72,0,0,1-1.69,2.63Zm214.23-39V57.25a2.64,2.64,0,0,0,2.89,2.47h7a2.66,2.66,0,0,0,2.88-2.6V4a2.67,2.67,0,0,0-2.61-2.89h-7.28A2.74,2.74,0,0,0,308.89,4.14ZM191.53,37.41a2,2,0,0,1,1.11-3.19s6.05-1.82,9-4.41,4.35-6.37,4.35-11.27a17.64,17.64,0,0,0-1.68-8.09,13.78,13.78,0,0,0-4.79-5.35,22,22,0,0,0-7.48-3,50.52,50.52,0,0,0-6.82-.82c-1.59-.07-4.19-.13-5.77-.13H150.31A2.9,2.9,0,0,0,147.43,4V57.12a2.66,2.66,0,0,0,2.88,2.6h6.89a2.66,2.66,0,0,0,2.88-2.6s0-21.12,0-21.12,0,0,0,0l13,0a6.28,6.28,0,0,1,4.55,2.36l13.55,19.07c1.26,1.69,2.45,2.35,4,2.35h9a1.44,1.44,0,0,0,1.29-2.28C205.05,56.67,191.53,37.41,191.53,37.41Zm-5.48-10.79a23.2,23.2,0,0,1-3.79.5c-1.58.07-4.18.12-5.77.12H163a2.9,2.9,0,0,1-2.89-2.89V13.6A2.9,2.9,0,0,1,163,10.71h13.48c1.59,0,4.19.06,5.77.12a23.86,23.86,0,0,1,3.79.49,12,12,0,0,1,4.23,1.73,6.52,6.52,0,0,1,2.23,2.63,8.1,8.1,0,0,1,.67,3.29,8.18,8.18,0,0,1-.67,3.3,6.49,6.49,0,0,1-2.23,2.62A11.47,11.47,0,0,1,186.05,26.62ZM394.88,1.14A2.67,2.67,0,0,0,392,3.72c0,.73,0,34,0,34,0,1.6-.9,2-2,.81L356,3.22a6.62,6.62,0,0,0-4.9-2.08h-6.39c-2,0-2.89,1.07-2.89,2.16V57.6a2.37,2.37,0,0,0,2.62,2.12h6.41c1.58,0,2.69-.86,2.69-2.33,0-.73,0-35.77,0-35.77,0-1.59.89-1.95,2-.8l35.46,36.85a6.35,6.35,0,0,0,4.93,2h4.81a2.9,2.9,0,0,0,2.89-2.89V4a2.9,2.9,0,0,0-2.89-2.89ZM256.25,34.25c-.77,1.39-2,1.38-2.8,0L236.83,3.72a4.59,4.59,0,0,0-4.18-2.58h-9A2.9,2.9,0,0,0,220.75,4v53a2.58,2.58,0,0,0,2.89,2.67h5.6A2.52,2.52,0,0,0,232,57.19c0-.74,0-38.57.08-38.57s20.75,38.55,20.75,38.55a1.86,1.86,0,0,0,3.35,0S277,18.73,277.07,18.73s.05,37.35.05,38.46a2.58,2.58,0,0,0,2.81,2.53h6.46a2.61,2.61,0,0,0,2.88-2.89V4a2.89,2.89,0,0,0-2.88-2.89h-8.65a4.71,4.71,0,0,0-4.32,2.51ZM0,30.38C0,59,29.26,60.43,35.12,60.43c19.42,0,27.63-5.24,28-5.47a5.12,5.12,0,0,0,2.69-4.67V30.55a3.3,3.3,0,0,0-3.3-3.3H38.09a3.07,3.07,0,0,0-3,3.3v2a3.07,3.07,0,0,0,3,3.31H52.2a2.47,2.47,0,0,1,2.46,2.47s0,8.65,0,9.2C51.86,48.71,39.17,52.42,29,50,14.17,46.45,13,34.24,13,30.58c0-3.07.92-18.44,19.09-20,14.71-1.26,24.4,4.68,24.49,4.74a3.18,3.18,0,0,0,4.48-1.57L62.92,10c.76-1.53.5-3.11-1.36-4.37C61.44,5.59,51.13,0,35.13,0,1,0,0,27.27,0,30.38ZM418,47.53a6.68,6.68,0,1,1-6.68,6.68A6.69,6.69,0,0,1,418,47.53Zm0,12.36a5.69,5.69,0,1,0-5.42-5.68A5.44,5.44,0,0,0,418,59.89Zm-2.57-9.6h3c1.8,0,2.69.72,2.69,2.2a2,2,0,0,1-2,2.17l2.22,3.46H420l-2.18-3.46h-1.07v3.46h-1.28Zm1.28,3.37h1.51c1,0,1.61-.2,1.61-1.22s-.79-1.15-1.61-1.15h-1.51Z"
      />
    </g>
  </svg>
);

export default GarminLogo;
