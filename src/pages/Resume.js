import "./Resume.css";
import Header from "../components/Header";

function Resume() {
    return (
        <div>
            <Header />
            <main className="main-wrapper">
                <article className="professional-summary-wrapper">
                    <h1>Professional Summary</h1>
                    <p>
                        Junior software developer with experience in developing and designing web applications using HTML,
                        CSS, JavaScript, Angular, Node.js, and React. Adept at developing and deploying complex backend
                        systems, web services and databases. 5+ years in warehouse management strengthened team leader
                        and collaborating skills.
                    </p>
                </article>
                <div className="article-flex">
                    <div>
                        <article className="experience-article">
                            <h2>Education</h2>
                            <p>Software Development- California State University Long Beach</p>

                            <h2>Experience</h2>

                            <p>01/2019-current</p>
                            <h3><span style={{ fontWeight: "600" }}>Warehouse Supervisor</span> - Deluxity Inc</h3>
                            <p>
                                Oversee and coordinate general warehouse operations which
                                included: Shipping, Receiving, Inventory Management using WMS,
                                and Train Employees.
                            </p>
                        </article>
                        <article className="experience-article">
                            <p>2017-2019</p>
                            <h3><span style={{ fontWeight: "600" }}>Warehouse Supervisor</span> - Dolphin International</h3>
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
                            <h3><span style={{ fontWeight: "600" }}>Supplemental Instructor/ Tutor</span> - El Camino College</h3>
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
    );
}

export default Resume;