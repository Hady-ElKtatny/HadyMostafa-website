import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Progress } from './ui/progress';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: ".NET Core", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP/Laravel", level: 70 },
        { name: "Express.js", level: 82 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Azure", level: 70 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS (Swift)", level: 65 },
        { name: "Android (Kotlin)", level: 68 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C#", level: 78 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "Photoshop", level: 70 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return }
   
  
