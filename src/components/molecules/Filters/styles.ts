import styled from 'styled-components'
import { color, device, fontWeight } from '../../../styles'

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-template-rows: auto;
  grid-template-areas:
    'new-repository new-repository'
    'text-field text-field'
    'dropdown-container dropdown-container';

  @media ${device.medium} {
    grid-template-columns: 300px 104px;
    grid-template-areas:
      'text-field new-repository'
      'dropdown-container dropdown-container';
  }

  @media ${device.large} {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 32px;
    justify-content: flex-start;
    margin: 16px 0;
    width: 100%;
  }

  > .new-repository {
    grid-area: new-repository;
    margin-top: 16px;

    @media ${device.medium} {
      margin-top: 0;
    }
  }

  > .dropdown-container {
    grid-area: dropdown-container;
    display: flex;
    margin-bottom: 16px;

    @media ${device.medium} {
      margin-bottom: 0;
    }
  }
`
export const Button = styled.button`
  align-items: center;
  background-color: ${color.grey6};
  border-radius: 6px;
  border: 1px solid rgba(400, 246, 252, 0.1);
  color: ${color.grey5};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: ${fontWeight.medium};
  margin-right: 3px;
  padding: 5px 16px;
  transition-property: color, background-color, border-color;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);

  &:hover {
    background-color: ${color.grey6};
    border-color: ${color.grey};
    transition-duration: 0.1s;
  }

  > svg {
    margin-left: 8px;
    opacity: 0.8;
  }
`

export const SuccessButton = styled(Button)`
  background-color: ${color.green};
  border-color: ${color.green};
  color: ${color.white};
  width: 100%;
  justify-content: center;

  @media ${device.medium} {
    width: min-content;
  }

  &:hover {
    background-color: ${color.green1};
    border-color: ${color.green1};
    transition-duration: 0.1s;
  }

  > svg {
    margin: 0 8px 0 0;
  }
`
