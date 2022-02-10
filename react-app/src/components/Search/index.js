import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { search } from "../../store/search"
import { useParams } from 'react-router-dom';


export default function SearchBar() {
    const searchResults = useSelector((state)=>state.search)
    const dispatch = useDispatch();

    console.log(search)

    const { term } = useParams()

    console.log(term, "TERRMMMM")

    useEffect(()=>{
        dispatch(search(term))
    },[dispatch, term])


    return (
        <>

        </>
    )
}
