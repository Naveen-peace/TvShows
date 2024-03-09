import { Icon } from "@iconify/react"
import icon from "../../assets/icon/icon.svg"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="nav-head">
            <div className="container">
                <div className="header">
                    <Link to={'/TvShows'}>
                        <img src={icon} alt="justicon" />
                    </Link>
                    <div className="header-nav">
                        <Link to={'/TvShows'}>
                            <Icon icon="ic:sharp-home" width="24" height="24" />
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
