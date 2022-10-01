import React  from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useFormik} from 'formik';
function Searchbar(){

const navigate = useNavigate();
const formik = useFormik(
    {
        initialValues:{
            product:""
        },
        onSubmit:async(values)=>{
            console.log(values);
            let products = await axios.get(`https://web-scraping-node.herokuapp.com/getProduct?product=${values}`)
            console.log(products)
            navigate('/results')
        }
    }
)
//     useEffect(()=>{
//         fetchData();
//     },[])
// let fetchData = async()=>{
//     try{
//         let products= await axios.get(`https://web-scraping-node.herokuapp.com/getProduct?product=${values}`)
//     console.log(products)
//     }catch(error){

//     }
// }
    return <div>
        <div className="search" onSubmit={formik.handleSubmit}>
        <form className="search_bar" >
            <input type="text" placeholder="search..." 
                value={formik.values.name}
                onChange={formik.handleChange}
                product="product"
            />
            <button type="submit"><FontAwesomeIcon icon={faArrowRight}/></button>    
        </form>
        </div>
    </div>
}

export default Searchbar