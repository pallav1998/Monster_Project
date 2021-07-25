import styles from './home.module.css'


export function Findjobs() {
    return (
        <>
            <div>
                        <div className={styles.find_jobs}>
                            <h2>Find Job Vacancies by</h2>
                            <div>
                                <div>
                                    <button>Skills</button>
                                    <button>Location</button>
                                    <button>Industry</button>
                                    <button>Functions</button>
                                    <button>Roles</button>
                                    <button>Company</button>
                                </div>
                                <div>
                                    <div>
                                        <ul>
                                            <li><a href="#a">Software Engineering</a></li>
                                            <li><a href="#a">Java</a></li>
                                            <li><a href="#a">Javascript </a></li>
                                            <li><a href="#a">Operations</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                         <ul>
                                            <li><a href="#a">Sales</a></li>
                                            <li><a href="#a">Sql</a></li>
                                            <li><a href="#a">Bpo </a></li>
                                            <li><a href="#a">Python</a></li>
                                        </ul>
                                    </div>   
                                    <div>
                                         <ul>
                                            <li><a href="#a">Customer Service</a></li>
                                            <li><a href="#a">Voice Process</a></li>
                                            <li><a href="#a">Customer Care </a></li>
                                            <li><a href="#a">Customer Support</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div><a href="#a">Browse All Jobs by Skills{">"}</a></div>
                            </div>
                        </div>
                    </div>
        </>
    )
}