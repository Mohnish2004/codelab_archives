import { FaFilePdf, FaFileVideo, FaFileAlt, FaLink, FaImages, FaFileWord } from 'react-icons/fa'
import { IconType } from 'react-icons'

export type FileType = 'pdf' | 'slide' | 'video' | 'link' | 'album' | 'document'

export interface ProjectFile {
  title: string
  description: string
  type: FileType
  tags?: string[]
  url?: string
}

// Map file types to icons
export const fileTypeIcons: Record<FileType, IconType> = {
  pdf: FaFilePdf,
  slide: FaFileAlt,
  video: FaFileVideo,
  link: FaLink,
  album: FaImages,
  document: FaFileWord,
}

export const sampleFiles: ProjectFile[] = [
  {
    title: 'Design for PMs Workshop',
    description: 'Learn effective strategies for designer-developer collaboration and design thinking fundamentals for project managers.',
    type: 'slide',
    tags: ['design', 'project-management'],
    url: 'https://www.figma.com/deck/tAp1xGMHYvQsMAgg2yuZLk/WQ25-Workshop-%231%3A-Design-for-PMs',
  },
  {
    title: 'Client Handoff Guide',
    description: 'Comprehensive guide for smooth project handoffs, covering code, design, and documentation best practices.',
    type: 'document',
    tags: ['documentation', 'client-handoff'],
    url: 'https://docs.google.com/presentation/d/1eh-PcyxGJRnwJQ6AT5C7QsnGfbaIQDEARqpb2Q7Dh8s',
  },
  {
    title: 'Deployment Tools Overview',
    description: 'Guide to modern deployment platforms including Vercel, Fly.io, Netlify, Railway, and Firebase.',
    type: 'slide',
    tags: ['development', 'deployment'],
    url: 'https://docs.google.com/presentation/d/1MGynkcBtbf4pN1t_YYE88A0sC14rKSoNGU4262qoft0',
  },
  {
    title: 'Dev-Design Swap Challenge',
    description: 'Interactive workshop materials for developers learning design thinking and prototyping.',
    type: 'slide',
    tags: ['design', 'development'],
    url: 'https://www.figma.com/proto/dde6f45kk5lGOGa7DvQHx0/FQ24-Dev-Whiteboarding-Challenge',
  },
  {
    title: 'Final Presentation Guide',
    description: 'Learn how to create and deliver impactful project presentations within a 5-6 minute timeframe.',
    type: 'slide',
    tags: ['presentation', 'public-speaking'],
    url: 'https://docs.google.com/presentation/d/1oIGflwL_naIKbe84x62lGPfB4BPdABOxqhDSEKVQ9Tc',
  },
  {
    title: 'Team Communication Handbook',
    description: 'Best practices for effective team communication, meeting management, and collaboration.',
    type: 'document',
    tags: ['communication', 'team-building'],
    url: 'https://docs.google.com/presentation/d/1ETeZXycPC6DkEbLw2y7K_HnMmghCoItzb9BQZcwIe24',
  },
  {
    title: 'Feature Management Guide',
    description: 'Essential GitHub workflows for feature management, including branching and PR strategies.',
    type: 'slide',
    tags: ['development', 'git'],
    url: 'https://docs.google.com/presentation/d/1iOU2gCiEgTQm5dB7ah9vmbvvvkwi6BpxJGS63WbPgtE',
  },
  {
    title: 'Modern Design-Dev Tools',
    description: 'Overview of AI-powered design-to-code tools like Bolt.new and V0.dev.',
    type: 'slide',
    tags: ['design', 'development', 'tools'],
    url: 'https://www.figma.com/deck/sQy3PBYzgJQnhTQwXnge4v/WQ25-GM%232-Workshop',
  },
  {
    title: 'Bridging the Design-Dev Gap',
    description: 'Strategies for improving designer-developer collaboration and workflow.',
    type: 'slide',
    tags: ['design', 'development', 'collaboration'],
    url: 'https://www.figma.com/deck/M7Shx6CQYidNsMSet6nVB6/FQ24-Workshop-%231%3A-Working-with-devs',
  },
  {
    title: 'Fall 2024 Final Presentations',
    description: 'Recording of CodeLab Fall 2024 final project presentations featuring client and product teams.',
    type: 'video',
    tags: ['presentations', 'projects'],
    url: 'https://www.youtube.com/embed/O2k4cJPWm8E?si=UXZzvBUdtBM12VKy',
  },
]

export default sampleFiles
