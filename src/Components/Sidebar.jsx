import React from "react";
import Style from "../CSS/Sidebar.module.css";
import {Home,ChevronRight,PlaySquare,History,Clock3,ThumbsUp,Flame,Music2,Trophy,Gamepad2,Settings,} from "lucide-react";

const Sidebar = ({ toggle }) => {
  return (
    <aside className={`${Style.section} ${toggle ? Style.sidebar : ""}`}>

      <div className={Style.home}>
        <Home size={20} />
        <span>Home</span>
      </div>

      <div className={Style.home}>
        <PlaySquare size={20} />
        <span>Shorts</span>
      </div>

      <div className={Style.subscription}>
        <span>Subscriptions</span>
        <ChevronRight size={18} />
      </div>

      <div className={Style.you}>
        <span>You</span>
      </div>

      <div className={Style.home}>
        <History size={20} />
        <span>History</span>
      </div>

      <div className={Style.home}>
        <Clock3 size={20} />
        <span>Watch Later</span>
      </div>

      <div className={Style.home}>
        <ThumbsUp size={20} />
        <span>Liked Videos</span>
      </div>

      <hr />

      <div className={Style.you}>
        <span>Explore</span>
      </div>

      <div className={Style.home}>
        <Flame size={20} />
        <span>Trending</span>
      </div>

      <div className={Style.home}>
        <Music2 size={20} />
        <span>Music</span>
      </div>

      <div className={Style.home}>
        <Gamepad2 size={20} />
        <span>Gaming</span>
      </div>

      <div className={Style.home}>
        <Trophy size={20} />
        <span>Sports</span>
      </div>

      <hr />

      <div className={Style.home}>
        <Settings size={20} />
        <span>Settings</span>
      </div>

    </aside>
  );
};

export default Sidebar;