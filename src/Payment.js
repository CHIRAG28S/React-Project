import React, { useState, useEffect } from 'react'
import Navigation from './navigation'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SeventhPage from './SeventhPage';
import { Modal, Button } from 'react-bootstrap';


export default function Payment() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navigate = useNavigate();
    let parms = useParams();
    // alert(id);
    const data = [
        {
            "id": 1,
            "name": "Cellucor C4 Original Pre Workout",
            "img": "/gym_images/p1.jpg",
            "detail": "Manufacturer: Cellucor\\n Country of Origin: USA\\n Net Quantity: 390.0 gram\\n No. of Items : 1 Pc",
            "price": "2638",
            "delivery": "92"
        },
        {
            "id": 2,
            "name": "Muscletech Mass Tech Extreme 2000",
            "img": "/gym_images/p2.jpg",
            "detail": "Manufacturer: MuscleTech by Superchem Nutri Formulation\\n Country of Origin: India\\n Net Quantity: 3000.0 gram\\n No. of Items : 1 Pc",
            "price": "3699",
            "delivery": "117"
        },
        {
            "id": 3,
            "name": "SN Syntha-6 Protein Powder 5 Lbs",
            "img": "/gym_images/p3.jpg",
            "detail": "Manufacturer: Bio-Engineered Supplements and Nutrition, Inc., 3500 Lacey Road, Suite 1200, Downers Grove, IL 60515\\n Country of Origin: USA\\n Net Quantity: 2270.0 gram\\n No. of Items : 1 Pc",
            "price": "5249",
            "delivery": "109"
        },
        {
            "id": 4,
            "name": "Ultimate Nutrition ISO Sensation 93",
            "img": "/gym_images/p4.jpg",
            "detail": "Manufacturer: Ultimate Nutrition\\n Country of Origin: Canada\\n Net Quantity: 2270.0 gram\\n No. of Items : 1 Pc",
            "price": "6307",
            "delivery": "183"
        },
        {
            "id": 5,
            "name": "Muscletech NitroTech Performance Series",
            "img": "/gym_images/p5.jpg",
            "detail": "Manufacturer: MuscleTech by Superchem Nutri formulations\\n Country of Origin: India\\n Net Quantity: 1810.0 gram\\n No. of Items : 1 Pc",
            "price": "4999",
            "delivery": "140"
        },
        {
            "id": 6,
            "name": "Dymatize ISO 100, 5Lbs",
            "img": "/gym_images/p6.jpg",
            "detail": "Manufacturer:Dymatize Nutrition\\n Country of Origin: India\\n Net Quantity: 2300.0 gram\\n No. of Items : 1 Pc",
            "price": "8149",
            "delivery": "192"
        },
        {
            "id": 7,
            "name": "ESN Black Series Iso 100 Whey",
            "img": "/gym_images/p7.jpg",
            "detail": "Manufacturer: Evolution Sports Nutritio Pvt Ltd\\n Country of Origin: India\\n Net Quantity: 2000.0 gram\\n No. of Items : 1 Pc",
            "price": "2899",
            "delivery": "85"
        }
    ];



    const paymentDone = () => {
        handleClose();

        // alert('Thank you for shopping, you order will be shipped within 24 Hrs.');
        navigate('/');

    }


    console.log(parms.id);
    let item = data.filter(item => item.id == parms.id);
    // let img, item_name, detail, price, delivery, total;

    const [img, setImg] = useState(null);
    const [itemName, setItemName] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState(0);
    const [delivery, setDelivery] = useState('');
    const [total, setTotal] = useState(0);


    // alert(item.length);
    useEffect(() => {
        if (item.length > 0) {

            let p = parseInt(item[0].price);
            let d = parseInt(item[0].delivery);
            setImg(item[0].img);
            setItemName(item[0].name);
            setDetail(item[0].detail);
            setPrice(p);
            setDelivery(d);
            setTotal(p+d);
        }
    }, []);
    return (
        <>
            <Navigation />
            <main>
                <div class="container py-5 payment">
                    <h1 class="mb-4 text-light">Shopping Cart</h1>

                    <div class="row" >

                        {detail && (
                            <>
                                <div class="col-md-8">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div class="row">

                                                        <div class="col-md-2">
                                                            <img src={img} alt="Product 1" class="img-fluid" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <h5 class="card-title fw-bold">{itemName}</h5>
                                                            <p class="card-text">
                                                                {
                                                                    detail.split('\\n').map((line, index) => (
                                                                        <span key={index}>
                                                                            {line}
                                                                            <br />
                                                                        </span>
                                                                    ))
                                                                }
                                                            </p>
                                                        </div>
                                                        <hr />
                                                        <div class="col-md-12">
                                                            <h6 class="card-title fw-bold">Delivery Detail</h6>

                                                            <p class="card-text">
                                                                First & Last Name, Address Line 1, Address Line 2, City, District, State - Pincode <br />
                                                                Email ID, Mobile Number
                                                            </p>
                                                        </div>


                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title text-center fw-bold">Summary</h5>
                                            <hr />
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Subtotal
                                                    <span> ₹{price}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Delivery Charges
                                                    <span> ₹{delivery}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
                                                    Total
                                                    <span> ₹{total}</span>
                                                </li>
                                            </ul>
                                            <div class="text-center">

                                                <button class="buy-btn mt-3" onClick={handleShow}>Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {!detail && (
                            <div class="col">
                                <div class="card mb-3">
                                    <div class="card-body  text-center">
                                        <h3 class="text-dark">No item selected, please select an item.</h3>
                                        <a href='/store'> Goto Store</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                </div>
                <SeventhPage />
                <Footer />

            </main>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Placed</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order has been place, will be delivered Soon. </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={paymentDone}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

