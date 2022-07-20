import React from 'react';

class Edit extends React.Component {
   render() {
    return (
      <div className="container">
      <h1 className="pt-3 pb-3">Edit a house</h1>
      <form className="mb-4" action="" method="">
          <div className="mb-3">
              <h6 className="font-weight-bold mb-1 mt-0">Short Title</h6>
              <input type="text" className="form-control" placeholder="Luxury Villa in Chaweng"/>
          </div>
          <div className="mb-3">
              <h6 className="font-weight-bold mb-1 mt-0">Description</h6>
              <textarea className="form-control" rows="3" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid."></textarea>
          </div>
          <div className="mb-3">
              <h6 className="font-weight-bold mb-1 mt-0">Number of rooms</h6>
              <select className="form-select" aria-label="Default select example">
                  <option selected>Any rooms</option>
                  <option value="1">1 room</option>
                  <option value="2">2 rooms</option>
                  <option value="3">3 rooms</option>
                  <option value="4">4 rooms</option>
                  <option value="5">5 rooms</option>
              </select>
          </div>
          <div className="mb-3">
              <h6 className="font-weight-bold mb-1 mt-0">Location</h6>
              <select className="form-select" aria-label="Default select example">
                  <option selected>Any locations</option>
                  <option value="1">Koh Phangan</option>
                  <option value="2">Koh Samui</option>
                  <option value="3">Bali</option>
              </select>
          </div>

          <div className="mb-3">
              <h6 className="font-weight-bold mb-1 mt-0">Price (per night)</h6>
              <div className="input-group">
                  <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
                  <input type="number" className="form-control" placeholder="350" aria-label="Username"
                      aria-describedby="basic-addon1"/>
              </div>
          </div>
          <div className="mb-3">
              <h6 className="font-weight-bold mb-1 mt-0">Add photos (up to 9)</h6>
              <div className="container">
                  <div className="row row-cols-12">
                      <input type="text" className="form-control mb-2" placeholder="http://dvqsvqdvr"/>
                      <input type="text" className="form-control mb-2" placeholder="http:// jkhevkhkvqhev"/>
                      <input type="text" className="form-control mb-2" placeholder="http://jvlhojeghav"/>
                      <input type="text" className="form-control mb-2" placeholder="http://jhlvhqjvhe"/>
                      <input type="text" className="form-control mb-2" placeholder="http://xnjlvhqjvq"/>
                      <input type="text" className="form-control mb-2" placeholder="http://nlvbzbjn"/>
                      <input type="text" className="form-control mb-2" placeholder="http://vjqefhizdg"/>
                      <input type="text" className="form-control mb-2" placeholder="http://cvuihsijhzg"/>
                      <input type="text" className="form-control mb-2" placeholder="http://jkvhsijvhz"/>

                  </div>

              </div>
          </div>
          <button type="submit" name="save-house" className="btn btn-success d-block">Save Changes</button>
          <button type="submit" name="delete house" className="btn btn-danger d-block mb-4 mt-2">Delete House</button>
      </form>
  </div>
   )}
}

export default Edit