import { BrowserRouter as Router, Route } from "react-router-dom";
import { Author, Authors, Book, Books, Forum, HomePage, Login, Logout, RegisterAuthor, SignIn, Verify } from "./paths";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import BooksPage from "../pages/BooksPage";
import AuthorsPage from "../pages/AuthorsPage";
import ForumsPage from "../pages/ForumsPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import AuthorDetails from "../pages/AuthorDetails";
import BookDetails from "../pages/BookDetails";
import VerifyEmail from "../pages/VerifyEmail";
import AuthorRegistration from "../pages/AuthorRegistration";

function RouterConfig() {
  return (
    <div className="container">
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
        <Route path={HomePage} exact component={Home} />
        <Route path={Books} component={BooksPage} />
        <Route path={Book + "/:id"} component={BookDetails} />
        <Route path={Authors} component={AuthorsPage} />
        <Route path={Author + "/:name/:author_id"} component={AuthorDetails} />
        <Route path={Forum} component={ForumsPage} />
        <Route path={SignIn} component={SignUpPage} />
        <Route path={Login} component={LoginPage} />
        <Route path={Verify} component={VerifyEmail} />
        <Route path={RegisterAuthor} component={AuthorRegistration} />
      </Router>
    </div>
  );
}

export default RouterConfig;
