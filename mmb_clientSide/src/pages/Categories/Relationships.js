import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { Blogs } from "../../components/Blogs";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/Navbar";
import SearchBlogFromQuery from "../../searchAlgorithm/search-query";
import "./Categories.css";

const Relationships = () => {
  useLayoutEffect(async () => {
    const def_result = await SearchBlogFromQuery("search query");
    setSearchResults(def_result);
    window.scrollTo(0, 0);
  });

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
        <div
          className="subcategory-items"
          onClick={() => handleClick("Trust issues")}
        >
          Trust issues
        </div>
        <div
          className="subcategory-items"
          onClick={() => handleClick("Breakup")}
        >
          Breakup
        </div>
        <div
          className="subcategory-items"
          onClick={() => handleClick("Power struggles")}
        >
          Power struggles
        </div>
        <div
          className="subcategory-items"
          onClick={() => handleClick("Compatibility with partner")}
        >
          Compatibility with partner
        </div>
        <div
          className="subcategory-items"
          onClick={() => handleClick("Incompatible families")}
        >
          Incompatible families
        </div>
        <div
          className="subcategory-items"
          onClick={() => handleClick("Not available for each other")}
        >
          Not available for each other
        </div>
        <div
          className="subcategory-items"
          onClick={() => handleClick("False expectations")}
        >
          False expectations
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Relationships;
