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
                </div>
            </div>
        </>
    )
}

export default HomePage;
