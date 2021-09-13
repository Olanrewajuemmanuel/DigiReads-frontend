import { Link } from "react-router-dom"
import {Book} from "../routes/paths"
function AuthorBook({ book: { id, title, desc, image, audio, price, market_tag } }) {
    return (
        <div>
            <Link to={Book + `/${id}`}>
                 <p>{title} <span>{market_tag}</span></p>
            </Link>
            <div>
                <img src={image} alt={title} />
                <div>
                    <p>{desc}</p>
                    { audio ? <i className="fas fa-audio"></i> : null }
                    <button>Buy for ${price}</button>
                </div>
            </div>
        </div>
    )
}

export default AuthorBook
