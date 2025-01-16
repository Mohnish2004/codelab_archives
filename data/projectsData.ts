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
    title: 'GM Workshop Slides Part 1',
    description: 'Introduction to Game Maker Studio 2 - Basic Concepts',
    type: 'slide',
    tags: ['presentation', 'gamemaker'],
    url: '/files/gm-slides-1.pdf',
  },
  {
    title: 'GM Workshop Slides Part 2',
    description: 'Sprites, Objects, and Events in Game Maker Studio 2',
    type: 'slide',
    tags: ['presentation', 'gamemaker'],
    url: '/files/gm-slides-2.pdf',
  },
  {
    title: 'GM Workshop Slides Part 3',
    description: 'Advanced Game Mechanics and Polish in Game Maker Studio 2',
    type: 'slide',
    tags: ['presentation', 'gamemaker'],
    url: '/files/gm-slides-3.pdf',
  },
  {
    title: 'Workshop Handout.pdf',
    description: 'Step-by-step guide for creating your first game in GM Studio 2',
    type: 'pdf',
    tags: ['tutorial', 'gamemaker'],
    url: '/files/workshop-handout.pdf',
  },
  {
    title: 'Resource Pack',
    description: 'Sprites, sounds, and assets for the workshop project',
    type: 'album',
    tags: ['resources', 'assets'],
    url: '/files/resource-pack',
  },
  {
    title: 'Additional Resources',
    description: 'Useful links and documentation for Game Maker Studio 2',
    type: 'link',
    tags: ['resources', 'gamemaker'],
    url: '/resources',
  },
]

export default sampleFiles
