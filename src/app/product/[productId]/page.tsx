export default function DetailsProduct({params} : {
    params: {productId: string}
}){
    return <h1>details product {params.productId}</h1>
}