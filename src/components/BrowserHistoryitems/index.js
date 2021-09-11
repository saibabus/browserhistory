import './index.css'

const BrowserHistoryitems = props => {
  const {eachhistorylist, deletedhistoryitem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachhistorylist
  const ondeltetheitem = () => {
    deletedhistoryitem(id)
  }
  return (
    <li className="eachhistoryitem">
      <p className="timeaccessed">{timeAccessed}</p>
      <img alt="domain logo" src={logoUrl} className="domainlogo" />
      <p className="title">{title}</p>
      <p className="domainurl">{domainUrl}</p>
      <button
        type="button"
        className="button"
        testid="delete"
        onClick={ondeltetheitem}
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
        />
      </button>
    </li>
  )
}
export default BrowserHistoryitems
