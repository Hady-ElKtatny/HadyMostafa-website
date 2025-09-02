import image_eb208481d0d2bf30de6b5ca869a84d9a64786b5b from 'figma:asset/eb208481d0d2bf30de6b5ca869a84d9a64786b5b.png';
import image_a56c0028dad48f1928912a11918798f556c45385 from 'figma:asset/a56c0028dad48f1928912a11918798f556c45385.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hello, I'm{' '}
                <span className="text-blue-600">Hady Mostafa</span>
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
                 I’m Hady Mostafa, a Computer Science student and data-driven problem
 solver who bridges business understanding with practical data science. With
 over four years of experience in commerce and purchasing at El Heah
 Company, I combine real-world operational insight with technical skills in SQL,
 Tableau, and foundational machine learning to design solutions that deliver
 measurable impact  
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
                What makes me unique is my blended background: I don’t only build models —
 I translate business questions into data strategies and operational plans. I’ve
 led student projects as a Project Manager & Data Analyst, managed events as
 a TEDx Event Manager, and driven measurable outcomes in marketing
 initiatives (including achieving 240 student sign-ups for an IBM course
 campaign). Those experiences taught me how to turn ideas into action across
 teams, stakeholders, and constraints     
              </p>
               <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
               I’m passionate about using data to create better life solutions — whether that’s
 improving processes, designing smarter services, or helping organizations
 make decisions that improve people’s day-to-day. My current roles enable this
 passion by giving me hands-on opportunities to manage projects end-to-end,
 apply analytics to real problems, and communicate insights to decision
makers. I’m actively building a portfolio of applied projects and continuing
 formal studies (Udacity Nanodegrees in Business Analysis & Digital
 Freelancing) so I can move from analysis to scalable, production-ready
 solutions.   
              </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
    I’m looking to grow into roles where I can lead cross-functional teams that fuse
 analytics and business strategy — ultimately creating products and systems
 that improve lives and drive sustainable value
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  Contact Me
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative rounded-[6px]">
              <div className="w-120 h-120 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-[8px] p-2">
                <ImageWithFallback
                  src={image_eb208481d0d2bf30de6b5ca869a84d9a64786b5b}
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-[0px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}