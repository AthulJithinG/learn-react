import profilePic from './assets/profilepic.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Athul Krishna PS</h2>
            <p className="card-text">Software Programmer with 2 years of professional experience in database management, specializing in PostgreSQL and Microsoft SQL Server. Skilled in designing, optimizing, and maintaining database solutions, with hands-on experience in implementing and managing CI/CD workflows using Azure Pipelines. Adept at collaborating with cross-functional teams to develop reliable, scalable, and efficient software solutions while ensuring data integrity and application performance.</p>
        </div>
    );
}

export default Card