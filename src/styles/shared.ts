import styled from 'styled-components'
import { device } from './index'

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 12px 0 12px;
  width: 100vw;

  @media ${device.medium} {
    padding: 0 10px;
    width: 768px;
  }

  @media ${device.large} {
    width: 992px;
  }

  @media ${device.extraLarge} {
    max-width: 1440px;
    min-width: 1280px;
    padding: 0;
  }
`
