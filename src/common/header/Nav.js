import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ canToggle }) => {
  const { pathname } = useLocation();
    
  const turnOff = (el, others) => {
    if(el) {
      for(let i = 0; i < el.length; i++) {
        if (!el[i].children[0].classList.contains("active")) {
          el[i].children[0].classList.add("active");
          for(let i = 0; i < others.length; i++) {
            for(let j = 0; j < others[i].length; j++) {
              others[i][j].children[0].classList.remove("active");
            }
          }
        }
      }
    }
  }

  const toggleDropdown = (e) => {
    let elementsWithDropdown = document.querySelectorAll( '.popup-mobile-menu .has-dropdown' );
    let val = e.target.parentElement.parentElement.classList[e.target.parentElement.parentElement.classList.length -1];
    let idx;
    for(let i = 0; i < elementsWithDropdown.length; i++) {
      if(elementsWithDropdown[i].classList.contains(val)) {
        idx = i;
      }
    }
    elementsWithDropdown[idx].children[0].children[1].click();
  }

  useEffect(() => {
    const Home = document.getElementsByClassName("Home");
    const Programs = document.getElementsByClassName("Programs");
    const Courses = document.getElementsByClassName("Courses");
    const Careers = document.getElementsByClassName("Careers");
    const Employer = document.getElementsByClassName("Employer");
    const Research = document.getElementsByClassName("Research");
    const Events = document.getElementsByClassName("Events");
    const Insights = document.getElementsByClassName("Insights");
    const About = document.getElementsByClassName("About");
    const menu = [Home, Programs, Courses, Careers, Employer, Research, Events, Insights, About];
    let idx;
    let newMenu = menu.slice();
    let inactiveMenu;
    if(pathname.includes("programs")) {
      idx = menu.indexOf(Programs);
      inactiveMenu = newMenu.splice(idx, 1);
    } else if(pathname.includes("courses")) {
      idx = menu.indexOf(Courses);
      inactiveMenu = newMenu.splice(idx, 1);
    } else if(pathname.includes("careers")) {
      idx = menu.indexOf(Careers);
      inactiveMenu = newMenu.splice(idx, 1);
    } else if(pathname.includes("employer")) {
      idx = menu.indexOf(Employer);
      inactiveMenu = newMenu.splice(idx, 1);
    } else if(pathname.includes("research")) {
      idx = menu.indexOf(Research);
      inactiveMenu = newMenu.splice(idx, 1);
    } else if(pathname.includes("events")) {
      idx = menu.indexOf(Events);
      inactiveMenu = newMenu.splice(idx, 1);
    } else if(pathname.includes("insights")) {
      idx = menu.indexOf(Insights);
      inactiveMenu = newMenu.splice(idx, 1);
    } else if(pathname === "/") {
      idx = menu.indexOf(Home);
      inactiveMenu = newMenu.splice(idx, 1);
    }
    // console.log(pathname);
    turnOff(menu[idx], newMenu);
	}, [ pathname ]);

  return (
    <ul className="mainmenu">
      <li className="Home">
        <Link to="/">Home</Link>
      </li>

      <li className="has-dropdown Programs">
        <button onClick={toggleDropdown}>Programs</button>
        <ul className="submenu">
          <li><Link to="/programs/datatalent">DataTalent</Link></li>
          <li><Link to="/programs/skillsboost">SkillsBoost</Link></li>
          <li><Link to="/programs/aiminds">AiMinds</Link></li>
        </ul>
      </li>

      <li className="has-dropdown Courses">
        <Link to="/courses">Courses</Link>
        <ul className="submenu">
          <li><Link to="/courses/data-analytics">Data Analytics</Link></li>
          <li><Link to="/courses/machine-learning">Machine Learning</Link></li>
          <li><Link to="/courses/deep-learning">Deep Learning</Link></li>
          <li><Link to="/courses/coding">Coding</Link></li>
          <li><Link to="/courses/design">Design</Link></li>
        </ul>
      </li>

      <li className="has-dropdown Careers">
        <button onClick={toggleDropdown}>Careers</button>
        <ul className="submenu">
          <li><Link to="/careers/work-integrated-learning">WIL</Link></li>
          <li><Link to="/careers/jobs">Jobs</Link></li>
        </ul>
      </li>

      <li className="has-dropdown Research">
        <Link to="/research">Research</Link>
        <ul className="submenu">
          <li><Link to="/research/clean-technology">Clean Technology</Link></li>
          <li><Link to="/research/advanced-manufacturing">Advanced Manufacturing</Link></li>
          <li><Link to="/research/iot-5g-and-cybersecurity">IoT, 5G & Cybersecurity</Link></li>
          <li><Link to="/research/business-intelligence">Business Intelligence</Link></li>
          <li><Link to="/research/fintech">FinTech</Link></li>
          <li><Link to="/research/healthtech">HealthTech</Link></li>
          <li><Link to="/research/agtech">AgTech</Link></li>
        </ul>
      </li>

      <li className="has-dropdown Insights">
        <button onClick={toggleDropdown}>Insights</button>
        <ul className="submenu">
          <li><Link to="/insights/spotlight">Spotlight</Link></li>
          <li><a href="https://medium.com/m2mtechconnect">Blogs</a></li>
        </ul>
      </li>
    </ul>
  )
}
export default Nav;
