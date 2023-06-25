/* eslint-disable react/prop-types */
const Pagination = ({
  collectionArray,
  selectPageHandler,
  page,
  numberOfElementPerPage,
}) => {
  console.log(collectionArray);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <span
              className="page-link"
              onClick={() => selectPageHandler(page - 1)}
            >
              Previous
            </span>
          </li>
          {[
            ...Array(
              Math.ceil(collectionArray.length) / numberOfElementPerPage
            ),
          ]?.map((_, i) => {
            return (
              <li
                key={i}
                onClick={() => selectPageHandler(i + 1)}
                className="page-item"
              >
                <a className="page-link" href="#">
                  {i + 1}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <span
              className="page-link"
              onClick={() => selectPageHandler(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
