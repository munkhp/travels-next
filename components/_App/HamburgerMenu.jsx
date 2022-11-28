export default function BackTop() {
    const toggleMenu = () => {
        document.body.classList.toggle("show-nav")
        document.querySelector('.hamburger-menu-wrapper').classList.toggle("open");
    }
    return <button className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-menu-wrapper">
            <div className="icons"></div>
        </div>
    </button>
}