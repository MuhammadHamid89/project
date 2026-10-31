import Card from "./ReusableCard";
export default function ProductCard({product}){
    const products=[
        {id:1,name:'laptop',price:1200},
        {id:2,name:'phone',price:800},
    ]
    return(
        <>
        <Card title={product.name}>
            <p>Price  ${product.price}</p>

        </Card>
        </>
    )
}