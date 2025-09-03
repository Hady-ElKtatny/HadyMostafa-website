import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

export function ElevatorPitchSection() {
  // YouTube video ID - replace with your actual video ID
  const YOUTUBE_VIDEO_ID = "L1ZJgrkXVdM?si"; // Example: if URL is https://youtu.be/3p43BO4v8Js, then ID is 3p43BO4v8Js
  const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`;
  const YOUTUBE_WATCH_URL = `https://youtu.be/${YOUTUBE_VIDEO_ID}`;

  const [showEmbedVideo, setShowEmbedVideo] = useState(false);

  return (
    <section id="elevator-pitch" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Elevator Pitch
          </h2>
          <p className="text-xl text-gray-600">
            My elevator pitch: the intersection of business and data, and the future I’m building.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="aspect-video rounded-xl relative overflow-hidden mb-6">
            {showEmbedVideo ? (
              // Embedded YouTube Video
              <iframe
                width="100%"
                height="100%"
                src={`${YOUTUBE_EMBED_URL}?autoplay=1&rel=0&modestbranding=1`}
                title="Elevator Pitch Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl"
              />
            ) : (
              // Video Thumbnail with Play Button
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl relative overflow-hidden h-full">
                {/* YouTube Thumbnail */}
                <img 
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center">
                    <button
                      onClick={() => setShowEmbedVideo(true)}
                      className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors shadow-lg"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                    <p className="text-white text-lg font-medium">
                      Watch My Elevator Pitch
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Video Actions */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setShowEmbedVideo(!showEmbedVideo)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Play className="w-5 h-5" />
              {showEmbedVideo ? 'Hide Video' : 'Play Video'}
            </button>
            
            <a
              href={YOUTUBE_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Watch on YouTube
            </a>
          </div>

          {/* Video Description */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hello, I'm Hady Mostafa
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              A Computer Science student and business-minded data specialist.
              In this short video,
              I share my Elevator Pitch and my vision at work.
            </p>
            
            {/* Key Points */}
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">My Professional Vision</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
             I mix operational experience with analytics to translate business problems into data-driven solutions. I’ve led projects, coordinated large events, and delivered measurable outcomes; now I’m building scalable analytics products that improve real people’s lives.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">What Sets Me Apart</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Genuine passion for continuous learning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Ability to work effectively in teams
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Creative problem-solving approach
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}