import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails
  return (
    <li className="job-card">
      <div className="logo-title-container-card">
        <img
          src={companyLogoUrl}
          alt="company logo"
          className="company-logo-card"
        />
        <div className="title-rating-container-card">
          <p className="job-title-card">{title}</p>
          <div className="rating-container-card">
            <AiFillStar className="star-icon-card" />
            <p className="rating-number-card">{rating}</p>
          </div>
        </div>
      </div>
      <div className="location-package-container-card">
        <div className="icon-type-container-card">
          <IoLocationSharp className="type-icon" />
          <p className="type-text">{location}</p>
        </div>
        <div className="icon-type-container-card">
          <BsFillBriefcaseFill className="type-icon" />
          <p className="type-text">{employmentType}</p>
        </div>
        <p className="package-text">{packagePerAnnum}</p>
      </div>
      <hr className="separator" />
      <p className="description-heading-card">Description</p>
      <p className="job-description-card">{jobDescription}</p>
    </li>
  )
}

export default JobCard