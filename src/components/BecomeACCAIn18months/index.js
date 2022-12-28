import {GoSmiley} from 'react-icons/go'
import {BsBookHalf, BsFillDisplayFill, BsPeopleFill} from 'react-icons/bs'
import RequestCallBack from '../RequestCallBack'
import {
  MainContainerBecome,
  BecomeContainer,
  BecomeButtonsContainer,
  LernerPartnerButton,
  CompanyDetailsContainer,
  DetailsContainer,
  Detailp1,
  Detailp2,
} from './StyledComponents'
import './index.css'

const BecomeACCAIn18months = () => (
  <MainContainerBecome>
    <BecomeContainer>
      <h1 className="header">Become ACCA In 18 months</h1>
      <p className="become-subs">
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s, Begin ACCA prep with
        1FIN now.
      </p>
      <div className="request-call-back">
        <RequestCallBack />
      </div>
      <CompanyDetailsContainer>
        <DetailsContainer>
          <div className="detail-top">
            <GoSmiley />
            <Detailp1>Registered Users</Detailp1>
          </div>
          <Detailp2>248,775</Detailp2>
        </DetailsContainer>
        <DetailsContainer>
          <div className="detail-top">
            <BsBookHalf />
            <Detailp1>Courses Enrolled</Detailp1>
          </div>
          <Detailp2>65,147</Detailp2>
        </DetailsContainer>
        <DetailsContainer>
          <div className="detail-top">
            <BsFillDisplayFill />
            <Detailp1>Minutes Watched</Detailp1>
          </div>
          <Detailp2>2,088,032,687</Detailp2>
        </DetailsContainer>
        <DetailsContainer>
          <div className="detail-top">
            <BsPeopleFill />
            <Detailp1>Faculty</Detailp1>
          </div>
          <Detailp2>8 Experts</Detailp2>
        </DetailsContainer>
      </CompanyDetailsContainer>
      <BecomeButtonsContainer>
        <button type="button" className="brochure-button">
          Download Brochure
        </button>
        <LernerPartnerButton>
          <div className="learner-button">
            <p>SERVER LEARNING PARTNER</p>
            <p className="spans">ACCA</p>
          </div>
        </LernerPartnerButton>
      </BecomeButtonsContainer>
    </BecomeContainer>
    <div className="request">
      <RequestCallBack />
    </div>
  </MainContainerBecome>
)
export default BecomeACCAIn18months
