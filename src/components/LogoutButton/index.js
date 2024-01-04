// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button type="button" className="button" onClick={onClickButton}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
