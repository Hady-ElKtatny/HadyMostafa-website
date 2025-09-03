import image_eb208481d0d2bf30de6b5ca869a84d9a64786b5b from '../assets/eb208481d0d2bf30de6b5ca869a84d9a64786b5b.png';

import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "ITA",
      location: "Cairo, Egypt",
      period: "2023 - date",
      grade: "2.7/4.0 GPA",
      description: "Data Science.",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Best Graduation Project Award",
        "Member of Computer Science Honor Society"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "AI",
        "Data Analysis",
        "Computer Networks"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Helwan Elthanwea Baneen",
      location: "Cairo, Egypt", 
      period: "2021 - 2023",
      grade: "64.2%",
      description: "Science track with emphasis on Mathematics and Physics.",
      achievements: [
        "Valedictorian of graduating class",
        "Mathematics Excellence Award"
      ]
    }
  ];

  const courses = [
    {
      title: "Business Analytics Nanodegree",
      provider: "Udacity",
      platform: "Udacity",
      completion: "Aug 2024",
      duration: "4 Months",
      skills: [" SQL", "Tableau", "Excel", "Presenting"]
    },
    {
      title: "Introducing Generative AI with AWS",
      provider: "Amazon Web Services",
      platform: "AWS Training",
      completion: " Aug 2025",
      duration: "40 Hours",
      skills: ["AWS", "Cloud Computing", "Generative AI"]
    },
    {
      title: "Data Analysis by Python",
      provider: "Yanfaa",
      platform: "Yanfaa",
      completion: "Jun 2024",
      duration: "3 Hours",
      skills: ["Python", "Problem Solving"]
    },
    {
      title: "Machine Learning Fundamentals",
      provider: "Stanford University",
      platform: "Coursera",
      completion: "2024",
      duration: "8 weeks",
      skills: ["Python", "TensorFlow", "Data Analysis"]
    }
  ];

  const achievements = [
    
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Formal Education</h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <p className="font-semibold text-blue-600 mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="text-lg font-bold text-green-600">{edu.grade}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{edu.description}</p>

                    {edu.achievements && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Achievements:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                              <Award className="w-4 h-4 text-yellow-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.courses && (
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Key Courses:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-1">
                    <ImageWithFallback
                      src={image_eb03af903e5fd65d014c35e5668f5fec83bbac97}
                      alt="University Campus"
                      className="w-60 h-65 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Courses & Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Continuous Learning</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">{course.title}</h4>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{course.completion}</span>
                </div>
                
                <p className="font-semibold text-green-600 mb-1">{course.provider}</p>
                <p className="text-sm text-gray-500 mb-3">{course.platform} • {course.duration}</p>
                
                <div className="flex flex-wrap gap-1">
                  {course.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

       

        {/* Learning Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Philosophy</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "Education is not preparation for life; education is life itself. I believe in continuous learning 
            and staying updated with the latest technologies to deliver the best solutions."
          </p>
        </div>
      </div>
    </section>
  );
}