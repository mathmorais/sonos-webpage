import { useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'

const apperAnim = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1}

`

export const Container = styled.div`
  & {
    position: relative;
    height: 100vh;
  }
  h1,
  h2,
  h3,
  p,
  a,
  span,
  button,
  svg {
    transition: color 0.5s ease, fill 0.5s ease, background 0.5s ease;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.color.background};
    filter: ${({ theme }) =>
      theme.color.backgroundFilter ? theme.color.backgroundFilter : 'none'};
    transition: filter 0.5s ease;
  }

  header {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: auto;
    height: 150px;
    padding: 0 50px;
    background: ${({ theme }) => {
      const menuToggle = useSelector(state => state.menu)
      return menuToggle ? theme.color.primary : 'initial'
    }};
    animation: ${apperAnim} 1s ease-in-out 1 forwards;
    transition: background 0.25s ease;

    h1,
    a {
      font-family: 'Josefin Sans', sans-serif;
      color: ${({ theme }) => theme.color.text};
      font-size: ${({ theme }) => theme.size.subHeader};
    }
    nav {
      width: 50%;
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        li {
          a {
            &:after {
              content: '';
              width: 100%;
              height: 2px;
              transform: scaleX(0) translateY(7.5px);
              background-color: ${({ theme }) => theme.color.text};
              transition: transform 0.25s ease;
            }
            &:hover::after {
              transform: scaleX(1) translateY(7.5px);
            }
            &:hover::after,
            &:hover {
              opacity: 0.7;
            }
            display: flex;
            flex-direction: column;
            font: normal 600 ${({ theme }) => theme.size.subTitle} / 1.5rem
                'Source Sans Pro',
              sans-serif;
            text-decoration: none;
          }
        }
      }
    }

    .user_actions {
      display: flex;
      width: 25%;
      max-width: 200px;
      justify-content: space-between;
      svg {
        &:hover {
          opacity: 0.75;
        }
        fill: ${({ theme }) => theme.color.text};
        width: 25px;
        height: 25px;
        cursor: pointer;
        transition: transform 0.1s ease-in-out;
      }
      .dropdown {
        display: flex;
        align-items: center;
        z-index: 1;
        h1 {
          display: flex;
          font-size: ${({ theme }) => theme.size.text};
          text-transform: uppercase;
          margin: 0 5px;
        }
        .action {
          z-index: 6;
          display: flex;
          opacity: 0;
          pointer-events: none;
          bottom: -90px;
          right: 50px;
          transform: translateY(-30px);
          flex-direction: column;
          position: absolute;
          width: 90px;
          padding: 5px 10px;
          background-color: ${({ theme }) => theme.color.text};
          border-radius: 3px;
          transition: transform 0.25s ease, opacity 0.25s ease;
          p {
            position: relative;
            &:hover::before,
            &:hover::after {
              transform: scaleX(1);
            }
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              transform: scaleX(0);
              transform-origin: right bottom;
              background-color: ${({ theme }) => theme.color.primary};
              transition: transform 0.25s 0.1s ease-in-out;
            }
            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 2px;
              transform: scaleX(0);
              transform-origin: left bottom;
              background-color: ${({ theme }) => theme.color.primary};
              transition: transform 0.25s 0.1s ease-in-out;
            }
            margin: 8px 0;
            width: 100%;
            padding: 3px;
            text-transform: uppercase;
            color: ${({ theme }) => theme.color.primary};
            font-size: ${({ theme }) => theme.size.subTitle};
            cursor: pointer;
            transition: background-color 0.4s 0.25s ease, color0.4s 0.25s ease;
          }
        }
      }
    }
    .mobile_action_open {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: column;
      width: 45px;
      height: 40px;

      .action_button {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        width: 100%;
        height: 100%;
        &::before {
          content: '';
          width: 100%;
          height: 4px;
          border-radius: 10px;
          background: ${({ theme }) => theme.color.text};
          transition: transform 0.35s ease;
        }
        &::after {
          content: '';
          width: 65%;
          border-radius: 10px;
          height: 4px;
          background: ${({ theme }) => theme.color.text};
          transition: transform 0.35s ease, width 0.35s ease;
        }
      }
      input[type='checkbox'] {
        visibility: hidden;
        &:checked + ::before {
          width: 100%;
          transform-origin: center;
          transform: rotateZ(-48deg) translate3d(-15px, 0, -15px);
        }
        &:checked + ::after {
          width: 100%;
          transform-origin: center;
          transform: rotateZ(48deg) translateX(-15px);
        }
      }
    }
  }
  main {
    position: relative;
    overflow-x: hidden;
    height: calc(100% - 150px);
    animation: ${apperAnim} 1s ease-in-out 1 forwards;

    .main_content {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        opacity: 0.2;
        z-index: 0;
      }
      padding: 0 3vw;
      max-width: 1440px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: auto;
      .product {
        width: 100%;
        padding-left: 2.5vw;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .product_photo {
          display: flex;
          position: relative;
          flex-direction: column;
          width: 27%;
          min-height: 400px;
          min-width: 300px;
          z-index: 1;
          .image_el {
            display: flex;
            width: 100%;
            height: 100%;
            position: relative;
            &::before {
              content: '';
              bottom: 8px;
              right: 0;
              left: 0;
              position: absolute;
              width: 60%;
              height: 35px;
              margin: auto;
              box-shadow: -2px 5px 49px 15px rgba(0, 0, 0, 0.8);
              border-radius: 50%;
              z-index: -1;
            }
            img {
              user-select: none;
              width: 100%;
              height: 100%;
              filter: ${({ theme }) =>
                theme.color.filter ? theme.color.filter : 'initial'};
              transition: filter 0.5s ease;
            }
          }

          .theme_switcher {
            z-index: 1;
            margin-top: 50px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
              font-size: ${({ theme }) => theme.size.subTitle};
              color: ${({ theme }) => theme.color.text};
            }
            .switch_container {
              display: flex;
              align-items: center;
              width: 80px;
              margin: 0 15px;
              padding: 3px;
              border: 2px solid ${({ theme }) => theme.color.tertiary};
              border-radius: 35px;
              label {
                width: 25px;
                height: 25px;
                background: ${({ theme }) => theme.color.text};
                border-radius: inherit;
                transform: translateX(0);
                transition: transform 0.25s ease-in-out,
                  background-color 0.25s ease-in-out;
              }
              input[type='checkbox'] {
                display: none;
                &:checked + label {
                  transform: translateX(45px);
                  background: ${({ theme }) => theme.color.text};
                }
              }
            }
          }
        }
        .product_info {
          display: flex;
          flex-direction: column;
          max-width: 53.5%;
          z-index: 1;

          color: ${({ theme }) => theme.color.text};
          .title {
            margin-bottom: 30px;
            h3 {
              font-size: ${({ theme }) => theme.size.title};
              color: ${({ theme }) => theme.color.secondary};
            }
            h1 {
              font-size: ${({ theme }) => theme.size.header};
            }
          }
          .description {
            p {
              font-size: ${({ theme }) => theme.size.text};
              font-weight: 400;
              line-height: 150%;
              margin-bottom: 25px;
            }
            margin-bottom: 15px;
          }
          .below_infos {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 60px;
            .below_el {
              display: flex;
              align-items: center;
              svg {
                width: 45px;
                height: 45px;
                padding: 10px;
                fill: ${({ theme }) => theme.color.text};
                background: ${({ theme }) => theme.color.tertiary};
                border-radius: 50%;
              }

              h4 {
                font-size: ${({ theme }) => theme.size.text};
                margin-left: 12px;
              }
            }
          }
          .button_container {
            display: flex;
            .button {
              min-width: 190px;
              svg {
                width: 25px;
                height: inherit;
                fill: ${({ theme }) => theme.color.text};
                margin-right: 10px;
                transition: fill 0.15s ease;
              }
              &:hover::before {
                transform: scale(1);
                opacity: 1;
              }
              &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: ${({ theme }) => theme.color.text};
                border-radius: inherit;
                transform: scaleX(0);
                opacity: 0;
                z-index: -1;
                transition: transform 0.25s 50ms ease, opacity 0.25s 50ms ease;
              }
              &:hover svg,
              &:hover {
                color: ${({ theme }) => theme.color.primary};
                fill: ${({ theme }) => theme.color.primary};
              }
              position: relative;
              width: 35%;
              padding: 18.5px;
              margin-right: 20px;

              display: flex;
              flex-direction: row;
              justify-content: center;

              align-items: center;
              border-radius: 35px;
              border: 1px solid ${({ theme }) => theme.color.text};

              color: ${({ theme }) => theme.color.text};
              background: inherit;
              font-weight: bold;

              cursor: pointer;
              outline: none;
              font-size: ${({ theme }) => theme.size.text};
              z-index: 1;
              transition: color 0.15s ease;
            }
          }
        }
      }
    }
  }

  .player_container {
    position: fixed;
    display: flex;
    pointer-events: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(20, 22, 26, 0.75);
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.25s ease;
    .content {
      width: 60%;
      height: 60%;
      .video_player {
        width: 100%;
        height: 100%;
        background: rgba(50, 50, 50, 1);
        top: 0;
        border: none;
        z-index: 2;
        transform: scaleY(0);
        opacity: 0;
        transition: transform 0.25s 0.25s ease-in-out, opacity 0.25s 0.25s ease;
        pointer-events: none;
      }
    }
  }

  // Mobile View

  .mobile_menu {
    width: 100%;
    pointer-events: none;
    height: 330px;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    padding: 15px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: max-height 0.25s ease, opacity 0.25s ease;
    .content {
      color: ${({ theme }) => theme.color.text};
      fill: ${({ theme }) => theme.color.text};
      .user_actions {
        display: flex;
        flex-direction: column;
        &::after {
          content: '';
          width: 100%;
          height: 3px;
          border-radius: 3px;
          background: ${({ theme }) => theme.color.text};
        }
        .icons {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          padding: 10px 5px;
          margin-bottom: 10px;
          svg {
            position: relative;
            &:active {
              background: ${({ theme }) => theme.color.secondary};
              fill: ${({ theme }) => theme.color.primary};
            }

            border: 1px solid ${({ theme }) => theme.color.secondary};
            border-radius: 50%;
            padding: 7px;
            margin-left: 20px;
            cursor: pointer;
            width: 42.5px;
            height: 42.5px;
          }
        }
      }
      h2 {
        font-size: ${({ theme }) => theme.size.title};
        font-weight: 500;
        cursor: pointer;
        margin-top: 25px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    header {
      padding: 0 20px;
      nav {
        ul {
          li {
            a {
              font-size: ${({ theme }) => theme.size.smallers.text};
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    header {
      .brand_logo {
      }
      .mobile_action_open {
        display: none;
      }
    }
    .mobile_menu {
      display: none;
    }
  }

  @media only screen and (max-width: 1024px) {
    & {
      height: 100%;
    }

    header {
      nav {
        display: none;
      }
      .user_actions {
        display: none;
      }
    }
    main {
      height: 100%;
      .main_content {
        max-width: initial;
        padding: initial;
        .product {
          padding: 20px;
          flex-direction: column;
          .product_photo {
            margin-bottom: 35px;
          }
          .product_info {
            align-items: center;
            max-width: initial;
            .title {
              align-self: flex-start;
            }
            .below_infos {
              flex-direction: column;
              align-items: flex-start;
              margin-bottom: 20px;
              .below_el {
                margin-bottom: 10px;
              }
            }
            .button_container {
              width: 100%;
              flex-direction: column;
              .button {
                width: 100%;
                min-width: initial;
                margin: 5px 0;
              }
            }
          }
        }
      }
    }
  }
`
