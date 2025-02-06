import ShareButton from '@/components/ShareButton'

interface ResourcesSidebarProps {
  workshop?: {
    videoUrl: string
    slidesUrl?: string
    imagesUrl?: string
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

      {/* Images Gallery Link */}
      {workshop?.imagesUrl && (
        <a
          href={workshop.imagesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full mt-4 items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          View Photo Gallery
        </a>
      )}

      {/* Additional Resources */}
      {content.resources && content.resources.length > 0 && (
        <div className="">
          <h3 className="mb-2 font-medium">Additional Resources</h3>
          {content.resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex w-full items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              {resource.title}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
