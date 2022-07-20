import Nav from "./Nav";
import React from "react"
import Card from "./Card"

class List extends React.Component {  
  state = {
     houses: [{
      img: "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png",
      title: "Luxury Villa in Chaweng",
      description: "jkdbqckjqbkbqevbqekjvnbe;jvbakjbeqkbva;bvekbva",
      rooms: 3,
      location: "Koh Samui",
      price: 350
     },{
      img:"https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png",
      title: "Private Villa Lotus",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollit…",
      rooms: 3,
      location: "Koh Phangan",
      price: 150
    },{
      img: "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png",
      title: "Seminyak KuDeTa Beach",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollit…",
      rooms: 3,
      location: "Bali",
      price: 120
    },{
      img: "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png",
      title: "5 Bed Villa Canggu",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollit…",
      rooms: 5,
      location: "Bali",
      price: 250 
    },{
      img: "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png",
      title: "Archie Village House",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollit…",
      rooms: 2,
      location: "Koh Phangan",
      price: 80
    },{
      img: "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png",
      title :"Luxury 5 Beds Villa",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo…",
      rooms: 5,
      location: "Koh Phangan",
      price: 150
    },{
      img: "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png",
      title: "La Casa",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo…",
      rooms: 1,
      location: "Koh Phangan", 
      price: 400
    }]
  }

    // searchTerms = () => {
      
    // }
  
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
          <button onClick ={this.searchTerms} className="btn btn-success">Search</button>
        </div>
      </div>
    </form>
  </div>
</div>
    
    <div class="container pt-4">
    <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1">

 {this.state.houses.map( element => {
      return (<Card element={element} />)
 })}
      </div>
      </div>
    </>)
    }
}

export default List