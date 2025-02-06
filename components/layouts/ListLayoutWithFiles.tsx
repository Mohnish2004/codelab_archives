'use client'

import { useState } from 'react'
import { ProjectFile, fileTypeIcons } from '@/data/projectsData'
import FileCard from '@/components/FileCard'
import Pagination from '@/components/Pagination'
import { IconType } from 'react-icons'

interface Props {
  files: ProjectFile[]
  initialDisplayFiles: ProjectFile[]
  pagination: {
    currentPage: number
    totalPages: number
  }
  title: string
}

interface FileCardProps extends ProjectFile {
  icon: IconType
}

export default function ListLayoutWithFiles({
  files,
  initialDisplayFiles,
  pagination,
  title,
}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredFiles = files.filter((file) => {
    const searchContent = file.title + file.description
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="pb-12 pt-16">
        <h1 className="font-serif text-[42px] leading-tight tracking-normal text-[#2D2D2D] md:text-[56px] lg:text-[72px]">
          {title}
        </h1>
      </div>

      <div className="relative mb-12">
        <input
          aria-label="Search files"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search files"
          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {!filteredFiles.length && 'No files found.'}
        {filteredFiles.map((file) => (
          <FileCard key={file.title} {...file} />
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <div className="mt-10">
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        </div>
      )}
    </div>
  )
}
