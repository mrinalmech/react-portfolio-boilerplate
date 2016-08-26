import React, {Component} from 'react'

export default class Footer extends Component {
    render() {

        return (
            <section id="footer">
                <div className="container">
                    <div className="desktop-3 columns">
                        <p>Copyright &copy;
                            <a href="http://www.mrinalmech.com" className="italic">Mrinal Mech</a>
                        </p>
                    </div>

                    <div className="desktop-9 columns">
                        <ul id="social">
                            <li>
                                <a href="https://www.facebook.com/mrinal.mech.98" className="hoverMe" target="Facebook">
                                    <img src="assets/images/social/facebook.png" alt="" title="Facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/mrinalmech" className="hoverMe" target="Twitter">
                                    <img src="assets/images/social/twitter.png" alt="" title="Twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/mrinalmech" className="hoverMe" target="Github">
                                    <img src="assets/images/social/github.png" alt="" title="Github"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://in.linkedin.com/in/mrinal-mech-25a204101" className="hoverMe" target="LinkedIn">
                                    <img src="assets/images/social/linkedin.png" alt="" title="LinkedIn"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="clear"></div>
                </div>
            </section>
        );
    }
}
