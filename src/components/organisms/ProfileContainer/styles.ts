import styled from 'styled-components'
import { device } from '../../../styles'

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.medium} {
    display: grid;
    column-gap: 35px;
    grid-template-columns: 280px auto;
    margin-top: 30px;
  }
`
