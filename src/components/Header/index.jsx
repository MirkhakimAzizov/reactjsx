import './index.scss';

import img1 from '../../assets/images/Vector.svg';
import img2 from '../../assets/images/notif.svg';

const Header = ()=>{
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                <button className="header__back">
                    <img src={img1} alt="back img" />
                </button>
                <form action="#" className="header__form">
                    <input className='header__form-search' type="search" placeholder="Search..." />
                    <button className="header__notif">
                        <img src={img2} alt="notification img" />
                    </button>
                </form>
                </div>
            </div>
        </header>
    )
}

export default Header;