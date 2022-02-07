import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/products';

export default function AllProducts() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    console.log(products);

    return (
        <h2>All Products</h2>
    )

}
