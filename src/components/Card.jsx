import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";

export default function Card() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=30&assignment_id=assignment123')
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.error('Error fetching data: ', err));
    }, []);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const togglePlayPause = () => {
        const video = document.getElementById('videoPlayer');
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.box1}>
                <div className={styles.user}>
                   <div className={styles.imgsec}>
                   <img src="https://images.pexels.com/photos/17022636/pexels-photo-17022636/free-photo-of-redhead-with-freckles-wearing-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div>
                       <strong> {userData.full_name} </strong><br />
                        {userData.email}
                    </div>
                   </div>
                   <h2 className={styles.green}>{userData.score}%</h2>
                </div>
                <div className={styles.range}>
                    <div className={styles.ex}>
                        <div><strong>Behaviour</strong></div>
                        <div><strong>Communication</strong></div>
                        <div><strong>Situation Handling</strong></div>
                    </div>
                    <div className={styles.inp}>
                        {/* Check if userData.scores exists before mapping over it */}
                        {userData.scores && userData.scores.map((score, index) => (
                            <input key={index} type="range" value={`${score.user_score}/${score.max_score}`} disabled className={styles.slider}/>
                        ))}
                    </div>
                    <div>
                        {/* Check if userData.scores exists before mapping over it */}
                        {userData.scores && userData.scores.map((score, index) => (
                            <div key={index}>{`${score.user_score}/${score.max_score}`}</div>
                        ))}
                    </div>
                </div>
                <h2>About</h2>
                <p>{userData.about_me}</p>
                <h2>Experience</h2>
                <p>{userData.experience}</p>
                <h2>Hobbies</h2>
                <p>{userData.hobbies}</p>
                <h2>Introduction</h2>
                <p>{userData.introduction}</p>
                <button className={styles.short}>SHORTLIST</button>
                <button className={styles.videobutton} onClick={togglePlayPause}>{isPlaying ? 'Pause the video' : 'Play the video'}</button>
            </div>
            <div className={styles.box2}>
          
          <video id="videoPlayer" src="https://videos.pexels.com/video-files/4434242/4434242-uhd_2160_3840_24fps.mp4"></video>
           
            </div>
          
        </div>
    );
}
