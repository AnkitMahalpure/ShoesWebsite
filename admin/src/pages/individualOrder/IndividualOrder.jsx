import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethod';
import "./individualOrder.css"
import { useLocation } from 'react-router-dom';
const IndividualOrder = () => {
    const [order, setOrder] = useState({});
    const location = useLocation();
    const orderId = location.pathname.split("/")[2];

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders/findOrder/" + orderId);
                console.log(res.data);
                setOrder(res.data);
            } catch { }
        };
        getOrders();
    }, [orderId]);
    return (
        <div className="individualOrder">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
            </div>

            <h1>Address : {order[0].address}</h1>
            <h1>Amount : {order[0].amount}</h1>
            <h1>OrderId : {order[0].orderId}</h1>
            <h1>PaymentId : {order[0].paymentId}</h1>
            <h1>Status : {order[0].status}</h1>
            <h1>UserId : {order[0].userId}</h1>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        {/* <input type="text" placeholder={product.title} />
                        <label>Product Description</label>
                        <input type="text" placeholder={product.desc} />
                        <label>Price</label>
                        <input type="text" placeholder={product.price} /> */}
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            {/* <img src={product.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label> */}
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default IndividualOrder
