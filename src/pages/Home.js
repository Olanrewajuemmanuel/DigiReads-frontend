import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HomePage } from "../routes/paths"

export default function Home() {
    const userData = useSelector(state => state.userReducer.userData)
    return (
        <div>
            {
                userData.user_category === "AUTHOR" ? (
                    <div>
                        You are an author
                        <Link to={HomePage}>Finish your author's registration to publish books</Link>
                        </div>
                ) : (
                    <div>
                        Reader's content
                        </div>
                )
            }
        </div>
    )
}
