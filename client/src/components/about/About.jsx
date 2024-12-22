import './about.scss';

const About = () => {
    return (
        <>
            <div className='about' id='about'>

                <div className="image">
                    <div>
                        <img src="./Zakat3.png" alt="" />
                    </div>
                </div>

                <div className="text">
                    <div className="title">
                        <h1>about <span>Siraj Charity Foundation</span></h1>
                    </div>
                    <p>
                        At Siraj Charity Foundation,
                        we are committed to creating a lasting impact by supporting those in need.
                        Through your generosity,
                        we work tirelessly to empower communities and bring about meaningful change.
                    </p>
                    <p>
                        Our mission is to foster hope, 
                        sustainability, and growth by providing essential resources to underserved areas. 
                        Every contribution, no matter how small, 
                        makes a significant difference in the lives of those who need it most.
                    </p>
                    <div className="stats">

                        {/* <div className="st">
                            <span>$12K+</span>
                            <p>Raised</p>
                        </div>
                        
                        <div className="st">
                            <span>16+</span>
                            <p>Active Partners</p>
                        </div>
                       
                        <div className="st">
                            <span>20+</span>
                            <p>Years of donations</p>
                        </div> */}

                    </div>
                </div>

            </div>
        </>
    )
}

export default About