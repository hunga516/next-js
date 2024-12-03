import {notFound} from "next/navigation";


export default function DetailsReview({params} : {
    params : {
        productId: string,
        reviewId: string
    }
}){
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }

    return <h1>details review page {params.reviewId} of product {params.productId}</h1>
}