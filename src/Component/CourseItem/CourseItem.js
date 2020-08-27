import React from 'react';
import './CourseItem.css';

const CourseItem = (props) => {
    const {img, title, by, price} = props.course;
    return (
            <div className="col-md-12">
                <div className="col-md-4 user-dtl">
                    <div className ="card text-center">
                        <div className="overflow">
                            <img src={img} alt={title}/>
                        </div>
                        <div className="card-body txt-dark">
                            <div className="card-title">{title}</div>
                            <div className="card-text text-secondary">
                                <p>By: {by}</p>
                                <p>Price: ${price}</p>
                                <button onClick={ ()=> props.handleAddCourse(props.course)} className="btn btn-outline-success">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CourseItem;