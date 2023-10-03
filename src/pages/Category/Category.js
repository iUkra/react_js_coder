import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import data from "../../Components/ProductsApi";

const Category = () => {
  const test = data();

  if (test === undefined) {
    return null;
  }

  const newCatMarca = [];
  let arr;

  test.forEach((a) => newCatMarca.push({ category: a.category, marca: a.marca }));

  newCatMarca.forEach((x) => {
    if (arr === undefined) {
      arr = [];
      var obj = {};
      obj[x.category] = [x.marca];
      arr.push(obj);
    } else {
      arr.forEach((b) => {
        if (b[x.category] !== undefined) {
          b[x.category].push(x.marca);
          b[x.category] = [...new Set(b[x.category])];
        } else {
          b[x.category] = [x.marca];
        }
      });
    }
  });

  const showCategory = arr.map((b) => {
    return (
      <div key={Object.keys(b)} style={{ justifyContent: "center", paddingTop: "10px" }}>
        <Menu style={{ width: "100%" }} vertical>
          {Object.keys(b).map((index) => {
            return (
              <div key={index}>
                {index !== undefined ? (
                  <Menu.Header>
                    <Link style={{ width: "95%" }} to={`/category/${index}`}>
                      {index}
                    </Link>
                  </Menu.Header>
                ) : null}
                <Menu.Menu>
                  {b[index].map((x) => {
                    return (
                      <div key={x}>
                        <Menu.Item name={`X${x}`} />
                      </div>
                    );
                  })}
                </Menu.Menu>
              </div>
            );
          })}
        </Menu>
      </div>
    );
  });

  return <div>{showCategory}</div>;
};

export default Category;