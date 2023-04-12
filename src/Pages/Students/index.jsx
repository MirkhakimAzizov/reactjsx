import './index.scss'
import img1 from '../../assets/images/card__img.png';
import img2 from '../../assets/images/delete.svg';
import img3 from '../../assets/images/edit.svg';


const studenst = ()=>{
    return(
        <section className="students">
            <div className="container">
                <div className="students__inner">
                    <div className="students__top">
                        <h2 className="students__top-title">Students List</h2>
                        <button className="students__top-add">ADD NEW STUDENT</button>
                    </div>
                    <ul className="students__info">
                        <li className="students__info-item">Name</li>
                        <li className="students__info-item">Email</li>
                        <li className="students__info-item">Phone</li>
                        <li className="students__info-item">Enroll Number</li>
                        <li className="students__info-item">Date of admission</li>
                    </ul>
                    <ul className="students__list">
                        <li className="students__list__card">
                            <img className='students__list__card_img' src={img1} alt="card img" />
                            <tr className='students__list__card-table'>
                                <td className="students__list__card-item">Karthi</td>
                                <td className="students__list__card-item">karthi@gmmail.com</td>
                                <td className="students__list__card-item">7305477760</td>
                                <td className="students__list__card-item">1234567305477760</td>
                                <td className="students__list__card-item">08-Dec, 2021</td>
                            </tr>
                            <div className="students__list__card-btn">
                            <button className="students__list__card_edit">
                                <img src={img3} alt="edit" />
                            </button>
                            <button className="students__list__card_delete">
                                <img src={img2} alt="delete" />
                            </button>
                            </div>
                        </li>
                        <li className="students__list__card">
                            <img className='students__list__card_img' src={img1} alt="card img" />
                            <tr className='students__list__card-table'>
                                <td className="students__list__card-item">Karthi</td>
                                <td className="students__list__card-item">karthi@gmmail.com</td>
                                <td className="students__list__card-item">7305477760</td>
                                <td className="students__list__card-item">1234567305477760</td>
                                <td className="students__list__card-item">08-Dec, 2021</td>
                            </tr>
                            <div className="students__list__card-btn">
                            <button className="students__list__card_edit">
                                <img src={img3} alt="edit" />
                            </button>
                            <button className="students__list__card_delete">
                                <img src={img2} alt="delete" />
                            </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default studenst;