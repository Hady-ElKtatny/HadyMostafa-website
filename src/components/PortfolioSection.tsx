import { ExternalLink, Play, FileText } from 'lucide-react';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work and achievements in Business Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* YouTube Video Link */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-6 mx-auto">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Ummah News Video Presentation
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Watch a presentation showcasing one of my most important tech projects,
              demonstrating how to solve complex problems with innovative approaches.
            </p>
            <div className="text-center">
              <a
                href="https://youtu.be/3p43BO4v8Js?si=SKv8mR-4DThQtnVc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Play className="w-5 h-5" />
                Watch Video
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Slide Deck Link */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Slide Deck
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Browse through my presentation slides containing project details,
              technologies used, and achieved results.
            </p>
            <div className="text-center">
              <a
                href="https://www.canva.com/design/DAGvxg9jmnY/KUm0U5Tv8Kh-WAKD47aR0Q/edit?utm_content=DAGvxg9jmnY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FileText className="w-5 h-5" />
                View Slides
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Portfolio Items */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ummah News ",
                description: "Data Analysis and Project Managementt",
                tech: "Python, Tableau "
              },
              {
                title: "ECS Event Competion",
                description: "Lead my team to the 5 place of the Competition and 4 place of sales",
                tech: "Sales, Presentation"
              },
              {
                title: "Femmi Tech Event",
                description: "Managing the team to win the Competition",
                tech: "Project Management, Leadership"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {project.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}