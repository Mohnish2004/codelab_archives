import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-stone-800 dark:text-stone-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry, this document couldn't be found in our archives.
        </p>
        <p className="mb-8">
          But don't worry, you can explore our other historical documents on the main page.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-brown inline rounded-lg border border-transparent bg-amber-900 px-4 py-2 text-sm font-medium leading-5 text-stone-50 shadow transition-colors duration-150 hover:bg-amber-800 focus:outline-none dark:hover:bg-amber-700"
        >
          Return to Archives
        </Link>
      </div>
    </div>
  )
}
