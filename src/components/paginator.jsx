import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pagination = () => {
  const persons = useSelector((state) => state.persons);
  const [currentPage, setCurrentPage] = useState(1);
  const [personsPerPage] = useState(5);

  const lastPersonIndex = currentPage * personsPerPage;
  const firstPersonIndex = lastPersonIndex - personsPerPage;
  const currentPerson = persons.slice(firstPersonIndex, lastPersonIndex);

  const pageNumbers = [];

  for (let i = 1; i < currentPerson / personsPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div className="page_item" key={number}>
            <p>{number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
