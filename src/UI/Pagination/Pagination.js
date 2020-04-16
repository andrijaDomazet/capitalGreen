import React from "react";
import "./Pagination.scss";

export default function Pagination(props) {
  return (
    <div className="pagination" style={{ display: `${props.prikaz}` }}>
      {Array.from({ length: props.numberOfPages }, (i, v) => v + 1).map(
        (page, index) => {
          return (
            <div
              key={index}
              className={props.pageNum === page ? "" : "open"}
              onClick={() => {
                props.clicked(page);
              }}
            >
              {page}
            </div>
          );
        }
      )}
    </div>
  );
}
