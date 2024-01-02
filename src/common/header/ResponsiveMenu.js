import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const ResponsiveMenu = ( { show, onClose, showSearch, onSearch } ) => {
  const [canToggle] = useState(true); 

  useEffect(() => {
    var elements = document.querySelectorAll( '.popup-mobile-menu .has-dropdown' );
    for( var i in elements ) {
      if( elements.hasOwnProperty( i ) ) {
        if(!elements[i].querySelector("div")) {
          const btns = document.createElement("div");
          btns.classList.add("d-flex", "justify-content-between");
          const anchor = elements[i].firstChild;
          anchor.classList.add("flex-grow-1");
          btns.appendChild(anchor);
          const expandBtn = document.createElement("button");
          expandBtn.classList.add("responsive-menu-expand-btn");
          const expandBtnText = document.createTextNode("+");
          const shrinkBtnText = document.createTextNode("-");
          expandBtn.appendChild(expandBtnText);
          btns.appendChild(expandBtn);
          elements[i].appendChild(btns);
          elements[i].prepend(btns);
          elements[i].children[0].children[1].onclick = function() {
            this.parentElement.parentElement.querySelector( '.submenu').classList.toggle( 'active' );
            if(this.parentElement.parentElement.querySelector( '.submenu').classList.contains( 'active' )) {
              this.appendChild(shrinkBtnText);
              this.removeChild(expandBtnText);
            } else {
              this.removeChild(shrinkBtnText);
              this.appendChild(expandBtnText);
            }
            this.classList.toggle( 'open' );
          }
          // Expanding first dropdown menu
          if(i === "0") {
            elements[i].children[0].children[1].click();
          }
          // console.log(elements[0].children[0].children[1]);
          // elements[0].children[0].children[1].click();
        }
      }
    }
  }, [])

  return (
    <>
      <div className={ `popup-mobile-menu ${ show ? 'active': ''}` }>
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link to='/'>
                <img src={process.env.PUBLIC_URL+"/M2M_Logo_v2.png"} alt="Main Logo" />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button" onClick={ onClose }>
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>
          <Nav canToggle={canToggle} />
        </div>
      </div>
    </>
  )
}

export default ResponsiveMenu;