import React from 'react'
import HomeVideo from '../images/VegetavsBroly.mp4'
import Poster from '../images/carousel1.jpg'
import {useRef , useState} from 'react'
function VideoMain() {

    const [playVid, setplayVid] = useState(false)

    const vidRef = useRef(null);
    const handlePlayVideo = () => {
        if(playVid){
            vidRef.current.pause();
        }
        else{
            vidRef.current.play();
        }
        
    }
        return (
            <>
                <video ref={vidRef} className='video_holder' loop unmuted poster={Poster}>
                    <source src={HomeVideo} type='video/mp4' />
                </video>

                <div className={`play_pause-btn  ${playVid ? "inactive" : "active"}`}>
                    <button onClick={()=>{
                        if(playVid === false){
                            setplayVid(true)
                        }
                        else{
                            setplayVid(false)
                        }
                        
                        handlePlayVideo()
                    }}>
                        {
                            playVid ? <i class='bx bx-pause' style={{fontSize:'1.5rem'}}></i>  : <i class='bx bxs-right-arrow' ></i>
                        }
                        </button>
                </div>
            </>
        )
    }

    export default VideoMain
