// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onSuccessLogin = JWTToken => {
    const {history} = this.props
    Cookies.set('jwt_token', JWTToken, {expires: 30})
    history.replace('/')
  }

  onFailureLogin = errormsg => {
    console.log(errormsg)
  }

  onClickLogin = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'GET',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    }
    this.onFailureLogin(data.error_msg)
  }

  onClickLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <div className="login-container">
          <h1 className="heading">Please Login</h1>
          <button
            type="button"
            className="login-text"
            onClick={this.onClickLogin}
          >
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}

export default Login
