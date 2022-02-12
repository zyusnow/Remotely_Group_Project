import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../store/category';
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch();
    const categoriesObj = useSelector(state => state?.category?.categories)
    const categoriesArr = Object.values(categoriesObj)
    const user = useSelector(state => state?.session?.user)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return (
        <>
            <div className='banner'>
                {!user ? (
                <div className='welcome'>
                    Shop comfortably, work remotely!
                </div> ) : (
                <div className='welcome'>
                    Welcome, {user.username}!
                    </div>)}
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
            <div className='down_banner'>
                <div className='down_banner_left'>
                    <div className='left_title'>Home Office</div>
                    <div className='left_sub_title'>Products For A Better Way To Work</div>
                    <div className='left_content'>Find everything you need to work from home.</div>
                    <div className='left_content'> We cut out middlemen and maintain a lea line of modular inventory to save you up to 50% compared to traditional office furniture of similar quality.</div>
                    <button className='banner_button'><Link className='btn_link' to={`/products`}>SHOP COLLECTIONS</Link></button>
                </div>
                <img className="img_banner" src="https://res.cloudinary.com/dprnsux1z/image/upload/v1644427511/ave-calvar-BbQXZ7UyX0w-unsplash_qkehs5.jpg" alt="center_banner"></img>
            </div>
        </>
    )
}

export default HomePage;
