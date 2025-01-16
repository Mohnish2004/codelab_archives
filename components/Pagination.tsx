import Link from 'next/link'

interface Props {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {currentPage > 1 && <Link href={`?page=${currentPage - 1}`}>Previous</Link>}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && <Link href={`?page=${currentPage + 1}`}>Next</Link>}
      </nav>
    </div>
  )
}
