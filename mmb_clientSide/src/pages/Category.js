import React, { useEffect, useLayoutEffect } from 'react'
import Relationships from '../media/Relationship.png'
import Friends from '../media/Friends.png'
import Colleagues from '../media/Colleagues.png'
import Parents from '../media/Parents.png'
import Parenting from '../media/Parenting.png'
import Marriage from '../media/Marriage.png'
import Loneliness from '../media/Loneliness.png'
import Lifestyle from '../media/Lifestyle.png'
import { Link } from 'react-router-dom'
import './Category.css'
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import SearchBlogFromQuery from '../searchAlgorithm/search-query'

const Category = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  useEffect(() => {
    document.title = "Category of mental health issues | MakeMyBrain"
  }, [])
  const queryParams = new URLSearchParams(location.search);
  const RecognizedText = queryParams.get('RecognizedText');
  const data_ref = SearchBlogFromQuery(RecognizedText).slice(0, 4);
  console.log(data_ref);
  return (
    <div>
      <NavbarComp></NavbarComp>
      <div id='category-container'>
        <h1 id='category-head'>Recommended Stories</h1>
        <Link to='/therapist' id="book-session-click">Click here to book session with therapist</Link>
        <div id='recommended-blogs'>
        {data_ref.map((item, index) => (
          <div key={index} id='recommended-item'>
          <h2 id='recommended-blogtitle'>{item.blogtitle}</h2>
          <p id='recommended-blogmeta'>{item.blogmeta}</p>
          <a href={item.bloglink} id="recommended-bloglink">Read more</a>
        </div>))}
        </div>
        <div id='intermediate-text'>Could not find a solution? Check below...</div>
        <h1 id='category-head'>Which of these is causing you problems?</h1>
        <div id='category-cover'>
          <div id='category-list'>
            <Link className='category-items' to='/category/relationships' ><img className='category-image' src={Relationships} placeholder='Relationships' /></Link>
            <Link className='category-items' to='/category/parents' ><img className='category-image' src={Parents} placeholder='Parents' /></Link>
            <Link className='category-items' to='/category/colleagues' ><img className='category-image' src={Colleagues} placeholder='Colleagues' /></Link>
            <Link className='category-items' to='/category/parenting' ><img className='category-image' src={Parenting} placeholder='Parenting' /></Link>
            <Link className='category-items' to='/category/friends' ><img className='category-image' src={Friends} placeholder='Friends' /></Link>
            <Link className='category-items' to='/category/marriage' ><img className='category-image' src={Marriage} placeholder='Marriage' /></Link>
            <Link className='category-items' to='/category/loneliness' ><img className='category-image' src={Loneliness} placeholder='Loneliness' /></Link>
            <Link className='category-items' to='/category/lifestyle' ><img className='category-image' src={Lifestyle} placeholder='Lifestyle' /></Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  
  )
}

export default Category