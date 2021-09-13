import { useState } from "react"
import { GET_AUTHOR } from "../schemas"
import { useQuery } from "@apollo/client"


export default function Check({ id }) {
    const [err, setErr] = useState({})
    const { loading, data, error } = useQuery(GET_AUTHOR, {
        variables: {
            id
        },
        onError: (err) => {
            setErr(err)
        }
    })
    if (loading) return `Loading...`
    return (
        <div>
            { err.message }
            {console.log(data)}
            Check
        </div>
    )
}
