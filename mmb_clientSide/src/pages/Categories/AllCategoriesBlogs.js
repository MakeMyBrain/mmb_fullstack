import { Blogs } from '../../components/Blogs'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useLayoutEffect } from 'react'

const AllCategorisBlogs = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const RecognizedText = queryParams.get('RecognizedText');
    const data_ref = Blogs.filter((blog) => blog.subcategory === RecognizedText);
    console.log(data_ref);
    return (
        <div>
            Hello
        </div>
    );
}

export default AllCategorisBlogs;