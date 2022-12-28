import Popup from 'reactjs-popup'
import {FaMixer} from 'react-icons/fa'
import './index.css'

const CurrentQualificationList = [
  {id: 5, qualification: 'Current Qualification'},
  {id: 0, qualification: 'CA'},
  {id: 1, qualification: 'Bcom'},
  {id: 2, qualification: 'CS'},
  {id: 3, qualification: 'CMA'},
  {id: 4, qualification: 'Other'},
]

const RequestCallBack = () => (
  <form className="form">
    <h1 className="call-back-header">
      Aspiring to be an ACCA? Get in touch with us!
    </h1>
    <input className="input" type="text" placeholder="Phone Number*" />
    <input className="input" type="text" placeholder="Email Id" />
    <select className="input">
      {CurrentQualificationList.map(quali => (
        <option value={quali.qualification}>{quali.qualification}</option>
      ))}
    </select>
    <select className="input">
      <option value="">Interested In</option>
      <option value="ACCA 1">ACCA 1</option>
      <option value="ACCA 2">ACCA 2</option>
      <option value="ACCA 3">ACCA 3</option>
    </select>
    <Popup
      modal
      trigger={
        <button type="button" className="call-back-button">
          Request Call Back
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            className="cancel-button"
            type="button"
            onClick={() => close()}
          >
            <FaMixer />
          </button>
          <p className="success-text">SUCCESS</p>
        </div>
      )}
    </Popup>
  </form>
)

export default RequestCallBack