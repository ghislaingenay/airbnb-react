import React from 'react';

class Create extends React.Component {
   render() {
    return (
    <div className="container">
        <h1 className="pt-3 pb-3">List a house</h1>
        <form>
            <div className="mb-3">
                <h6 className="font-weight-bold mb-1 mt-0">Short Title</h6>
                <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <h6 className="font-weight-bold mb-1 mt-0">Description</h6>
                <textarea className="form-control" rows="3"></textarea>
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
                    <input type="number" className="form-control" placeholder="max price" aria-label="Username"
                        aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="mb-3">
                <h6 className="font-weight-bold mb-1 mt-0">Add photos (up to 9)</h6>
                <div className="container">
                    <div className="row row-cols-12">
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control mb-2" placeholder="http://"/>
                        <input type="text" className="form-control" placeholder="http://"/>

                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-success mb-4">Submit</button>
        </form>
        </div>
   )}
}

export default Create