import React from 'react';

class Signup extends React.Component {
  render() {
    return(
      <>
        <div className="login">
          <div className="position-absolute top-50 start-50 translate-middle">
            <form action="" width="50%">
              <div className="card p-4 text-start" style="width: 30rem;">
                <img className="mx-auto mb-4" src="./images/logo-airbnb.png" alt="Airbnb logo" width="100px"/>
                  <div className="card-body">
                    <h6 className="mb-1">Your full name</h6>
                    <input type="text" name="name-signup" className="form-control mb-2"/>
                    <h6 className="mb-1">Profile picture</h6>
                    <input type="text" name="picture-signup" className="form-control mb-2"/>
                    <h6 className="mb-1">Email address</h6>
                    <input type="email" name="email-signup" className="form-control mb-2" placeholder="name@example.com"/>
                    <h6 className="mb-1">Password</h6>
                    <input type="password" name="password-signup" className="form-control mb-2"/>
                    <button type="submit" className="btn btn-success mt-3">Sign up</button>
                    <h6 className="signup mt-3">Have already an account<a href="">Login</a></h6>
                  </div>
              </div>
           </form>
         </div>
       </div>
      </>
    )
  }
}

  export default Signup