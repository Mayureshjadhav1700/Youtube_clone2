import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Style from "../CSS/Watch.module.css";

const Watch = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  async function apiData() {
    const params = {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 10,
      regionCode: "IN",
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    };

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(
        params
      )}`
    );

    const data = await res.json();

    // Remove the currently playing video
    const filteredVideos = data.items.filter((video) => video.id !== id);

    setVideos(filteredVideos);
  }

  useEffect(() => {
    apiData();
  }, [id]);

  return (
    <div className={Style.watchPage}>
      {/* Left Section */}
      <div className={Style.left}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube Player"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Section */}
      <div className={Style.right}>
        {videos.map((video) => (
          <article
            key={video.id}
            className={Style.card}
            onClick={() => navigate(`/watch/${video.id}`)}
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />

            <div>
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Watch;