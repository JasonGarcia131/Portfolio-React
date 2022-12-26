import "./Resume.css"
import Header from "../components/Header"
function Resume() {

    return (
        <div>
            <Header />
            <main className="main-wrapper">
                <article className="professional-summary-wrapper">
                    <h2>Professional Summary</h2>
                    <p>
                        5+ years warehouse supervisor experience. Job responsibilities included training, monitoring, and leading teams of 6-15.
                        Environment is very fast paced and agile. Problem solving was a key skill to have in order to execute daily tasks.
                        I've completed a program that exposed me to full stack development technologies like Javascript, Typescript, Express, React, Python, Flask, and Sass.
                        I built single page applications as well as full stack MERN & PERN applications and deployed them through Heroku and AWS. Also, experience with
                        git commands in the terminal.
                    </p>
                </article>
                <div className="article-flex">
                    <div>
                        <article className="experience-article">
                            <h2>Experience</h2>

                            <p>01/2019-current</p>
                            <h3><span style={{fontWeight: "600"}}>Warehouse Supervisor</span> - Deluxity Inc</h3>
                            <p>
                                Oversee and coordinate general warehouse operations which
                                included: Shipping, Receiving, Inventory Management using WMS,
                                and Train Employees.
                            </p>
                        </article>
                        <article className="experience-article">
                            <p>2017-2019</p>
                            <h3><span style={{fontWeight: "600"}}>Warehouse Supervisor</span> - Dolphin International</h3>
                            <p>
                                Managed a team of 15 warehouse employees to meet and improve
                                a set productivity time limit in an Import/Export live fish warehouse.
                                Responsibilities included: Schedule crew, work under pressure in a
                                dynamic environment, dispatch drivers, and meet cargo ship-out
                                deadlines.
                            </p>
                        </article>
                        <article className="experience-article">
                            <p>01/2018-current</p>
                            <h3><span style={{fontWeight: "600"}}>Supplemental Instructor/ Tutor</span> - El Camino College</h3>
                            <p>
                                Lead after-class study sessions at El Camino College. The goal
                                was to create a collaborative learning environment where students were taught how
                                to work as a group to solve problems. Sessions were held for Algebra and
                                occasionally geometry.
                            </p>
                        </article>
                    </div>
                    <aside>
                        <h2>Skills</h2>
                        <h3>Languages</h3>
                        <ul>
                            <li> Javascript </li>
                            <li> Typescript </li>
                            <li> Python </li>
                            <li> C++ </li>
                        </ul>
                        <h3>Frameworks/ Libraries</h3>
                        <ul>
                            <li> React </li>
                            <li> Express </li>
                            <li> Flask </li>
                            <li> Sass  </li>
                        </ul>
                        <h3>Databases</h3>
                        <ul>
                            <li> Mongoose + MongoDb </li>
                            <li> Postgres + PGadmin</li>
                        </ul>
                    </aside>
                </div>

            </main>
        </div>
    )
}

export default Resume