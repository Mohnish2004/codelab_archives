import ShareButton from '@/components/ShareButton'

interface ResourcesSidebarProps {
  workshop?: {
    videoUrl: string
    slidesUrl?: string
  }
  content: {
    resources?: Array<{
      title: string
      url: string
    }>
  }
}

export default function ResourcesSidebar({ workshop, content }: ResourcesSidebarProps) {
  return (
    <>
      <h2 className="mb-4 text-xl font-semibold">Workshop Resources</h2>

      {/* Share Link Button */}
      <ShareButton
        className="mb-4 flex w-full items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
        iconClassName="h-5 w-5"
        text="Share Workshop"
      />

      {/* Video Link */}
      {workshop?.videoUrl && (
        <a
          href={workshop.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 flex w-full items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Watch on YouTube
        </a>
      )}

      {/* Slides Link */}
      {workshop?.slidesUrl && (
        <a
          href={workshop.slidesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
            />
          </svg>
          View Slides
        </a>
      )}
    </>
  )
}
