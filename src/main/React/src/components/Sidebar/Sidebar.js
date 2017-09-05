import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard </NavLink>
            </li>
            <li className={this.activeRoute("/users")}>
               <NavLink to={'/users'} className="nav-link" activeClassName="active">
                  <i className="icon-people"></i> Users</NavLink>

            </li>
            <li className={this.activeRoute("/consultationProd")}>
              <NavLink to={'/consultationProd'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Consult Production</NavLink>

            </li>
            <li className={this.activeRoute("/submitEstimate")}>
              <NavLink to={'/submitEstimate'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Submit Estimate</NavLink>

            </li>
            <li className={this.activeRoute("/exploitation")}>
              <NavLink to={'/exploitation'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Exploitation</NavLink>

            </li>
            <li className={this.activeRoute("/product")}>
              <NavLink to={'/product'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Product</NavLink>

            </li>
            <li className={this.activeRoute("/compaign")}>
              <NavLink to={'/compaign'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Compaign</NavLink>

            </li>
            <li className={this.activeRoute("/consultation")}>
                          <NavLink to={'/consultation'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Consultation</NavLink>

                        </li>
            <li className={this.activeRoute("/manageProductions")}>
                          <NavLink to={'/manageProductions'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Manage Productions</NavLink>

                        </li>


          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
