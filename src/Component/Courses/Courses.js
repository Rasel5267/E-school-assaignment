import React from 'react';
import fakeData from '../../fakeData';
import './Courses.css';
import {useState} from 'react';
import CourseItem from '../CourseItem/CourseItem';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) => {
        const newAddCart = [...cart, course];
        setCart(newAddCart);
    }
    return (
        <div className="courses">
            <div className="course-area col-md-9">
                {
                    courses.map(course => <CourseItem course={course} handleAddCourse={handleAddCourse} key={course.id}></CourseItem>)
                }
            </div>
            <div className="cart-area col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div> 

    );
};

export default Courses;