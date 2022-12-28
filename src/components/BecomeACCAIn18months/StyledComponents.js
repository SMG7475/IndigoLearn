/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const MainContainerBecome = styled.div`
  background-color: #f0ffff;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const BecomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 50%;
  color: #000000;
  @media (max-width: 701px) {
    width: 100vw;
    text-align: center;
  }
`
export const BecomeButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`
export const LernerPartnerButton = styled.button`
  background-color: #ff2400;
  color: #ffffff;
  border-color: transparent;
  font-size: 10px;
  border-radius: 6px;
  font-weight: 500;
  width: 180px;
  height: 50px;
  margin: 10px;
`
export const CompanyDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
  @media (max-width: 550px) {
    width: 80vw;
    flex-direction: column;
  }
`
export const DetailsContainer = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-radius: 6px;
  padding: 10px;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: transparent;
  border-color: #4b0082;
  @media (max-width: 700px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`
export const Detailp1 = styled.p`
  font-size: 12px;
  margin-left: 5px;
`
export const Detailp2 = styled.p`
  font-size: 12px;
  text-align: center;
`
