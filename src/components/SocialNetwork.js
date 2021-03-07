import React from 'react'

const SocialNetwork = () => {
    // make social icon mooving in mouse direction 
    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');
        navLinks.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY - 13;
                link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })
        })
    }
    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://www.linkedin.com/in/alexandre-rodrigueza/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
                <a href="https://github.com/revolalex" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
                    <li><i className="fab fa-github"></i></li>
                </a>
                <a href="mailto:revolalex@gmail.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
                    <li><i className="fa fa-envelope"></i></li>
                </a>
            </ul>
        </div>
    )
}
export default SocialNetwork