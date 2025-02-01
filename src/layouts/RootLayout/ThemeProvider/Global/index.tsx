import { Global as _Global, css, useTheme } from "@emotion/react"

import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { pretendard } from "src/assets"

export const Global = () => {
  const theme = useTheme()

  return (
    <_Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          color: ${theme.colors.gray12};
          background-color: ${theme.colors.gray2};
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
          cursor: url(https://cur.cursors-4u.net/nature/nat-6/nat600.cur), auto !important;
          -webkit-animation: cursor 1000ms infinite;
          animation: cursor 1000ms infinite;

        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
          cursor: url(https://cur.cursors-4u.net/nature/nat-6/nat600.cur), auto !important;
          -webkit-animation: cursor 1000ms infinite;
          animation: cursor 1000ms infinite;
        }

      @-webkit-keyframes cursor {
        0% {cursor: url(/cursor_ani/frame_00_delay-0.01s.png), auto;}
        5% {cursor: url(/cursor_ani/frame_01_delay-0.01s.png), auto;}
        10% {cursor: url(/cursor_ani/frame_02_delay-0.01s.png), auto;}
        15% {cursor: url(/cursor_ani/frame_03_delay-0.01s.png), auto;}
        20% {cursor: url(/cursor_ani/frame_04_delay-0.01s.png), auto;}
        25% {cursor: url(/cursor_ani/frame_05_delay-0.01s.png), auto;}
        30% {cursor: url(/cursor_ani/frame_06_delay-0.01s.png), auto;}
        35% {cursor: url(/cursor_ani/frame_07_delay-0.01s.png), auto;}
        40% {cursor: url(/cursor_ani/frame_08_delay-0.01s.png), auto;}
        45% {cursor: url(/cursor_ani/frame_09_delay-0.01s.png), auto;}
        50% {cursor: url(/cursor_ani/frame_10_delay-0.01s.png), auto;}
        55% {cursor: url(/cursor_ani/frame_11_delay-0.01s.png), auto;}
        60% {cursor: url(/cursor_ani/frame_12_delay-0.01s.png), auto;}
        65% {cursor: url(/cursor_ani/frame_13_delay-0.01s.png), auto;}
        70% {cursor: url(/cursor_ani/frame_14_delay-0.01s.png), auto;}
        75% {cursor: url(/cursor_ani/frame_15_delay-0.01s.png), auto;}
        80% {cursor: url(/cursor_ani/frame_16_delay-0.01s.png), auto;}
        85% {cursor: url(/cursor_ani/frame_17_delay-0.01s.png), auto;}
        90% {cursor: url(/cursor_ani/frame_18_delay-0.01s.png), auto;}
        95% {cursor: url(/cursor_ani/frame_19_delay-0.01s.png), auto;}
        100% {cursor: url(/cursor_ani/frame_20_delay-0.01s.png), auto;}

      } 
      
      @keyframes cursor {
        0% {cursor: url(/cursor_ani/frame_00_delay-0.01s.png), auto;}
        5% {cursor: url(/cursor_ani/frame_01_delay-0.01s.png), auto;}
        10% {cursor: url(/cursor_ani/frame_02_delay-0.01s.png), auto;}
        15% {cursor: url(/cursor_ani/frame_03_delay-0.01s.png), auto;}
        20% {cursor: url(/cursor_ani/frame_04_delay-0.01s.png), auto;}
        25% {cursor: url(/cursor_ani/frame_05_delay-0.01s.png), auto;}
        30% {cursor: url(/cursor_ani/frame_06_delay-0.01s.png), auto;}
        35% {cursor: url(/cursor_ani/frame_07_delay-0.01s.png), auto;}
        40% {cursor: url(/cursor_ani/frame_08_delay-0.01s.png), auto;}
        45% {cursor: url(/cursor_ani/frame_09_delay-0.01s.png), auto;}
        50% {cursor: url(/cursor_ani/frame_10_delay-0.01s.png), auto;}
        55% {cursor: url(/cursor_ani/frame_11_delay-0.01s.png), auto;}
        60% {cursor: url(/cursor_ani/frame_12_delay-0.01s.png), auto;}
        65% {cursor: url(/cursor_ani/frame_13_delay-0.01s.png), auto;}
        70% {cursor: url(/cursor_ani/frame_14_delay-0.01s.png), auto;}
        75% {cursor: url(/cursor_ani/frame_15_delay-0.01s.png), auto;}
        80% {cursor: url(/cursor_ani/frame_16_delay-0.01s.png), auto;}
        85% {cursor: url(/cursor_ani/frame_17_delay-0.01s.png), auto;}
        90% {cursor: url(/cursor_ani/frame_18_delay-0.01s.png), auto;}
        95% {cursor: url(/cursor_ani/frame_19_delay-0.01s.png), auto;}
        100% {cursor: url(/cursor_ani/frame_20_delay-0.01s.png), auto;}

      }
        
        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: inherit;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
          border-top: 1px solid ${theme.colors.gray6};
        }
      `}
    />
  )
}
