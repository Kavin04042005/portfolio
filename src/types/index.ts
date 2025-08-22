export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  type: 'internship' | 'education';
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}