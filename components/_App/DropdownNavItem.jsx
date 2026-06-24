export default function DropdownNavItem() {

    const toggleNavItem = () => {
        if (
            document
                .querySelector(".dropdown-menu")
                .classList.contains("dropdown-focus") === true
        ) {
            document
                .querySelector(".dropdown-menu")
                .classList.remove("dropdown-focus");
            document.querySelector(".dropdown-menu").classList.remove("active");
        } else {
            document
                .querySelector(".menu-mobile .dropdown .dropdown-menu")
                .classList.remove("dropdown-focus");
            document.querySelector(".icons-dropdown").classList.remove("active");
            document.querySelector(".dropdown-menu").classList.add("dropdown-focus");
            document.querySelector(".dropdown-menu").classList.add("active");
        }
    }
    return <li className="dropdown">
        <button className="main-menu" onClick={toggleNavItem}>
            <span className="text">Travel tools</span>
            <span className="icons-dropdown">
                <i className="fa fa-angle-down"></i>
            </span>
        </button>
        {/* <ul className="dropdown-menu dropdown-menu-1">
            <li>
                <a href="https://payments.travelsinmongolia.com" className="link-page">
                    online payment
                </a>
            </li>
        </ul> */}
    </li>
}