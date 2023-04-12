import './index.scss'
import img from '../../assets/images/sidebar__img.png';
import img1 from '../../assets/images/logout.svg';

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="sidebar__info">
                <h1 className="sidebar__info-title">CRUD OPERATIONS</h1>
                <img className="sidebar__info-img" src={img} alt="sidebar img" />
                <h2 className="sidebar__info-subtitle">Karthi Madesh</h2>
                <span className="sidebar__info-type">Admin</span>
            </div>
            <ul className="sidebar__nav">
                <li className="sidebar__nav__item">Home</li>
                <li className="sidebar__nav__item">Course</li>
                <li className="sidebar__nav__item">Students</li>
                <li className="sidebar__nav__item">Payment</li>
                <li className="sidebar__nav__item">Report</li>
                <li className="sidebar__nav__item">Settings</li>
            </ul>
            <button className="sidebar__logout">Logout
                <img src={img1} alt="logout" />
            </button>
        </div>
    )
}

export default Sidebar;