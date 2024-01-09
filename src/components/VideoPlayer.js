import './VideoPlayer.css';
const VideoPlayer = () => {
    return (
        <div data-aos="zoom-in-up" className="video-container">
            <video poster="https://zeromotorcycles.com/_next/image?url=https%3A%2F%2Fd29sx7s964xey6.cloudfront.net%2F5241ce2d-2137-4235-8f31-c370295e1895_MY24_FX_Action_AZ3I5938b.jpeg%3Fauto%3Dcompress%2Cformat&w=1920&q=75" controls className="home-videoo">
                <source src=".//home-video.mp4" type="video/ogg"/>
            </video>
        </div>
    )
}

export default VideoPlayer;