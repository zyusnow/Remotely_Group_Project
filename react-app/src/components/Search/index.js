import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { searchRes } from "../../store/search"

export default function Search() {
    const dispatch = useDispatch();
    const searchResults = useSelector((state)=>state.search)
    const products = Object.values(searchResults)

    const search = useLocation().search;
    const q = new URLSearchParams(search).get('q');

    useEffect(()=>{
        dispatch(searchRes(q))
    }, [dispatch, q])

    if (!products?.length) {
        return (
            <h3>No results found for {q}</h3>
        )
    } else {
        return (
            <>
            <h3>{products?.length} Search Results for "{q}"</h3>
            <br/>
            <div className="products_container">
            {products?.map((product)=>(
                <div className='one_product_container' key={product?.id}>
                    <div className='img_container'>
                    <Link to={`/products/${product?.id}`}>
                        <img className="img" src={product?.imageUrl} alt={product?.category_name}></img>
                    </Link>
                    </div>
                    <div className='card_content'>
                        <Link className='product_title' to={`/products/${product.id}`}>{product?.title}</Link>
                        <div className='product_price'>${product?.price}</div>
                    </div>
                </div>
                ))}
                </div>
            </>
        )
    }
}
