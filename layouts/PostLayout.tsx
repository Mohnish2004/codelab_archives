import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ShareButton from '@/components/ShareButton'

interface LayoutProps {
  content: CoreContent<Blog> & {
    workshop?: {
      videoUrl: string
      slidesUrl?: string
    }
    resources?: Array<{
      title: string
      url: string
    }>
  }
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { path, date, title, tags, images, workshop } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* Back link */}
        <div className="mb-8">
          <Link href={`/${basePath}`} className="text-gray-600 hover:text-gray-900">
            ← Back to workshops
          </Link>
        </div>

        {/* Title section with metadata */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">{title}</h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <time>{new Date(date).toLocaleDateString(siteMetadata.locale)}</time>
            <span>•</span>
            <span>Workshop</span>
            <span>•</span>
            <ShareButton className="flex items-center gap-1 hover:text-gray-900" />
          </div>
        </div>

        {/* Workshop Content Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Video Section */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                src={workshop?.videoUrl.replace('youtube.com/watch?v=', 'youtube.com/embed/')}
                title="Workshop Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              />
            </div>
          </div>

          {/* Sidebar with Resources */}
          <div className="lg:col-span-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Workshop Resources</h2>

              {/* Share Link Button */}
              <ShareButton
                className="mb-4 flex w-full items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
                iconClassName="h-5 w-5"
                text="Share Workshop"
              />

              {/* Video Link */}
              <a
                href={workshop?.videoUrl}
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

              {/* Slides Link */}
              {workshop?.slidesUrl && (
                <a
                  href={workshop.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex w-full items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                  Download Slides
                </a>
              )}

              {/* Additional Resources Section */}
              {content.resources?.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex w-full items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition hover:bg-gray-200"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  {resource.title}
                </a>
              ))}

              {/* Author section moved to sidebar */}
            </div>
          </div>
        </div>

        {/* Workshop content/description */}
        <div className="prose max-w-none">{children}</div>

        {/* Navigation */}
        <nav className="mt-16 flex justify-between border-t border-gray-100 pt-8">
          {prev?.path && (
            <Link href={`/${prev.path}`} className="text-gray-600 hover:text-gray-900">
              ← {prev.title}
            </Link>
          )}
          {next?.path && (
            <Link href={`/${next.path}`} className="ml-auto text-gray-600 hover:text-gray-900">
              {next.title} →
            </Link>
          )}
        </nav>
      </article>
    </SectionContainer>
  )
}
