import {
  HiOutlineLightBulb,
  HiUserGroup,
  HiOutlineBookOpen,
} from 'react-icons/hi'
import {BsAlarm} from 'react-icons/bs'
import {BiCalendarCheck, BiLaptop} from 'react-icons/bi'
import {FaInfinity} from 'react-icons/fa'
import './index.css'

const WhyChooseUs = () => (
  <div>
    <h1 className="why-header">Why Choose Us?</h1>
    <hr className="line" />
    <div className="why-card-container">
      <div className="why-top-card">
        <HiOutlineLightBulb className="why-icons" />
        <p className="card-heading">Expert faculty</p>
        <p className="card-p">
          Our Faculty are subject matter expertise with practical
          experience.They believe in #StudentFirstPrinciple
        </p>
      </div>
      <div className="why-top-card">
        <HiUserGroup className="why-icons" />
        <p className="card-heading">Complete Success Package</p>
        <p className="card-p">
          Leading Exam Prep Destination with Video classes, Live sessions, Doubt
          resolution Forums, E-notes from kaplan, MCQs, Practice tests,
          Webinars.
        </p>
      </div>
      <div className="why-top-card">
        <FaInfinity className="why-icons" />
        <p className="card-heading">Placements</p>
        <p className="card-p">
          Resume building workshops, mock interviews and placements drives will
          help you impress the top employers and get the dream job.
        </p>
      </div>
    </div>
    <div className="why-card-container2">
      <div className="why-card2">
        <p className="why-card2-p">Levels</p>
        <div className="why-card2-icon-container">
          <HiOutlineBookOpen />
          <p className="card2-icon-sub">Three (13 Papers)</p>
        </div>
      </div>
      <div className="why-card2">
        <p className="why-card2-p">Duration</p>
        <div className="why-card2-icon-container">
          <BsAlarm />
          <p className="card2-icon-sub">6-30 months</p>
        </div>
      </div>
      <div className="why-card2">
        <p className="why-card2-p">Exams</p>
        <div className="why-card2-icon-container">
          <BiLaptop />
          <p className="card2-icon-sub">Quarterly (Online)</p>
        </div>
      </div>
      <div className="why-card2">
        <p className="why-card2-p">Exemptios</p>
        <div className="why-card2-icon-container">
          <BiCalendarCheck />
          <p className="card2-icon-sub">Upto 9 papers</p>
        </div>
      </div>
    </div>
  </div>
)
export default WhyChooseUs
