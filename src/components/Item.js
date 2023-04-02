import React from "react";

export default function Item({
  data,
  handleDelete,
  handleEdit,
  handleIsCoplate,
}) {
  return (
    <>
      {" "}
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className="d-flex justify-content-between my-3 shadow p-3 rounded"
          >
            <input
              type="checkbox"
              checked={item.isComplete}
              onClick={() => handleIsCoplate(item.id)}
            />{" "}
            <h3 className={item.isComplete ? "text-danger" : ""}>
              {" "}
              {item.text}{" "}
            </h3>{" "}
            {/* <div>
                                      <h2> {item.time} </h2>{" "}
                                    </div>{" "} */}{" "}
            <div>
              <button
                className="btn btn-success"
                onClick={() => handleEdit(item.id)}
              >
                {" "}
                Edit{" "}
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                {" "}
                Delete{" "}
              </button>{" "}
            </div>{" "}
          </li>
        );
      })}{" "}
    </>
  );
}
