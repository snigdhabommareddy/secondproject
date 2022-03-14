import React, { Component } from 'react';
import axios from 'axios';
import './details.css';

const url = "https://groceryintern.herokuapp.com/productDetails"

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: ''
        }
    }

    render() {
        console.log('details>>',this.state.details)
        return (

            <div className="container mt-4">
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="imageClass">
                            <img src={this.state.details.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="content">
                            <h1 className="fw-bold text-primary">{this.state.details.name}</h1>
                            <div className='mt-2 mb-3'>
                                <i class="fa fa-star me-2"></i>
                                <i class="fa fa-star me-2"></i>
                                <i class="fa fa-star me-2"></i>
                                <i class="fa fa-star me-2"></i>
                                <i class="fa fa-star"></i>
                                <span class="rating ms-2 text-success">({this.state.details.rating} ratings)</span>
                            </div>
                            <h5 className='text-secondary'>Old Price :<strike>Rs 120</strike></h5>
                            <h4 className='fw-bold text-danger'>New Price: Rs {this.state.details.price}</h4>
                            <h5 className='text-success'>{this.state.details.description}</h5>
                            <div className='mt-3 mb-3'>
                                <div class="icons me-3">
                                    <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied" />
                                </div>
                                <div class="icons">
                                    <img src="https://i.ibb.co/s56LLF9/homedelivery.png" alt="delivery"/>
                                </div>
                            </div>
                            <div>
                               <button class="btn btn-warning btn-lg text-white mt-4">Add To Cart</button>
                               <button class="btn btn-danger btn-lg text-white ms-4 mt-4">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }


   
    async componentDidMount() {
        let id = this.props.match.params.id;
        let response = await axios.get(`${url}/${id}`)
        this.setState({ details: response.data[0]})
    }
}

export default Details