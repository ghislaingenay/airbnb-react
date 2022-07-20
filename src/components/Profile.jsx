import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="container pt-4">
      <div className="row">
        {/* <!-- Profile --> */}
        <div className=" col-12 col-lg-4">
          <h2 className="pb-2">Profile</h2>
          <form action="" className="border-top pt-2 pt">
            <h5 className="my-0 fs-6">Name</h5>
            <input type="text" className="form-control"/>
            <h5 className="mb-0 mt-2 fs-6">Email</h5>
            <input type="email" className="form-control" placeholder="name@example.com"/>
            <h5 className="mb- mt-2 fs-6">Profile picture</h5>
            <img className="rounded-circle d-block mb-2" src="https://randomuser.me/api/portraits/men/11.jpg" width="50px"
              alt=""/>
            <input type="text" className="form-control" placeholder="namedvdvdvd dv "/>
            <button type="submit" className="btn btn-success mt-2">Save changes</button>
          </form>
        </div>
        <div className="col"></div>
        {/* <!-- My listings --> */}
        <div className="col-lg-7 col-12 mt-lg-0 mt-4">
          <h2 className="pb-2">My listings</h2>
          <form action="" className="border-top pt-2">
            <button type="button" className="btn btn-success my-2">List a house</button>
  
            {/* <!-- No house --> */}
            <div className="card mb-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <p className="my-1">
                      You do not have listed houses
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Cards - house --> */}
            <div className="card mb-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <img className="img-fluid"
                      src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png"
                      className="card-img-top" alt="..."/>
                  </div>
                  <div className="col-9">
                    <h4> Luxury Villa in Chaweng</h4>
                    <small className="text-secondary">Koh Samui - 4 rooms</small>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  
                    </p>
                    <button type="submit" className="btn btn-outline-secondary">Edit</button>
                    <button type="submit" className="btn btn-outline-success">View</button>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="card mb-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <img className="img-fluid"
                      src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png"
                      className="card-img-top" alt="..."/>
                  </div>
                  <div className="col-9">
                    <h4> Luxury Villa in Chaweng</h4>
                    <small className="text-secondary">Koh Samui - 4 rooms</small>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    </p>
                    <form>
                      <button type="submit" className="btn btn-outline-secondary">Edit</button>
                      <button type="submit" className="btn btn-outline-success">View</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default Profile