import { Briefcase, Heart, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ExperienceSection() {
  const workExperience = [
    {
      title: "Purchasing Manager",
      company: "El Heah Company for Food Products", 
      period: "Jan 2021 – Present",
      location: "Cairo, Egypt",
      description: "Lead procurement operations for food products, managing supplier relationships, purchase orders, inventory levels, and quality control to ensure steady stock and timely deliveries..",
      achievements: [
        "Supplier negotiation & onboarding",
        "Purchase order creation",
        "Demand forecasting",
        "inventory audits, quality checks",
        "cost analysis, coordination with logistics"
      ]
    },
    {
      title: "Project Manager & Data Analyst",
      company: "OneTeam",
      period: "Jan 2025 – Present",
      location: "Cairo, Egypt ", 
      description: "Manage the OneTeam student project and lead data-collection, cleaning, and analytics to inform project decisions..",
      achievements: [
        "Project planning",
        "Sprint coordination",
        "Data collection",
        "dashboard creation",
        "progress reporting"
      ]
    }
  ];

  const volunteeringExperience = [
    {
      title: "Programming Instructor",
      organization: "Tech Education Foundation",
      period: "2021 - Present",
      location: "Riyadh, Saudi Arabia",
      description: "Training youth in programming fundamentals and application development.",
      impact: "Trained over 200 students"
    },
    {
      title: "Technical Coordinator",
      organization: "Saudi Developers Association",
      period: "2020 - 2023",
      location: "Riyadh, Saudi Arabia",
      description: "Organizing tech events and workshops for developers in the Kingdom.",
      impact: "Organized 25+ tech events"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and career progression in Business Development
          </p>
        </div>

        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="font-semibold text-blue-600 mb-1">{job.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Timeline</h3>
          <div className="relative">
            
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "Purchasing Manager",
                  description: "Alhaya Company for Food Products, from Jan 2021 to date, I achieved the golden target in my company in 2022 to sell 600 K.G of Date for individuals and 1000 K.G. for wholesalers.",
                  side: "left"
                },
                {
                  year: "2020",
                  title: "Purchasing Manager",
                  description: " Qutoof Company for Food Products, M.T. from Jun 2020 to Oct 2020.",
                  side: "right"
                },
                {
                  year: "2022",
                  title: " Store Manager",
                  description: "Thamara, from Mar 2020 to Fib 2021",
                  side: "left"
                },
                {
                  year: "2025",
                  title: "Future Goals",
                  description: "Aspiring to become a Product Manager",
                  side: "right"
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${milestone.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${milestone.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="font-bold text-blue-600 mb-1">{milestone.year}</div>
                      <div className="font-semibold text-gray-900 mb-1">{milestone.title}</div>
                      <div className="text-sm text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-gray-600">Projects Worked</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">3+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">6+</div>
              <div className="text-gray-600">Team Members Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}