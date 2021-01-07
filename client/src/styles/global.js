import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Source Sans Pro", sans-serif;
    }

    :root {
        font-size: 62.5%;
    }

    #toggle {
      opacity: 1;
      transform: initial;
      pointer-events: all;
    }

    #toggle_menu {
      opacity: 1;
      pointer-events: all;
      max-height: 330px;
      transition: max-height 0.25s 0.1s ease, opacity 0.25s 0.1 ease;
    }

    @media only screen and (max-width: 1024px){
      :root {
        font-size: 58%;
      }
    }
    @media only screen and (max-width: 768px){
      :root {
        font-size: 56.5%;
      }
    }



`
