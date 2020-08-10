import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {

  let menu, menuMask

  const [showMenu, setShowMenu] = React.useState(false)

  if(showMenu) {
    menu = <div className="fixed bg-white left-0 top-0 shadow h-full z-50 w-4/5"> The Menu </div>
    menuMask = 
    <div 
    className=" bg-black-t-50 fixed left-0 top-0 w-full h-full z-50"
    onClick = {() => setShowMenu(false)}
    ></div>
  }

  return(
    <nav className="text-xl">
      <span>
        <FontAwesomeIcon
          icon= {faBars}
          onClick = {() => setShowMenu(!showMenu)}
        />
      </span>

      { menuMask }

      { menu }

    </nav>

    
    
  )
}

export default Navigation;
