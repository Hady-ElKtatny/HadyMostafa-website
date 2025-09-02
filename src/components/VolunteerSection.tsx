import { Heart, Users, Calendar, MapPin, Target, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VolunteerSection() {
  const volunteerExperience = [
    {
      title: "Event Manager and coordinator",
      organization: " TEDxMillennium",
      period: "Feb 2025 to date",
      location: "Ministry of youth and sports, Egypt",
      description: "Training youth in prog.",
      impact: "Trained the organizing team,Contributed to smooth execution of a large-scale TEDx event and improved coordination between teams.",
      activities: [
        "Program scheduling",
        "Vendor & venue coordination",
        "Volunteer Management",
        "Stage management",
        "VIP handling"
      ],
      skills: ["Traning", "Event Management", "Mentoring", "Logistics", "Event Planing", "Team Leadership" , "Time Management", "Stakeholder Coordination"]
    },
    {
      title: "Organizing Team Member (Volunteer)",
      organization: "Cairo International Book Fair (CIBF) — Rounds 55 & 56",
      period: "Jan–Feb 2024 & Jan–Feb 2025",
      location: "Cairo, Egypt, Fair Zone",
      description: "Supported logistics and operations for the national book fair across busy exhibition days.",
      impact: "Helped ensure efficient visitor flow and smooth daily operations during high-traffic periods.",
      activities: [
        "Crowd management" , 
        "scheduling shifts",
        "volunteer coordination", 
        "information desk"
      ],
      skills: ["Event Logistics", "Crowd Management", "Coordination", "Adaptability", "Customer Service"]
    },
    {
      title: "Ambassador & Trainer (ToT)",
      organization: "Ministry of Planning — Ambassador for Sustainable Development & ToT training",
      period: "Sep–Oct 2024",
      location: "Cairo, Egypt",
      description: "Participated in Training-of-Trainers (ToT) and acted as an ambassador to promote sustainable development initiatives.",
      impact: "Completed ToT and supported dissemination of sustainability topics to peers and local groups.",
      activities: [
        "Facilitating workshops",
        "preparing training materials",
        "community outreach",
        "peer coaching"
      ],
      skills: ["Training & facilitation", "Public Speaking", "Advocacy", "Curriculum Prep" , "Interpersonal Skills"]
    }
  ];

  const causes = [
    {
      name: "Education Technology",
      description: "Making quality tech education accessible to everyone",
      icon: "💻",
      involvement: "3 years"
    },
    {
      name: "Digital Inclusion",
      description: "Bridging the digital divide in Saudi communities",
      icon: "🌐",
      involvement: "4 years"
    },
    {
      name: "Youth Empowerment",
      description: "Empowering young people through technology skills",
      icon: "🚀",
      involvement: "3 years"
    },
    {
      name: "Open Source",
      description: "Contributing to open source projects and communities",
      icon: "🔓",
      involvement: "2 years"
    }
  ];

  const achievements = [
    {
      title: "Outstanding Volunteer Award",
      organization: "Tech Education Foundation",
      year: "2023",
      description: "Recognized for exceptional dedication to tech education"
    },
    {
      title: "Community Builder of the Year",
      organization: "Saudi Developers Association",
      year: "2022",
      description: "For building and nurturing the local developer community"
    },
    {
      title: "Digital Inclusion Champion",
      organization: "Saudi Red Crescent Society",
      year: "2021",
      description: "For outstanding work in digital literacy programs"
    }
  ];

  return (
    <section id="volunteer" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Volunteer Work & Community Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giving back to the community through technology education and digital empowerment initiatives
          </p>
        </div>

        {/* Volunteer Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Volunteer Experience</h3>
          </div>

          <div className="space-y-8">
            {volunteerExperience.map((volunteer, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{volunteer.title}</h4>
                        <p className="font-semibold text-green-600 mb-1">{volunteer.organization}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {volunteer.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {volunteer.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{volunteer.description}</p>

                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Impact Achieved:</span>
                      </div>
                      <p className="text-green-700 font-medium">{volunteer.impact}</p>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Activities:</h5>
                      <ul className="space-y-1">
                        {volunteer.activities.map((activity, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Skills Utilized:</h5>
                      <div className="flex flex-wrap gap-2">
                        {volunteer.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
       
       

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Make a Difference Together?</h3>
          <p className="text-lg text-gray-600 mb-6">
            I'm always looking for new volunteer opportunities and ways to give back to the community.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}