import { useState, useEffect } from "react";
import * as Scroll from 'react-scroll';

export default function BackTop() {

    const scroll = Scroll.animateScroll;

    const scrollToTop = function () {
        scroll.scrollToTop();
    }
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", shouldShow);
        return () => window.removeEventListener("scroll", shouldShow);
    }, []);
    const shouldShow = () => {
        try {
            let top = window.pageYOffset || document.documentElement.scrollTop;
            let temp = window.innerHeight;
            if (top > temp) {
                setShow(true);
            } else {
                setShow(false);
            }
        } catch (e) { }
    }
    return <div id="back-top">
        <button onClick={scrollToTop} className={'link ' + (show ? 'show-btn' : null)}>
            <i className="fa fa-angle-double-up"></i>
        </button>
    </div>
}