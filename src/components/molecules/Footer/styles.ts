import styled from 'styled-components'
import { color, device } from '../../../styles'

export const FooterContainer = styled.footer`
  padding: 40px 0;
  border-top: 1px solid ${color.grey3};

  > ul {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;

    @media ${device.medium} {
      justify-content: space-between;
    }

    > li {
      font-size: 12px;
      list-style: none;
      margin: 3px;

      &.copyright {
        color: ${color.grey};
      }

      > a {
        display: block;
        color: ${color.blue};
        cursor: pointer;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        &.logo {
          display: none;

          @media ${device.medium} {
            color: ${color.grey1};
            display: block;
            margin: 0 24px;
          }

          &:hover {
            color: ${color.grey2};
          }
        }
      }
    }
  }
`
