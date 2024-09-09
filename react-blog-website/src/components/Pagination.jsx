import React from 'react'


const Pagination = ({onPageChange, currentpage, blogs, pageSize}) => {
    const totalPages = Math.ceil(blogs.length / pageSize);
    const renderPaginationLinks = () => {
        return Array.from({length: totalPages}, (_, i)=> i+1).map((pageNumber) => (
            <li className={pageNumber==currentpage ? "activerPagination" : ""} key={pageNumber}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={() => onPageChange(currentpage-1)} disabled={currentpage === 1}>Previous</button>
        </li>
        <div className='flex gap-1'>{renderPaginationLinks()}</div>
        <li>
            <button onClick={()=> onPageChange(currentpage+1)} disabled={currentpage === totalPages}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination
