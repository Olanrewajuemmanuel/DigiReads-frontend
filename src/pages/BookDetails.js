import { useQuery } from "@apollo/client"
import { useState } from "react"
import { useParams } from "react-router"
import { GET_BOOK } from "../schemas"

export default function BookDetails() {
    let { id } = useParams()
    const [err, setErr] = useState({})
    const { loading, data } = useQuery(GET_BOOK, {
        variables: { id },
        onError: (err) => {
            console.log(err);
            setErr(err)
        }
    })
    if (loading) return "Loading..."
    return (
        <div>
            { err ? err.message : "" }
            { data && data.getBookDetails ? 
            <div className="user_read">
                <p>{data.getBookDetails.title}</p>
                <p>{ data.getBookDetails.content }</p>
                </div>
            :
            null
            
            }
        </div>
    )
}
