import React from 'react';
import { Menu } from '../../reducers/Menu';
import { element } from 'prop-types';

interface Props {
    menuList: Array<Menu>
}

class MenuListElement extends React.Component<Props> {

  render() {
    const { menuList } = this.props;
    return (
      <div className='list-group list-group-flush'>
        {menuList.map(element => (
          <a key={'menu-' + element.name} className='list-group-item list-group-item-action' href={element.url} >{element.name}</a>
        ))}
      </div>
    );
  }
}

export default MenuListElement;