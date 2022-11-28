import { Link } from 'react-scroll'

export default function StickyNacBar({ fixed, position }) {
    return <div id={fixed ? 'sticky-tab-container' : 'relative-tab-container'} className={'tab-container ' + (fixed ? 'tab-fixed' : null)}>
        <div className="container">
            <ul className='sticky-tabs'>
                <li className={'item ' + (position === 0 ? 'active' : null)}><Link to="relative-tab-container" spy={true} smooth={true}><button className="tab">Overview</button></Link></li>
                <li className='item'><span className="divider divider-vertical" style={{ 'height': '1em' }}></span></li>
                <li className={'item ' + (position === 1 ? 'active' : null)}><Link to="itinerary" spy={true} smooth={true}><button className="tab">Itinerary</button></Link></li>
                <li className='item'><span className="divider divider-vertical" style={{ 'height': '1em' }}></span></li>
                <li className={'item ' + (position === 2 ? 'active' : null)}><Link to="booking" spy={true} smooth={true}><button className="tab">Booking</button></Link></li>
            </ul>
        </div>
    </div>
}