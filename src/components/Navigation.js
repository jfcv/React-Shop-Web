import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return(
    <span className="text-xl">
      <nav>
        <FontAwesomeIcon
          icon= {faBars}
        />
      </nav>
    </span>
  )
}

export default Navigation;
