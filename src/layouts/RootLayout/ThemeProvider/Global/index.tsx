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
          cursor: none;
        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
          cursor: url(frame1.png), auto;
          -webkit-animation: cursor 400ms infinite;
          animation: cursor 400ms infinite;

        }

        @-webkit-keyframes cursor {
          0% {cursor: url(cursor_ani/jupyter-0000.jpg), auto;}
          50% {cursor: url(cursor_ani/jupyter-0010.jpg), auto;}
          100% {cursor: url(cursor_ani/jupyter-0020.jpg), auto;}
        } 
        
        @keyframes cursor {
          0% {cursor: url(cursor_ani/jupyter-0000.jpg), auto;}
          50% {cursor: url(cursor_ani/jupyter-0010.jpg), auto;}
          100% {cursor: url(cursor_ani/jupyter-0020.jpg), auto;}
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
