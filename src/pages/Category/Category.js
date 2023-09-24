import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import data from '../../Components/ProductsApi';

const Category = () => {
  const products = data();
  
  if (!products) {
    return null;
  }

  const categories = {};
  
  products.forEach(product => {
    const { category, marca } = product;
    
    if (!categories[category]) {
      categories[category] = [];
    }

    if (!categories[category].includes(marca)) {
      categories[category].push(marca);
    }
  });

  return (
    <div>
      {Object.keys(categories).map((category, index) => (
        <div key={index} style={{ justifyContent: 'center', paddingTop: '10px' }}>
          <Menu style={{ width: '100%' }} vertical>
            <Menu.Header>
              <Link style={{ width: '95%' }} to={`/category/${category}`}>
                {category}
              </Link>
            </Menu.Header>
            <Menu.Menu>
              {categories[category].map((marca, idx) => (
                <Menu.Item key={idx} name={`X${marca}`} />
              ))}
            </Menu.Menu>
          </Menu>
        </div>
      ))}
    </div>
  );
};

export default Category;
