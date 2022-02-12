import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../store/category';
import {getAllProducts} from '../../store/product'
import './HomePage.css'
function HomePage() {
    const dispatch = useDispatch();
    const categoriesObj = useSelector(state => state?.category?.categories)
    const categoriesArr = Object.values(categoriesObj)
    const products = useSelector(state=> state?.product?.products)
    const productArr = Object.values(products)
    const product1 = productArr[2]
    const product2 = productArr[24]
    const product3 = productArr[18]
    const product4 = productArr[13]
    const product5 = productArr[8]
    const product6 = productArr[9]


    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProducts())
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
            <div className='center_container'>
                <div>Our picks for you</div>
                <div className='picks_products'>
                    <Link to={`/products/${product1?.id}`}>
                        <img className="picks_img first" src={product1?.imageUrl} alt={product1?.category_name} />
                    </Link>
                    <Link to={`/products/${product2?.id}`}>
                        <img className="picks_img" src={product2?.imageUrl} alt={product2?.category_name} />
                    </Link>
                    <Link to={`/products/${product3?.id}`}>
                        <img className="picks_img" src={product3?.imageUrl} alt={product3?.category_name} />
                    </Link>
                    <Link to={`/products/${product4?.id}`}>
                        <img className="picks_img" src={product4?.imageUrl} alt={product4?.category_name} />
                    </Link>
                    <Link to={`/products/${product5?.id}`}>
                        <img className="picks_img" src={product5?.imageUrl} alt={product5?.category_name} />
                    </Link>
                    <Link to={`/products/${product6?.id}`}>
                        <img className="picks_img" src={product6?.imageUrl} alt={product6?.category_name} />
                    </Link>
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
