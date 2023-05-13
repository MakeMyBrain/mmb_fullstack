import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Blogs } from "../../components/Blogs";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/Navbar";
import SearchBlogFromQuery from "../../searchAlgorithm/search-query";
import "./Categories.css";

const Relationships = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  // const def_result = SearchBlogFromQuery("search query");
  // console.log(def_result);
  const [searchResults, setSearchResults] = useState([]);
  const handleClick = (subcategory) => {
    const results = Blogs.filter((blog) => blog.subcategory === subcategory);
    setSearchResults(results);
    console.log(results);
  };
  return (
    <div id="subcategory-container">
      <NavbarComp></NavbarComp>
      <h1 id="subcategory-head">Relationships</h1>
      <div id="subcategory-subhead">
        Select the category that relates to your problem.
      </div>
      <div id="subcategory-list">
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Trust issues')}`}><div className='subcategory-items' >Trust issues</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Breakup')}`}><div className='subcategory-items' >Breakup</div></Link>  
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Power struggles')}`}><div className='subcategory-items' >Power struggles</div></Link>  
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Compatibility with partner')}`}><div className='subcategory-items' >Compatibility with partner</div></Link>  
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Incompatible families')}`}><div className='subcategory-items' >Incompatible families</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Not available for each other')}`}><div className='subcategory-items' >Not available for each other</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('False expectations')}`}><div className='subcategory-items' >False expectations</div></Link>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Relationships;

