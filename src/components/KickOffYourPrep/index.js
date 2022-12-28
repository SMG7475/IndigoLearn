import RequestCallBack from '../RequestCallBack'
import {LernerPartnerButton} from '../BecomeACCAIn18months/StyledComponents'
import './index.css'

const KickOffYourPrep = () => (
  <div className="kick-off-main-container">
    <div className="kick-oof-container">
      <h1 className="kick-off-header">
        Kick off your ACCA Prep journey with IndigoLearn
      </h1>
      <p className="kick-off-p">
        Sign-in and get instant access to our FREE Courses
      </p>
      <div className="request-call-back">
        <RequestCallBack />
      </div>
      <LernerPartnerButton>
        <div className="learner-button">
          <p>SERVER LEARNING PARTNER</p>
          <p className="spans">ACCA</p>
        </div>
      </LernerPartnerButton>
    </div>
    <div className="request">
      <RequestCallBack />
    </div>
  </div>
)
export default KickOffYourPrep
