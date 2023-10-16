// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationSearchDetails} = props
  const {name, imgUrl} = destinationSearchDetails

  return (
    <li className="main-destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
