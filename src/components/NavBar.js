import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Authors, Forum, HomePage, Login, SignIn, Books } from "../routes/paths"
export default function NavBar() {
    const userData = useSelector(state => state.userReducer.userData)
    return (
        <div>
            <Link to={HomePage}>DigiReads</Link>
            <ul>
                <li><Link to={Authors}>Find Authors</Link></li>
                <li><Link to={Books}>Explore books</Link></li>
                <li><Link to={Forum}>Forums</Link></li>
            </ul>
            {/**User is signed in conditional rendering */}
            {
                console.log(userData)
            }
            <div className="auth">
                <li><Link to={SignIn}>Sign in</Link></li>
                <li><Link to={Login}>Login</Link></li>
            </div>
        </div>
    )
}
