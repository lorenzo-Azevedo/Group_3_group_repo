import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RenderListing extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="listingComponent">
    <div className="container-clearfix divs">
        <div className="container" id="renderListings">
            <p>render jobs</p>
            <div>
                <button type="submit" id="createListing" className="btn btn-primary col-md-3"><Link to="/listingForm">Create Listing</Link></button>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default RenderListing; 