import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface LayoutProps {
  content: CoreContent<Blog> & {
    workshop?: {
      videoUrl: string
      slidesUrl?: string
    }
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
      <article className="mx-auto max-w-3xl px-4 py-12">
        {/* Back to blog link - moved to top */}
        <div className="mb-8">
          <Link href={`/${basePath}`} className="text-gray-600 hover:text-gray-900">
            ← Back to the blog
          </Link>
        </div>

        {/* Featured Image or Default Grey Box */}
        <div className="mb-8 aspect-[2/1] overflow-hidden rounded-xl bg-gray-100">
          {images?.[0] ? (
            <Image
              src={images[0]}
              alt={`${title} featured image`}
              width={1200}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Workshop Video and Slides Section */}
        {workshop && (
          <div className="mb-12 rounded-xl border border-gray-200 p-6">
            <h2 className="mb-4 text-2xl font-bold">Workshop Resources</h2>
            
            {/* Video Embed */}
            <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={workshop.videoUrl}
                className="h-full w-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            {/* Slides Link */}
            {workshop.slidesUrl && (
              <a
                href={workshop.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition hover:bg-gray-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                View Presentation Slides
              </a>
            )}
          </div>
        )}

        {/* Category/Tag */}
        <div className="mb-8">
          <div className="inline-block rounded-full border border-gray-200 px-4 py-1 text-sm">
            {tags?.[0] || 'Blog'}
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-bold">{title}</h1>

        {/* Metadata */}
        <div className="mb-16 flex items-center gap-2 text-gray-600">
          <time>{new Date(date).toLocaleDateString(siteMetadata.locale)}</time>
          <span>•</span>
          <span>7 min read</span>
        </div>

        {/* Main content */}
        <div className="prose mb-16 max-w-none">{children}</div>

        {/* Author section */}
        <div className="mb-16 border-t border-gray-100 pt-8">
          {authorDetails.map((author) => (
            <div key={author.name} className="flex items-center gap-3">
              {author.avatar && (
                <Image
                  src={author.avatar}
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full"
                />
              )}
              <div>
                <div className="font-medium text-gray-900">{author.name}</div>
                {author.twitter && (
                  <Link href={author.twitter} className="text-sm text-gray-600 hover:text-gray-900">
                    {author.twitter.replace('https://twitter.com/', '@')}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <nav className="flex justify-between border-t border-gray-100 pt-8">
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
