import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../store/category';
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch();
    const categoriesObj = useSelector(state => state?.category?.categories)
    const categoriesArr = Object.values(categoriesObj)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return (
        <>
            <div className='banner'>
                <div className='welcome'>Stay comfortabley, work remotely!</div>
                <div className='categories_container'>
                        <ul>
                    {categoriesArr?.map(category => (
                            <li key={category?.id}>
                                <Link to={`/category/${category.name}`}>
                                    <img src={category.category_image} className="round-image" alt="" />
                                </Link>
                                <p>{category.name}</p>
                            </li>
                    ))}
                    </ul>
                        {/* <li>
                            <Link to="/products?search=pokemon">
                            <img src="https://res.cloudinary.com/dprnsux1z/image/upload/v1644336599/joshua-fuller-I0ucRdvImTo-unsplash_rznkn8.jpg" className="round-image" alt="" />
                            </Link>
                            <p>Office Electronics</p>
                        </li>
                        <li>
                            <Link to="/products">
                                <img src="https://res.cloudinary.com/dprnsux1z/image/upload/v1644295492/tianyi-ma-WiONHd_zYI4-unsplash_oc7ycm.jpg" className="round-image" alt="" />
                            </Link>
                            <p>Computer Technology</p>
                        </li>
                        <li>
                            <Link to="/products">
                            <img src="https://res.cloudinary.com/dprnsux1z/image/upload/v1644295631/bryan-natanael-c4a_0kycTUE-unsplash_ybcbyb.jpg" className="round-image" alt="" />
                            </Link>
                            <p>Computer Accessories</p>
                        </li>
                        <li>
                            <Link to="/products">
                            <img src="https://res.cloudinary.com/dprnsux1z/image/upload/v1644336706/marten-bjork-rH8O0FHFpfw-unsplash_s4bbzw.jpg" className="round-image" alt="" />
                            </Link>
                            <p>Stationery & Office Supplies</p>
                        </li>
                        <li>
                            <Link to="/products">
                            <img src="https://res.cloudinary.com/dprnsux1z/image/upload/v1644337131/jan-antonin-kolar-bXBTjpjgidM-unsplash_vxt4ul.jpg" className="round-image" alt="" />
                            </Link>
                            <p>Boards</p>
                        </li> */}

                </div>
            </div>
        </>
    )
}

export default HomePage;
