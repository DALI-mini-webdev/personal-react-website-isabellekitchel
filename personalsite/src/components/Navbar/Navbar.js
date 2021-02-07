import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import'./Navbar.css'
import { Button} from "../Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    callbackfunction = () => {
        this.setState({ clicked: this.state.clicked})
    }

    allButton = this.state(
        <h2 className="white-text" id = "pink-background">Phone Number is 610-213-2922</h2>
    )

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.callbackfunction}> Contact me</Button>
            </nav>
        )
    }
}

export default Navbar