const HomeVideo = () => {
    return (
        <div className="video-container">
            <video loop autoPlay muted className="home-video">
                <source src="https://download-video.akamaized.net/v3-1/playback/4d91c983-7c5c-413b-8882-06439a9a43a4/89ac7fe7-b644dd60?__token__=st=1704810852~exp=1704825252~acl=%2Fv3-1%2Fplayback%2F4d91c983-7c5c-413b-8882-06439a9a43a4%2F89ac7fe7-b644dd60%2A~hmac=783dcab4832f079c83adcd8ac5fb764a8c49a95c30a2c9441f25d0832044337e&r=dXMtY2VudHJhbDE%3D" type="video/ogg"/>
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