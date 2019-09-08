import React from 'react';
import { Category, Categories } from '../../reducers/Category';
import { element } from 'prop-types';

interface Props {
    categories: Categories
}

class CategoriesElement extends React.Component<Props> {

  render() {
    const { categories } = this.props.categories;
    return (
      <div className='list-group list-group-flush'>
        {categories.map(element => (
          <a key={'menu-' + element.name} className='list-group-item list-group-item-action' href={element.url} >
            {element.name}
          </a>
        ))}
      </div>
    );
  }
}

export default CategoriesElement;