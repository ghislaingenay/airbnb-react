import React from 'react';

class One extends React.Component {
  state = {
    house: {
     photos: ["https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png",
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png",  
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png",
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png",
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png",
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png",
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png",
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png",
     "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png"],
     title: "Luxury Villa in Chaweng",
     description: "jkdbqckjqbkbqevbqekjvnbe;jvbakjbeqkbva;bvekbva",
     rooms: 3,
     location: "Koh Samui",
     price: 350
    }
  }

    render() {
      return(
<>
  {/* // <!-- Gallery --> */}
  <div className="container mt-3">
    <div className="row">
      <div className="col p-0 align-self-center col-lg-6 col-12">
        <img width="100%"
          src={this.state.house.photos[0]}
          alt="Picture Luxury Villa Chaweng" />
      </div>
      <div className="col align-self-center col-lg-6 col-12  ">

        <div className="row row-cols-lg-3  row-cols-5 pt-2 pt-lg-0 pt-sm-4 text-end g-4">
        {this.state.house.photos.map(photo => {
          return (
            <div className="col px-0 align-items-center side-picture">
            <img className="img-fluid"
              src={photo}
              alt="Picture Luxury Villa Chaweng" width="70%"/>
          </div>
          )
        })}

          
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Text and reviews --> */}
  <div className="container pt-4">
    <div className="row">
      <div className="col-lg-7 col-xs-12">
        {/* <!-- Left --> */}
        <h1> {this.state.house.title}</h1>
        <i className="fa-solid fa-location-dot text-success pe-1"></i><small>{this.state.house.location} - {this.state.house.rooms} rooms</small>
        <div className="container profile mt-4 mb-4">
          <div className="row">
            <div className="col-1">
              <img className="img-fluid rounded-circle" src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="profile picture"/>
            </div>
            <div className="col-11">
              <small className="text-secondary">Hosted by</small>
              <h6>Ghislain Genay</h6>
            </div>
          </div>
        </div>

        <p className="mt-2">{this.state.house.description}
        </p>

        <h2 className="mt-5">1 Review</h2>
        <form action="">
          <label for="" className="pb-2">Leave a review</label>
          <textarea className="form-control mb-3" name="" cols="30" rows="6"></textarea>
          <button type="button" className="btn btn-outline-success me-1"><i
              className="fa-solid fa-thumbs-up text-success"></i></button>
          <button type="button" className="btn btn-outline-danger"><i
              className="fa-solid fa-thumbs-down text-danger"></i></button>
          <button type="submit" className="mt-3 btn btn-success d-block">Submit</button>
        </form>

        {/* <!-- Individual review --> */}
        <div className="card my-4">
          <div className="container profile mt-3 mb-2">
            <div className="row">
              <div className="col-1">
                <img className="img-fluid rounded-circle" src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="profile picture"/>
              </div>
              <div className="col-10">
                <small className="text-secondary">02 Jan 2022 - 01:01 </small>
                <h6>Luis Margarita</h6>
                <p>Excellent stay, I will come back again</p>
              </div>
              <div className="col-1"><i className="fa-solid fa-thumbs-up text-success"></i></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Request a booking --> */}
      <div className="col-lg-4 col-sm-12 mb-4">
        <div className="card p-3 shadow text-start">
          <form action="">
            <h3>$350/night</h3>
            <i className="fa-solid fa-thumbs-up text-success pe-1"></i><small>2 Reviews</small>
            <textarea className="form-control mt-2" placeholder="Send the host a message..."
              id="exampleFormControlTextarea1" rows="5"></textarea>
            <button type="submit" className="btn btn-success  mt-2">Request a booking</button>
          </form>
             {/* <h3>{this.state.house.price}/night</h3>
          <small>2 Reviews</small>
          <div className="alert alert-success mt-2" role="alert">
            Thank you for your enquiry
          </div>  */}
        </div>
      </div>
    </div>
  </div>

</>
      )
    }

}

export default One