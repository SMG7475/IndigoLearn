/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #4b0082;
  height: 10vh;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const LogoContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LogoHeader = styled.h1`
  margin: 10px;
  font-size: 20px;
`
export const HeaderOptionsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  @media (max-width: 700px) {
    display: none;
  }
`
export const HeaderOptionsListItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
`
export const LoginButtonHeader = styled.button`
  background-color: #ffffff;
  color: #4b0082;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: transparent;
  font-size: 14px;
  height: 30px;
  @media (max-width: 700px) {
    display: none;
  }
`
