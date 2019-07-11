import React from 'react';

export const paginationButton = (pageCount, setPage, currentPage) => {
  const pageButtons = [];
  //Utils for pagination
  for (let i = 1; i <= pageCount; i++) {
    pageButtons.push(
      <button
        className={currentPage === i ? 'btn btn-info active' : 'btn btn-info'}
        key={i}
        onClick={() => setPage(i)}
      >
        {i}
      </button>
    );
  }
  return pageButtons;
};
