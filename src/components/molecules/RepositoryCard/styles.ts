import styled from 'styled-components'
import { color, fontWeight } from '../../../styles/index'

export const RepositoryCardContainer = styled.div`
  border-top: 2px solid ${color.grey3};
  color: ${color.grey};
  padding: 24px 0;
`

export const SectionOne = styled.h3`
  font-size: 20px;
  font-weight: ${fontWeight.semibold};
  height: 30px;
  margin: 0 auto 4px;

  &:hover {
    text-decoration: underline;
  }

  > a {
    color: ${color.blue};
  }
`

export const SectionTwo = styled.div`
  margin-bottom: 8px;
`
export const SectionThree = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  padding-top: 5px;
`

export const DescAndIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  margin-right: 16px;

  > svg {
    margin-right: 3px;
  }

  > .color {
    align-self: center;
    content: '';
    background-color: yellow;
    border-radius: 50%;
    height: 12px;
    margin-right: 7px;
    width: 12px;
  }
`
