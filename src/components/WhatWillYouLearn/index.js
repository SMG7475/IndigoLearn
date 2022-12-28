import './index.css'

const WhatWillYouLearn = () => (
  <div>
    <h1 className="why-header">What Will You Learn in ACCA?</h1>
    <hr className="line" />
    <div className="why-card-container">
      <div className="What-card">
        <p className="what-card-p1">Knowledge Level</p>
        <ul className="list">
          <li>Business and Technology (BT)</li>
          <li>Management Accounting (MA)</li>
          <li>Financial Accounting (FA)</li>
        </ul>
        <p className="what-card-p2">3 Papers</p>
      </div>
      <div className="What-card">
        <p className="what-card-p1">Skill Level</p>
        <ul className="list">
          <li>Corporate and Business Law (LW)</li>
          <li>Performance Management (PM)</li>
          <li>Taxation (TX)</li>
          <li>Financial Reporting (FR)</li>
          <li>Audit and Assurance ()AA</li>
          <li>Financial Management (FM)</li>
        </ul>
        <p className="what-card-p2">6 Papers</p>
      </div>
      <div className="What-card">
        <p className="what-card-p1">Professional Level</p>
        <ul className="list">
          <li>SBL - Strategic Business Leader</li>
          <li>SBR - Strategic Business Reporting</li>
          <li>Advanced Financial Management (AFM)</li>
          <li>Advanced Performance Management (APM)</li>
          <li>Advanced Taxation ()ATX</li>
          <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
        <p className="what-card-p2">4 Papers</p>
      </div>
    </div>
  </div>
)
export default WhatWillYouLearn
