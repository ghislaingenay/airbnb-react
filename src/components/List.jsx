import Nav from "./Nav";
import React from "react"

class List extends React.Component {  
  render() {
    return (
      <>
      <Nav />
      {/* // <!-- Filter --> */}
  <div className="filter text-bg-light">
  <div className="container py-2">
    <form action="" method="">
      <div className="row">
        {/* <!-- Filter - location --> */}
        <div className="col col-lg-2 col-md-4 col-12  mb-sm-2">
          <div className="input-group">
            <span className="input-group-text"><i className="fa-solid fa-location-dot"></i></span>
            <select className="form-select" aria-label="Default select example">
              <option selected>Any locations</option>
              <option value="1">Koh Phangan</option>
              <option value="2">Koh Samui</option>
              <option value="3">Bali</option>
            </select>
          </div>
        </div>

        {/* <!-- Filter - Number of rooms --> */}
        <div className="col col-lg-2 col-md-4 col-sm-12  mb-sm-2">
          <div className="input-group">
            <span className="input-group-text"><i className="fa-solid fa-house"></i></span>
            <select className="form-select" aria-label="Default select example">
              <option selected>Any rooms</option>
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
            </select>
          </div>
        </div>

        {/* <!-- Filter - price --> */}
        <div className="col col-lg-2 col-md-4 col-sm-12  mb-sm-2">
          <div className="input-group">
            <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
            <input type="number" className="form-control" placeholder="max price" aria-label="Username"
              aria-describedby="basic-addon1"/>
          </div>
        </div>

        {/* <!-- Filter - sort  by price --> */}
        <div className="col col-lg-2 col-md-4 col-sm-12  mb-sm-2">
          <div className="input-group">
            <span className="input-group-text"><i className="fa-solid fa-arrow-up-wide-short"></i></span>
            <select className="form-select" aria-label="Default select example">
              <option value="1">Price (low to high)</option>
              <option value="2">Price (high to low)</option>
            </select>
          </div>
        </div>

        {/* <!-- Filter - search input --> */}
        <div className="col col-lg-2 col-md-4 col-sm-12 mb-sm-2">
          <input type="text" className="form-control" placeholder="House name..."/>
        </div>

        {/* <!-- Filter - Search button --> */}
        <div className="col col-lg-2 col-md-4 col-sm-12  mb-sm-2">
          <button type="submit" className="btn btn-success">Search</button>
        </div>
      </div>
    </form>
  </div>
</div>
    </>)
    }
}

export default List