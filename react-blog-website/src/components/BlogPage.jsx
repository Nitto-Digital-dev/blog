import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const[blogs, setBlog]= useState([]);
    const [currentpage, setCurrentPage] = useState(1);
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(()=>{
      async function fetchBlog(params) {
        let url=`http://localhost:5000/blogs?page=${currentpage}&limit=${pageSize}`;

        // filter by category

        if(selectedCategory){
          url +=`&category=${selectedCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setBlog(data);
      }
      fetchBlog();
    },[currentpage, pageSize,selectedCategory])

    // page change button

    const handlePageChange = (pageNumber) => {setCurrentPage(pageNumber);}
    const handleCategoryChange = (catagory) => {
      setSelectedCategory(catagory);
      setCurrentPage(1);
      setActiveCategory(catagory);
    }

  return (
    <div>
      {/* catagory section */}
      <div><CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>

      {/* blogcart section */}
      <div className='flex flex-col lg:flex-row gap-12'>

        {/* blogcart component */}
        <BlogCards blogs={blogs} currentpage={currentpage} selectedCategory={selectedCategory} pageSize={pageSize}/>

      {/* sidebar */}
      <div><SideBar/></div>
      
      </div>
      
      {/* pagination */}
      <div><Pagination onPageChange = {handlePageChange} currentpage={currentpage} blogs={blogs} pageSize={pageSize} /></div>
    </div>
  )
}

export default BlogPage
