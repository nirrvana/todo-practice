import React from "react";

const View = ({ currentList, defaultList, handleDelete }) => {
  return (
    <div>
      <div>
        {Object.keys(currentList.done).length === 0
          ? '완료됨:' + currentList.done.length
          : defaultList.title}
      </div>
      <div>
        {Object.keys(currentList.haveTo).length === 0
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
