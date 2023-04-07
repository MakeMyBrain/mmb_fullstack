import { Link, Navigate } from "react-router-dom";
import { Users } from '../components/Users';
import { useState } from "react";
import Styles from "./StoryPage.module.css"
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'

const StoryPage = () => {
    const [query, setQuery] = useState("");
    console.log(Users.filter(user => user.name.toLowerCase().includes("bi")));
    return (
        <div >
            <header>
                <NavbarComp></NavbarComp>
            </header>
            <div >
                <div id={Styles.box}>
                    <input type="text" id={Styles.button} className='search' placeholder='Search here' onChange={e => setQuery(e.target.value)} />
                </div>
                {/* <button id='go-button'><FaSearch /></button></form> */}
                <div>
                    <ul className={Styles.list}>

                        {

                            Users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()) ||
                                user.company.toLowerCase().includes(query.toLowerCase()) ||
                                user.mode.toLowerCase().includes(query.toLowerCase()) ||
                                user.college.toLowerCase().includes(query.toLowerCase()) ||
                                user.quote.toLowerCase().includes(query.toLowerCase()) ||
                                user.careerProblem.toLowerCase().includes(query.toLowerCase()) ||
                                user.careerSolution.toLowerCase().includes(query.toLowerCase()) ||
                                user.mentalSolution.toLowerCase().includes(query.toLowerCase()) ||
                                user.mentalProblem.toLowerCase().includes(query.toLowerCase())
                            ).map((user) => (
                                <li className={Styles.listItem}>
                                    <li className={Styles.cardQuote}><i>"{user.quote}"</i></li>
                                    <li className={Styles.cardName}><br />{user.name}</li>
                                    <li className={Styles.cardDesc}>{user.company}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.mode}</li>
                                    <Link to='/Story' state={{ index: user.id }} id={Styles.cardButton}>Click Here</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default StoryPage;