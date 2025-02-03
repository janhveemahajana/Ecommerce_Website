import React, { useEffect, useRef, useState } from "react";
import "./Music.css";
import axios from "axios";
import Footer from "../Home/Footer";

function Music() {
  const [MusicUser, setMusicUser] = useState([]);
  const [selectedSong, setSelectedSong] = useState();
  const [mainHeading, setMainHeading] = useState("");
  const [description, setDescription] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const handlePlay = (song) => {
    if (selectedSong === song) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // Play a new song
      if (audioRef.current) {
        audioRef.current.pause(); // Pause the previous song if any
      }
      setSelectedSong(song);
      setIsPlaying(true);

      // Ensure the audioRef is updated before playing
      setTimeout(() => {
        if (audioRef.current) audioRef.current.play();
      }, 0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8002/api/getallmusic");
      if (response.data.length > 0) {
        setMainHeading(response.data[0].heading);
        setDescription(response.data[0].description);
        setMusicUser(response.data.slice(1));
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="bradcam_area">
        <div className="single_bradcam d-flex align-items-center bradcam_bg_1 overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12">
                <div className="bradcam_text text-center">
                  <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                    {mainHeading}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="latestalbum" className="hero pad">
        <div className="container">
          <div className="hero-content">
            <h2>{mainHeading}</h2>
            <hr />
            <p>{description}</p>
          </div>

          <div className="hero-playlist">
            <div className="row">
              {selectedSong && (
                <div className="col-md-6 col-sm-6">
                  <div className="figure">
                    <img
                      src={`http://localhost:8002/images/${selectedSong.musicimage}`}
                      alt="music"
                      className="img-responsive"
                    />
                    <img className="img-responsive disk" src="images/music/disk.png" alt="" />
                  </div>
                  <div className="album-details">
                    <h4>{selectedSong.album}</h4>
                    <h5>By {selectedSong.singer}</h5>
                    <p>{selectedSong.aboutsong}</p>
                    <button className="btn btn-lg btn-theme" onClick={() => handlePlay(selectedSong)}>
                      <i className="fa fa-play" /> &nbsp; Play Now
                    </button>
                  </div>
                </div>
              )}

              <div className={selectedSong ? "col-md-6 col-sm-6" : "col-md-12 col-sm-12"}>
                <div className="playlist-content">
                  {MusicUser.map((song, index) => (
                    <ul className="list-unstyled" key={index}>
                      <li className="playlist-number" onClick={() => handlePlay(song)}>
                        <div className="song-info">
                          <h4>{song.album}</h4>
                          <p>
                            <strong>Album</strong>: {song.album} &nbsp;|&nbsp;
                            <strong>Type</strong>: {song.type} &nbsp;|&nbsp;
                            <strong>Singer</strong>: {song.singer}
                          </p>
                        </div>
                        <div className="music-icon">
                          <button className="btn-icon">
                            <i className={`fa ${isPlaying && selectedSong === song ? "fa-pause" : "fa-play"}`} />
                          </button>
                          {selectedSong === song && (
                            <audio ref={audioRef} src={`http://localhost:8002/songs/${song.songname}`} />
                          )}
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Music;
