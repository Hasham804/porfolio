import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const UpworkIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="#6FDA44"
        d="M128.001 0C57.307 0 0 57.311 0 128.001c0 70.686 57.307 128 128.001 128 70.69 0 127.999-57.314 127.999-128C256 57.311 198.691 0 128.001 0Zm61.558 149.879c-8.216 6.676-18.699 10.709-31.243 10.709-14.283 0-26.445-5.363-33.228-14.542-.182.283-.368.569-.553.858-7.519 11.772-15.329 22.91-26.775 29.458-5.615 3.253-11.986 5.026-19.296 5.026-14.938 0-26.969-5.563-36.072-15.593C38.771 153.673 32 135.508 32 113.38v-8.205h20.125v8.205c0 14.666 3.975 25.826 12.371 33.022 5.137 4.388 11.271 6.558 18.396 6.558 4.697 0 8.695-1.105 12.102-3.294 6.326-4.06 10.751-10.73 14.95-17.567-8.852-10.652-16.148-22.655-16.148-40.388 0-24.473 17.365-39.052 40.87-39.052 22.878 0 40.872 14.579 40.872 39.052 0 18.288-7.182 32.165-14.67 40.596-.032.038-.064.078-.096.115 4.198 6.888 9.671 12.537 18.762 12.537 10.523 0 16.768-4.963 21.944-10.091V113.38H192v36.499h-.441Z"
      />
    </svg>
  );
  
export const FiverrIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="#00b22d"
        d="M128.001 0C57.307 0 0 57.311 0 128.001c0 70.686 57.307 128 128.001 128 70.69 0 127.999-57.314 127.999-128C256 57.311 198.691 0 128.001 0Zm39.878 172.64h-20.39v-.28c-.523 7.074-7.936 14.207-19.852 14.207-12.59 0-22.782-9.236-22.782-25.622V105.1h-9.68v-16.38h9.68V77.13c0-9.68 4.118-24.318 23.35-24.318h14.82v16.38h-9.68c-5.622 0-6.9 2.478-6.9 6.9v11.59h16.92v16.38h-16.92v54.428c0 6.34 4.118 9.118 8.96 9.118 4.842 0 9.68-2.78 9.68-8.96v-28.908h20.39v28.908h.12Zm-84.394-32.89c4.046 0 7.06 3.284 7.06 7.328s-3.014 7.34-7.06 7.34-7.06-3.296-7.06-7.34 3.014-7.328 7.06-7.328Zm-7.35 20.338h14.7v33.073h-14.7v-33.073Zm76.73-53.718h-14.7v-33.073h14.7v33.073Zm-28.55 0h-14.7v-33.073h14.7v33.073Zm-76.73 53.718h14.7v33.073h-14.7v-33.073Zm119.88 0h14.7v33.073h-14.7v-33.073Zm0 53.718h14.7v33.073h-14.7v-33.073Zm-38.56-32.838h14.7v33.073h-14.7v-33.073Z"
      />
    </svg>
  );
  

// export const SunIcon = ({ className, ...rest }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...rest}
//       className={`w-full h-auto ${className}`}
//     >
//       <g
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//       >
//         <g strokeDasharray="2">
//           <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
//             <animate
//               fill="freeze"
//               attributeName="stroke-dashoffset"
//               dur="0.2s"
//               values="4;2"
//             />
//           </path>
//           <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
//             <animate
//               fill="freeze"
//               attributeName="stroke-dashoffset"
//               begin="0.2s"
//               dur="0.2s"
//               values="4;2"
//             />
//           </path>
//         </g>
//         <path
//           fill="currentColor"
//           d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
//           opacity="0"
//         >
//           <set attributeName="opacity" begin="0.5s" to="1" />
//         </path>
//       </g>
//       <g fill="currentColor" fillOpacity="0">
//         <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//         <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//         <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//         <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//       </g>
//       <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
//         <circle cx="12" cy="12" r="12" fill="#fff" />
//         <circle cx="22" cy="2" r="3" fill="#fff">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.1s"
//             dur="0.4s"
//             values="22;18"
//           />
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.1s"
//             dur="0.4s"
//             values="2;6"
//           />
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.1s"
//             dur="0.4s"
//             values="3;12"
//           />
//         </circle>
//         <circle cx="22" cy="2" r="1">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.1s"
//             dur="0.4s"
//             values="22;18"
//           />
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.1s"
//             dur="0.4s"
//             values="2;6"
//           />
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.1s"
//             dur="0.4s"
//             values="1;10"
//           />
//         </circle>
//       </mask>
//       <circle
//         cx="12"
//         cy="12"
//         r="6"
//         fill="currentColor"
//         mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
//       >
//         <set attributeName="opacity" begin="0.5s" to="0" />
//         <animate
//           fill="freeze"
//           attributeName="r"
//           begin="0.1s"
//           dur="0.4s"
//           values="6;10"
//         />
//       </circle>
//     </svg>
//   );
  

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (

<svg version="1.1" viewBox="0 0 2000 2000" width="1280" height="1280" 
{...rest}
className={`w-full h-auto ${className}`}
 xmlns="http://www.w3.org/2000/svg">
<path transform="translate(1481,605)" d="m0 0 4 2 5 9 8 11 13 19 10 17 7 15 3 10 1 7v13l-2 12-5 13-8 12-9 11-11 7-16 8-14 4h-22l-13-4-16-8-12-10-9-11-7-9-9-15-13-18-6-11 1-5 18-12 13-9 15-9 18-13 12-7 22-15 13-8zm-1 20-15 9-17 11-19 13-16 10-14 10-20 12 1 4 10 18 16 22 12 13 14 9 11 4 7 1h11l14-3 13-7 14-12 8-9 4-10 2-9v-20l-3-14-7-14-10-14-12-19-3-5z"/>
<path transform="translate(1348,1259)" d="m0 0 5 1 8 7 11 11 11 9 15 15 8 7 13 12 9 9 8 7 24 22 1 4-7 8-5-2-10-8-2-1 1 3v11l-2 11-5 10-7 9-8 8-14 7-10 3-12 1-12-2-16-7-8-6-7-8-9-16-3-9-1-5v-10l3-13 5-10 8-11 7-7 12-6 9-2 15-1-22-22-8-7-12-11-1-5zm28 62-11 3-10 7-7 6-6 9-3 9v18l4 10 9 10 11 10 8 4 4 1h18l10-4 9-6 10-14 3-8 1-6v-8l-3-11-7-12-8-8-12-7-12-3z"/>
<path transform="translate(651,492)" d="m0 0h10l12 3 9 5 13 13 7 11 4 12v13l-4 12-7 11-8 10-10 9-11 8-8 8-9 6h-2l4 6 16 21 8 10-2 4-7 6-5-1-8-11-10-11-10-14-11-13-11-15-8-10-8-9-15-20-8-10v-4l12-8 10-9 13-10 18-13 14-7zm-3 16-12 4-11 6-13 11-11 9-10 6 2 4 11 13 8 10 9 12 13 15 2 4 3 1 12-10 16-12 10-9 7-8 4-8 1-5v-14l-5-14-6-7-14-7-4-1z"/>
<path transform="translate(514,1153)" d="m0 0h16l9 4 10 7 8 9 8 16 4 11 4 16 1 16-3 14-4 2-10-1 2-7v-24l-4-16-8-16-8-10-10-6h-12l-8 4-6 8-2 6v15l5 32 1 9v10l-2 9-5 9-9 9-7 4-9 2h-11l-10-3-9-6-8-8-10-16-6-15-3-12-1-15 1-9 4-1h10l1 5v15l3 16 5 14 6 8 7 6 9 4h12l8-4 4-5 2-5 1-11-2-19-3-24v-19l4-13 4-5 10-6z"/>
<path transform="translate(490,702)" d="m0 0 3 1 13 36 7 21v2l25-5 51-13h6l-8 16-6 2-18 4-39 10-7 1 7 19 5 15 26 12 2 2-1 5-5 9-6-2-38-19-20-8-42-21-23-10-13-7 1-5 3-6 5-1 13 5 32 16 24 10 25 12-9-25-16-48-2-9v-7l4-11z"/>
<path transform="translate(1514,1023)" d="m0 0h15l12 3 16 8 10 9 7 11 5 13v20l-4 14-7 11-6 7-10 7-12 5-13 2h-8l-7-1-1-1 2-26 5-38 5-30-19 4-11 6-6 8-6 13-2 10v11l3 12 4 8v5l-7 4-5-2-6-10-4-13v-19l4-15 6-11 8-10 11-8 11-5zm22 16-2 7-8 50-3 21 1 1h8l14-4 8-5 6-7 4-11 1-6v-17l-4-11-9-10-10-6z"/>
<path transform="translate(933,369)" d="m0 0h13l1 1 2 64 5-6 11-9 10-4 6-1h21l8 2 8 4 10 9 6 10 3 10 1 21v56h-13l-2-6-2-62-2-11-6-10-9-6-7-2h-17l-12 4-8 6-6 9-3 8-1 6v16l1 49-2 1h-12l-1-1-4-156z"/>
<path transform="translate(1496,787)" d="m0 0h21l13 4 8 6 8 7 8 11 5 11 2 9v15l-3 12-7 11-9 10-10 6-16 6-3-7-16-49-10-30-5 1-10 6-5 6-4 10-1 5v16l3 12 7 11 9 8 5 3-1 6-3 6-5-2-10-6-7-8-8-15-5-16v-16l3-12 6-11 9-11 9-7 13-6zm3 15-1 3 12 35 10 37 4 1 10-6 8-10 4-9 1-4v-13l-4-13-5-8-5-5-8-5-9-3z"/>
<path transform="translate(1278,1389)" d="m0 0h10l14 3 9 5 10 9 9 9 5 8 4 13v26l-4 12-7 9-10 9-10 6-11 4-5 1h-15l-10-3-11-6-13-11-6-9 1-5 19-11 27-18 26-16 4-3-2-4-10-7-11-4-5-1h-9l-13 4-11 6-8 7-6 12-3 8-5-1-7-3 1-7 7-14 12-13 14-9 13-5zm41 43-21 12-16 11-10 6-11 7-6 4 2 5 9 8 9 3 5 1h12l12-3 8-5 8-9 5-10 1-4v-15l-3-11z"/>
<path transform="translate(490,965)" d="m0 0h33l1 3v11l-1 1h-14l7 8 5 9 4 11 1 16-3 14-6 11-8 8-8 3h-15l-10-4-5-4-6-10-3-8-1-8-1-43h-8l-14 3-6 4-5 10-1 4v19l3 11 9 16-2 4-7 4-4-2-5-8-5-11-2-8-1-10v-16l2-12 4-8 4-5 10-7 11-4 7-1zm-18 17v40l3 12 5 7 10 4 9-1 9-5 4-6 2-12-1-15-4-11-6-7-9-5-3-1z"/>
<path transform="translate(914,1468)" d="m0 0 11 1 6 2-2 9-12 48-7 34-13 51-1 2-11-1-23-5-62-16-4-2 3-10 5-1 28 6 38 9 14 4 1-9 11-47 1-2-15-2-24-5-34-9-2-1 3-11 4-1 29 6 39 10h3l12-48z"/>
<path transform="translate(1457,1193)" d="m0 0h13l11 2 15 8 10 8 8 9 6 14 2 9v14l-3 12-5 12-6 8-7 7-11 7-8 4-10 2h-13l-13-3-11-6-11-9-7-7-5-10-4-14v-17l5-17 6-10 4-5 11-9 13-7zm-1 16-12 3-9 6-6 8-7 14-1 4v15l4 9 8 11 7 6 13 6 8 2h14l11-4 9-6 7-8 6-13 1-5v-12l-4-11-6-9-9-8-10-5-12-3z"/>
<path transform="translate(1112,428)" d="m0 0h12l14 3 11 5 10 6 8 10 8 16 2 11-1 15-4 13-4 8-8 11-7 7-8 4-10 3-7 1h-15l-16-3-10-5-10-9-8-10-5-10-2-8v-20l3-11 6-12 8-10 11-8 12-5zm4 12-12 3-10 6-8 9-5 10-3 11v17l4 11 6 9 9 7 10 4 4 1h18l10-4 11-9 7-9 4-14v-20l-3-9-7-9-8-7-11-5-10-2z"/>
<path transform="translate(808,443)" d="m0 0h3v151l-4 12-4 6-10 7-8 4-7 2h-16l-2-2v-8l1-3h16l8-3 5-5 3-5 2-6 1-8v-13l-7-8-11-9-16-15-11-9-17-16-11-9-16-16 3-3 7-3 5 1 9 7 17 17 10 8 7 7 8 7 13 11 9 9 2 1v-104z"/>
<path transform="translate(731,1395)" d="m0 0 5 2 7 4-1 4-6 12 10-3h21l12 4 13 10 9 10 5 10 1 4v11l-2 9-16 32-14 27-6 9-6-1-6-3v-4l9-20 10-17 9-17 4-15v-11l-3-9-5-6-10-6-11-4h-13l-9 3-8 6-7 7-8 16-12 23-7 11-5 7-5-2-6-4 1-5 11-23 8-13 13-24 8-16z"/>
<path transform="translate(1226,460)" d="m0 0 6 1 7 3-1 6-6 13 10-4 10-1 14 2 13 5 9 6 8 9 6 12 1 3v17l-5 13-11 21-8 16-11 19-3 5-12-7 2-5 13-27 9-15 7-14 2-9v-13l-4-9-6-7-12-7-12-3-11 1-10 4-7 6-7 10-11 22-11 19-6 10-5 1-9-4 2-6 8-16 11-21 12-21 15-31z"/>
<path transform="translate(453,835)" d="m0 0h5l3 7-1 5-9 6-7 8-4 8-1 5v21l4 10 3 4v2l4 2 11 7 10 4 6 1h13l13-4 8-6h2l9-18 2-11v-8l-3-11-4-6-2-4 9-9 4 2 8 13 2 7v24l-3 12-4 8-8 10-8 8-12 6-11 2h-21l-16-4-10-6-7-7-8-13-4-9-2-11v-10l3-14 8-16 7-10z"/>
<path transform="translate(1577,897)" d="m0 0 2 4v12l-15 8-21 12-16 8-16 9-18 10-5 1v2l7 1 22 8 29 11 17 5 22 8 1 2v14l-5-1-50-19-37-12-21-8-2-2-2-13 9-6 19-11 16-8 27-15 16-8 16-9z"/>
<path transform="translate(520,1065)" d="m0 0 4 2 7 11 4 11v16l-6 10-9 7-14 5-40 9-21 4h-3l4 16v4l-7 2-5-1-3-15v-3l-19 4h-6l-2-8v-5l6-2 16-4-4-18-2-10v-6l12-2 2 3 5 29 9-1 36-8 23-4 8-4 4-7 1-8-3-10-4-7 1-5z"/>
<path transform="translate(847,409)" d="m0 0 5 1 5 21 11-2 16-4h6l1 5v7l-30 7 2 14 8 33 6 22 5 8 6 3h11l9-4 5-4 4 2 3 5-1 5-8 7-10 3-7 1h-8l-12-3-6-5-5-9-18-71v-3l-15 4h-5l-2-8 1-5 17-3-4-19v-5z"/>
<path transform="translate(1450,1141)" d="m0 0 6 1 49 17 25 7 34 12 21 7 14 4 1 4-3 10-4 2-15-6-30-10-27-8-46-16-28-8-1-4z"/>
<path transform="translate(695,1366)" d="m0 0 4 1 9 7-1 4-7 8-8 9-10 14-11 13-12 16-11 13-11 14-10 13-10 11-6 9-4-2-8-6 1-4 9-10 9-13 9-10 10-13 8-10 13-16 10-13 13-16 13-18z"/>
<path transform="translate(658,1334)" d="m0 0 5 1 6 5-1 5-14 15-67 67-7 8-15 14-4 5-4-2-7-7 1-4 11-10 7-8 12-12h2l2-4 34-34 1-2h2l2-4 31-31z"/>
<path transform="translate(1188,1435)" d="m0 0 4 1 5 12 10 23 9 25 16 40-1 3-8 2h-6l-5-15-3 9-6 8-5 5-8 7-7 4-4-2-3-7v-5l14-8 7-8 4-11v-14l-4-13-11-28-7-20-1-4z"/>
<path transform="translate(1067,1467)" d="m0 0 9 1 5 5 2 4-1 7-4 4-5 2-8-1-5-6v-8l3-5z"/></svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

