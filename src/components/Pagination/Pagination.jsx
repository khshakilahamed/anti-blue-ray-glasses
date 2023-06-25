/* eslint-disable react/prop-types */
const Pagination = ({
  collectionArray,
  selectPageHandler,
  page,
  numberOfElementPerPage,
}) => {
  console.log(collectionArray);
  return (
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
        {[...Array(Math.ceil(orders?.length / numberOfElementPerPage))]?.map(
          (_, i) => {
            return (
              <li key={i} className="page-item">
                <span
                  onClick={() => selectPageHandler(i + 1)}
                  className="page-link"
                >
                  {i + 1}
                </span>
              </li>
            );
          }
        )}

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
  );
};

export default Pagination;
