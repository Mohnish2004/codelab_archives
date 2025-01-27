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
import ResourcesSidebar from '@/components/ResourcesSidebar'

interface LayoutProps {
  content: CoreContent<Blog> & {
    quarter
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

        {/* Thumbnail Images */}
        {images?.length > 0 && (
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={images[0]}
                alt={title}
                width={1920}
                height={1080}
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        )}

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
          {/* Main Video Section - Only shown if video URL exists */}
          {workshop?.videoUrl ? (
            <>
              <div className="lg:col-span-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <iframe
                    src={workshop.videoUrl.replace('youtube.com/watch?v=', 'youtube.com/embed/')}
                    title="Workshop Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute left-0 top-0 h-full w-full"
                  />
                </div>
              </div>

              {/* Sidebar with Resources - Narrow when video exists */}
              <div className="lg:col-span-4">
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <ResourcesSidebar workshop={workshop} content={content} />
                </div>
              </div>
            </>
          ) : (
            /* Full-width Resources Section - When no video */
            <div className="lg:col-span-12">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <ResourcesSidebar workshop={workshop} content={content} />
              </div>
            </div>
          )}
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
