// import React, { useState, useEffect } from 'react';
// import styles from "./Assignment.module.css";

// export default function Assignment() {
//     const [assignmentDetails, setAssignmentDetails] = useState({});
//     const [assignmentCandidates, setAssignmentCandidates] = useState([]);

//     useEffect(() => {
//         fetch('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details')
//             .then(res => res.json())
//             .then(json => {
//                 setAssignmentDetails(json);
//             })
//             .catch(err => console.log(err.message));
//     }, []);

//     useEffect(() => {
//         fetch('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0')
//             .then(res => res.json())
//             .then(json => {
//                 setAssignmentCandidates(json);
//             })
//             .catch(err => console.log(err.message));
//     }, []);

//     return (
//         <div className={styles.main}>
//             <p>Pages/ Assignments</p>
//             <h3>{assignmentDetails.title}</h3>
//             <div className={styles.box}>
//                 <div className={styles.one}>
//                     <h3>{assignmentDetails.title}</h3>
//                     <h3 className={styles.green}>{assignmentDetails.status}</h3>
//                 </div>
//                 <div className={styles.one}>
//                     <h5>Assignment Link</h5>
//                     <h5 className={styles.link}>{assignmentDetails.link}</h5>
//                 </div>
//                 <div className={styles.one}>
//                     <div><strong>Assignment hours</strong></div>
//                     <div>{assignmentDetails.duration_in_seconds}</div>
//                 </div>
//                 <div className={styles.one}>
//                     <h5><strong>Assignments Ends in</strong></h5>
//                     <h5>{assignmentDetails.ends_at}</h5>
//                 </div>
//                 <div className={styles.btns}>
//                     <button>To Review</button>
//                     <button>SHORTLISTED</button>
//                 </div>
                
//                  <div className={styles.candidate}>
//                    <h4>Candidate</h4>
//                    <h4>Score</h4>
//                  </div>
//                     {assignmentCandidates.map((candidate, index) => (
//                 <div className={styles.user}>
//                    <div className={styles.imgsec}>
//                    <img src="https://images.pexels.com/photos/17022636/pexels-photo-17022636/free-photo-of-redhead-with-freckles-wearing-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
//                     <div>
//                        <strong> {candidate.full_name} </strong><br />
//                         {candidate.email}
//                     </div>
//                    </div>
//                    <h2>{candidate.score}%</h2>
//                 </div>
              
//                     ))}
               
//             </div>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import styles from "./Assignment.module.css";

export default function Assignment() {
    const [assignmentDetails, setAssignmentDetails] = useState({});
    const [assignmentCandidates, setAssignmentCandidates] = useState([]);

    useEffect(() => {
        fetch('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details')
            .then(res => res.json())
            .then(json => {
                setAssignmentDetails(json);
            })
            .catch(err => console.log(err.message));
    }, []);

    useEffect(() => {
        fetch('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0')
            .then(res => res.json())
            .then(json => {
                setAssignmentCandidates(json);
            })
            .catch(err => console.log(err.message));
    }, []);

    // Function to assign CSS class based on score
    const getScoreColor = (score) => {
        return score < 50 ? styles.red : styles.green;
    };

    return (
        <div className={styles.main}>
            <p>Pages/ Assignments</p>
            <h3>{assignmentDetails.title}</h3>
            <div className={styles.box}>
                <div className={styles.one}>
                    <h3>{assignmentDetails.title}</h3>
                    <h3 className={styles.green}>{assignmentDetails.status} <i class="fa-solid fa-pen-to-square"></i></h3>
                </div>
                <div className={styles.one}>
                    <h5>Assignment Link</h5>
                    <h5 className={styles.link}>{assignmentDetails.link}</h5>
                </div>
                <div className={styles.one}>
                    <div><strong>Assignment hours</strong></div>
                    <div>{assignmentDetails.duration_in_seconds}</div>
                </div>
                <div className={styles.one}>
                    <h5><strong>Assignments Ends in</strong></h5>
                    <h5>{assignmentDetails.ends_at}</h5>
                </div>
                <div className={styles.btns}>
                    <button>To Review</button>
                    <button>SHORTLISTED</button>
                </div>
                <div className={styles.candidate}>
                    <h4>Candidate</h4>
                    <h4>Score</h4>
                </div>
                {assignmentCandidates.map((candidate, index) => (
                    <div className={styles.user}>
                        <div className={styles.imgsec}>
                            <img src="https://images.pexels.com/photos/17022636/pexels-photo-17022636/free-photo-of-redhead-with-freckles-wearing-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <div>
                                <strong>{candidate.full_name}</strong><br />
                                {candidate.email}
                            </div>
                        </div>
                        <h2 className={getScoreColor(candidate.score)}>{candidate.score}%</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
