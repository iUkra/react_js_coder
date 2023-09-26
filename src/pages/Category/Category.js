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

  // Mapeo y guardo solamente las 3 variables que me interesan
  test.forEach((a) => newCatMarca.push({ category: a.category, marca: a.marca }));

  newCatMarca.forEach((x) => {
    if (arr === undefined) {
      // Si el array no existe lo creo por primera vez
      arr = [];
      var obj = {};
      obj[x.category] = [x.marca];
      arr.push(obj);
    } else {
      // Busco en todos los elementos del array nuevo si existe en algunos de sus elementos la categoria
      arr.forEach((b) => {
        // Si ya existe la categoría le agrego la marca
        if (b[x.category] !== undefined) {
          b[x.category].push(x.marca);
          // Si la marca se repite se remueve
          b[x.category] = [...new Set(b[x.category])];
        } else {
          // Si la categoría no existe la agrego
          b[x.category] = [x.marca];
        }
      });
    }
  });

  // Mapeo las categorías que no se repiten y sus marcas
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
