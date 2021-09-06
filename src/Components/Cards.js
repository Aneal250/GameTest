import React from 'react'
import image from './images/image.jpg'

function Cards() {
    return (
        <div>
            <div className=" myCard card mb-3" style={{maxWidth: 500, maxHeight: 400}}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={image} className="img-fluid rounded-start" alt="images"/>
                    </div>
                <div className="col-md-6">
                    <div className="card-body">
                         <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cards
