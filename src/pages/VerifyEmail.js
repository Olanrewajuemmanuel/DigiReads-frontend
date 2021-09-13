import { useHistory } from "react-router"
import { HomePage } from "../routes/paths"

export default function VerifyEmail() {
    const history = useHistory()
    return (
        <div>
            Verify email
            <p style={{ color: "dodgerblue" }} onClick={() => history.push(HomePage)}>Skip</p>
        </div>
    )
}
