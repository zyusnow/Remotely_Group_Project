import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { addOneProduct } from '../../../store/product';

export default function NewProduct() {
    return (
        <>
            <h2>new product to test</h2>
        </>
    )
}
