const HomeVideo = () => {
    return (
        <div className="video-container">
            <video loop autoPlay muted className="home-video">
                <source src=".//home-video.mp4" type="video/ogg"/>
            </video>
            <div className="home-video-text-left">
                <h1 className="home-video-text">Pushing</h1>
                <h1 className="home-video-text">The Bondaries</h1>
            </div>
            <div className="home-video-text-right">
                <h1 className="home-video-text">Of technology </h1>
                <h1 className="home-video-text">and design</h1>
            </div>
            <div className="scroll-animation">
                <p className="scroll-text">scroll</p>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="text-container">
                <span>View all bikes</span>
                <div class="arrow">➡</div>
            </div>
        </div>
    )
}

export default HomeVideo;