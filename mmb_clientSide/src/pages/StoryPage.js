import { Link, Navigate } from "react-router-dom";
import { Users } from '../components/Users';
import { useLayoutEffect, useState } from "react";
import Styles from "./StoryPage.module.css"
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'

const StoryPage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const [query, setQuery] = useState([]);
    const setQueryArray = searchText => {
        setQuery(searchText.split(' '))
        console.log('searchText.split()', searchText.split(' '))
    }
    console.log(Users.filter(user => user.name.toLowerCase().includes("bi")));
    return (
        <div >
            <header>
                <NavbarComp></NavbarComp>
            </header>
            <div >
                <div className="story-head">
                    Search student stories by college, name, company, problem and more.
                </div>
                <div id={Styles.box}>
                    <input type="text" id={Styles.button} className='search' placeholder='Search here' onChange={e => setQueryArray(e.target.value)} />
                </div>
                {/* <button id='go-button'><FaSearch /></button></form> */}
                <div>
                    <ul className={Styles.list}>
                        {
                            query.length > 0 ? 
                            Users.filter((user) => query.every((currentValue) => user.name.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.company.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.mode.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.college.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.quote.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.careerProblem.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.careerSolution.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.mentalSolution.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.mentalProblem.toLowerCase().includes(currentValue.toLowerCase()) ||
                                user.tags.toLowerCase().includes(currentValue.toLowerCase()))
                            ).map((user) => (
                                <li className={Styles.listItem}>
                                    <li className={Styles.cardQuote}><i>"{user.quote}"</i></li>
                                    <li className={Styles.cardName}><br />{user.name}</li>
                                    <li className={Styles.cardDesc}>{user.company}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.mode}</li>
                                    <Link to={`/Story/${user.id}`} state={{ index: user.id }} id={Styles.cardButton}>Click Here</Link>
                                </li>
                            )) : (
                                Users.map((user) => (
                                    <li className={Styles.listItem}>
                                        <li className={Styles.cardQuote}><i>"{user.quote}"</i></li>
                                        <li className={Styles.cardName}><br />{user.name}</li>
                                        <li className={Styles.cardDesc}>{user.company}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.mode}</li>
                                        <Link to={`/Story/${user.id}`} state={{ index: user.id }} id={Styles.cardButton}>Click Here</Link>
                                    </li>
                                ))
                            )
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