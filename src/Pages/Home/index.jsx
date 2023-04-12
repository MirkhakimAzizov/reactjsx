import './index.scss'
import card1 from '../../assets/images/card1.svg'

const Home = ()=>{
    return(
        <section className="home">
            <div className="container">
                <div className="home__list">
                    <li className="home__card">
                        <img src={card1} alt="card img" />
                        <h3 className="home__card-title">Students</h3>
                        <span className="home__card-number">243</span>
                    </li>
                </div>
            </div>
        </section>
    )
}

export default Home