import React from 'react';

class Login extends React.Component {
  render() {
    return(
      <>
        <div className="login">
          <div className=" position-absolute top-50 start-50 translate-middle">
            <form action="">
             <div className="card p-4 text-start" style="width: 30rem;">
                <img className="mx-auto mb-4" src="./images/logo-airbnb.png" alt="Airbnb logo" width="100px"/>
                <div className="card-body">
                  <h6 className="mb-1">Email address</h6>
                  <input type="email" name="login-email" className="form-control mb-2" placeholder="name@example.com"/>
                  <h6 className="mb-1">Password</h6>
                  <input type="password" name="login-password" className="form-control mb-2"/>
                  <button type="submit" name="login" className="btn btn-success mt-3">Login</button>
                  <h6 className="signup mt-3">New to Airbnb <a href="">Signup</a></h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

  export default Login