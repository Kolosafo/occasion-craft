import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main>
        <div>
          <p>404</p>
          <h1>Page not found</h1>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
          <div>
            <a href="#">Go back home</a>
            <Link to="/">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
