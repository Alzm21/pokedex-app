import { useState } from 'react';
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";
import './styles/pagination.css'

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginationClick = (pageNumber) => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    setActivePage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <div className='pagination_container'>
      <button
        onClick={() => handlePaginationClick(activePage - 1)}
        disabled={activePage === 1}
      >
        <IoIosArrowBack />
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          className={number === activePage ? 'active_page' : ''} //Thernary condition to identify the active page
          onClick={() => handlePaginationClick(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handlePaginationClick(activePage + 1)}
        disabled={activePage === pageNumbers.length}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;