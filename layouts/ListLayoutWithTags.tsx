'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+$/, '') // Remove any trailing /page
  console.log(pathname)
  console.log(basePath)
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="pb-12 pt-16">
          <h1 className="text-[72px] font-serif leading-tight tracking-normal text-[#2D2D2D]">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 pb-12">
          {sortedTags.map((t) => (
            <Link
              key={t}
              href={`/tags/${slug(t)}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium 
                ${decodeURI(pathname.split('/tags/')[1]) === slug(t)
                  ? 'bg-[#7B6E63] text-white'
                  : 'border border-[#7B6E63] text-[#7B6E63] hover:bg-[#7B6E63] hover:text-white'
              }`}
            >
              {t}
            </Link>
          ))}
        </div>
        <div className="grid gap-6">
          {displayPosts.map((post) => {
            const { path, date, title, summary, tags } = post
            return (
              <div key={path} className="rounded-[24px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="grid grid-cols-[1fr,400px] gap-8">
                  <div className="space-y-3">
                    <div className="font-mono text-base text-[#6B6B6B]">
                      <time dateTime={date} suppressHydrationWarning>
                        2/12/25
                      </time>
                    </div>
                    
                    <h2 className="font-mono text-[28px] font-bold leading-tight">
                      <Link href={`/${path}`} className="text-[#2D2D2D]">
                        {title}
                      </Link>
                    </h2>
                    
                    <p className="font-mono text-base text-[#6B6B6B] leading-relaxed">
                      {summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#7B6E63] bg-opacity-10 px-3 py-1.5 font-mono text-sm text-[#7B6E63]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="rounded-2xl bg-[#D9D9D9]"></div>
                </div>
              </div>
            )
          })}
        </div>
        {pagination && pagination.totalPages > 1 && (
          <div className="mt-10">
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          </div>
        )}
      </div>
    </>
  )
}
