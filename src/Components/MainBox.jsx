import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "../CSS/MainBox.module.css";

const MainBox = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  async function apiData() {
    const params = {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 12,
      regionCode: "IN",
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    };

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(
          params
        )}`
      );

      const data = await res.json();
      setVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    apiData();
  }, []);

  return (
    <main className={Style.main}>
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

          <h3>{video.snippet.title}</h3>

          <p>{video.snippet.channelTitle}</p>
        </article>
      ))}
    </main>
  );
};

export default MainBox;