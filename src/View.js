import React from "react";

const View = ({ currentList, defaultList, handleDelete }) => {
  return (
    <div>
      <div>
        {Object.keys(currentList).length === 0
          ? defaultList.title
          : currentList.done.length === 0 ? '' : '완료됨' + currentList.done.length}
      </div>
      <div>
        {Object.keys(currentList).length === 0
          ? '' 
          : currentList.haveTo.map((list, index) => (
              <ul>
                <li className={`${index}`} onClick={() => handleDelete(list)}>
                  {list}
                </li>
              </ul>
            ))
        }
      </div>
    </div>
  );
};

export default View;
