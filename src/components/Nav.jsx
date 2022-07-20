import React from 'react';

class Nav extends React.Component { 
  render() {
return (
<>
<nav className="navbar border-bottom">
<div className="container">
  <a href="" className="navbar-brand"><img src="../../public/logo-airbnb.png" alt="Airbnb logo" width="100px"/></a>
  <form className="d-flex ps-5" role="search">
    <button className="btn btn-outline-secondary ms-2" type="submit">Login</button>
  </form>
</div>
</nav>
</>) 
}
}

export default Nav