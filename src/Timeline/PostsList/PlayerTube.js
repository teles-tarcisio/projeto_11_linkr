import getYouTubeID from "get-youtube-id";
import YouTube from "react-youtube";
import React from "react";
import { Video } from "./PlayerTube_style.js";

export default function PlayerTube({link}){
    const id = getYouTubeID(link);

    return(
        <Video>
            <YouTube
                videoId = {id}
                onReady = {e => e.target.pauseVideo()}
                opts={{
                    width: '100%',
                    height: '281px',
                    playerVars:{
                        controls:1, 
                        start:0,
                    }
                    
                }}
            />
            <p>{link}</p>
        </Video>
    ); 
}