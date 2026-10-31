// import { useSearchParams } from "react-router-dom"
// import {product} from '../data/product'

// export default function Products(){
//     const [searchParams,setSearchParams]=useSearchParams()
//     const searchText=searchParams.get('q') || '';
//     const category= searchParams.get('category') || 'all';
//     const filterProduct= products.filter((product)=>{
//         const matchesSearch =product.name.toLowerCase().includes(searchText.toLowerCase())

//     const matchesCategory= category=== 'all' || product.category ===category
//     return matchesSearch &&  matchesCategory
//     })

//     function updateSearch(value){
//         setSearchParams({
//             q:value,
//             category,
//         })
//     }
//     function updateCategory(value){
//         searchParams({
//             q:searchText,
//             category:value,
//         })
//     }
//     function clearFilters(){
//         setSearchParams({})
//     }
//     return(
//         <>
//         </>
//     )
// }