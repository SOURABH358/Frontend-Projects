import React from "react";

function Footer(){
    return <section className="footer__section">
        <p>Created with ❤ by Sourabh Yadav</p>
        <ul className="social__links">
            <li><a target = "blank" href="https://github.com/SOURABH358">GitHub</a></li>
            <li><a target = "blank" href="https://www.linkedin.com/in/sourabh-y-03b89a191/">LinkedIn</a></li>
            <li><a target = "blank" href="https://twitter.com/Sourabh72673499">Twitter</a></li>
        </ul>
        <p>Copyright©2022</p>
    </section>
}

export default React.memo(Footer)