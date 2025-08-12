
import React from "react";

const VideoSection = () => {
  
  return (
    <section className="container my-5 marginTop">
      <div className="row justify-content-center">
        {/* Title Section */}
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold text-black">Our Featured Video</h2>
          <p className="text-muted">
            Learn more about our services in this short video.
          </p>
        </div>

        {/* Video Section */}
        <div className="col-md-10 col-12">
          <div className="ratio ratio-16x9 mb-3">
            <video className="rounded-4 shadow-sm" autoPlay muted loop controls>
              <source src="StorekwilExplainerVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
