import { Blogs } from '../../components/Blogs'
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useLayoutEffect } from 'react'
import NavbarComp from '../../components/Navbar';
import Footer from '../../components/Footer';
import "./AllCategoriesBlogs.css";

const AllCategorisBlogs = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      })

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const RecognizedText = queryParams.get('RecognizedText');
    const data_ref = Blogs.filter((blog) => blog.subcategory === RecognizedText);
    console.log(data_ref);
    return (
        <div>
            <NavbarComp></NavbarComp>
            <h1 id='subcat-head'>Choose your story</h1>
            <Link to='/therapist' id="book-session-click">Click here to book a session with therapist</Link>
            <div id='recommended-blogs'>
            {data_ref.map((item, index) => (
          <div key={index} id='recommended-item'>
          <h2 id='recommended-blogtitle'>{item.blogtitle}</h2>
          <p id='recommended-blogmeta'>{item.blogmeta}</p>
          <a href={item.bloglink} id="recommended-bloglink">Read more</a>
            </div>))}
            </div>
            <div id='margin-gap'></div>
            <Footer></Footer>
        </div>
    );
}

export default AllCategorisBlogs;