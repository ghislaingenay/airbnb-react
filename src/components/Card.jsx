import React from 'react';

class Card extends React.Component {
  render() {
return (
  <div class="col">
        <div class="card mb-4">
          <img
            src={this.props.element.img}
            class="card-img-top" alt="Luxury villa"/>
          <div class="card-body">
            <i class="fa-solid fa-location-dot pe-2"></i><small>{this.props.element.location} - {this.props.element.rooms} Rooms</small>
            <h5 class="pt-2 pb-2 card-title">{this.props.element.title}</h5>
            <div class="row">
              <div class="col">
                <i class="fa-solid fa-thumbs-up pe-1 text-success"></i><small>2 Reviews</small>
              </div>
              <div class="col text-end">
                <small>${this.props.element.price}/night</small>
              </div>
              <a href="https://" class="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
) }
}

export default Card