import React from "react";
import { Link } from "react-router-dom";
import "./listing.css"
const ProductListing = (props) => {

    const renderData = ({ productData }) => {
        if (productData) {
            if (productData.length > 0) {
                return productData.map((item) => {
                    return (
                            
                                <div class="grocerycard col-lg-4 col-md-6 col-12 mt-4 me-4" style={{ width: '17rem' }} key={item.category_id}>
                                    <img src={item.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title text-center fw-bold text-danger">{item.name}</h5>
                                        <p class="card-text text-secondary text-center">{item.description}</p>
                                        <Link to={`/details/${item.id}`} key={item.id} class="btn btn-success text-white text-center addcart">Show Details</Link>
                                    </div>
                                </div>
                           
                    )
                })
            } else {
                return (
                    <>
                        <h2>No Data For Filter</h2>
                    </>
                )
            }
        } else {
            return (
                <>
                    <img src="/images/loader.gif" alt="loader" />
                    <h1>Loading.....</h1>
                </>

            )
        }
    }

    return (
        <div>
            {renderData(props)}
        </div>
    )

}
export default ProductListing

