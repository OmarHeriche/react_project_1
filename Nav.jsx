import { Link } from "react-router-dom";

export default () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <Link className="navbar-brand" to="/groupedMembers">
                    Grouped
                </Link>
            </div>
            
        </nav>
    </>
);
