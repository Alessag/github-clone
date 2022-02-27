import styled from 'styled-components'
import { color, fontWeight } from '../../../styles'

export const ProfileMenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const Item = styled.div`
  align-items: center;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;
  color: ${color.grey5};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 100%;
  padding: 8px 16px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);

  &.selected {
    border-bottom: 2px solid ${color.orange};
    font-weight: bold;

    &:hover {
      border-bottom: 2px solid ${color.orange};
    }

    > svg {
      color: ${color.grey5};
    }
  }

  &:hover {
    border-bottom: 2px solid rgba(110, 118, 129, 0.4);
  }

  > svg {
    color: ${color.grey1};
    height: 16px;
    margin-right: 4px;
    width: 16px;
  }
`
export const Counter = styled.div`
  background-color: ${color.orange};
  background-color: rgba(110, 118, 129, 0.4);
  border-radius: 2em;
  border: 1px solid transparent;
  color: ${color.grey5};
  font-size: 12px;
  font-weight: ${fontWeight.medium};
  margin-left: 6px;
  min-width: 20px;
  padding: 0 6px;
  text-align: center;
`
