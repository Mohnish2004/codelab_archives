import { ProjectFile } from '@/data/projectsData'
import Link from 'next/link'

export default function FileCard({ title, type, description, url, tags }: ProjectFile) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <div className="text-sm font-medium uppercase text-primary-500">{type}</div>
        <a href={url} className="text-lg font-semibold hover:text-primary-600">
          {title}
        </a>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        {tags && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
