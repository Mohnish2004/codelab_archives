import Link from './Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="p-5 sm:p-10 md:p-20">
      <div className="w-md flex max-w-full flex-wrap items-center justify-between gap-10 rounded-xl bg-white p-10 shadow-sm">
        <div className="flex gap-8">
          <div>
            <h4 className="mb-4 font-bold text-black">About Us</h4>
            <Link href="/" className="mb-2 block text-gray-500 hover:text-gray-700">
              {siteMetadata.title}
            </Link>
            <Link
              href="https://codelabdavis.com"
              className="mb-2 block text-gray-500 hover:text-gray-700"
              title="Main Website"
            >
              Main Website
            </Link>
            <Link
              href="https://os.codelabdavis.com"
              className="mb-2 block text-gray-500 hover:text-gray-700"
              title="Open Source"
            >
              Open Source
            </Link>
            <Link
              href="https://codelabdavis.com/toolkit"
              className="mb-2 block text-gray-500 hover:text-gray-700"
              title="Toolkit"
            >
              Toolkit
            </Link>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-black">Bootcamps</h4>
            <Link href="/blog" className="mb-2 block text-gray-500 hover:text-gray-700">
              Workshops
            </Link>
            <Link href="/about" className="mb-2 block text-gray-500 hover:text-gray-700">
              About us
            </Link>
            <Link href="/projects" className="mb-2 block text-gray-500 hover:text-gray-700">
              Files
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4 lg:w-fit">
          <Image src="/static/images/logo.svg" alt="Logo" width={60} height={60} />
          <div className="flex">
            <a className="social mr-2" href="https://www.facebook.com/CodeLabDavis" target="_blank">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a className="social mr-2" href="https://twitter.com/CodeLabDavis" target="_blank">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a className="social" href="https://www.instagram.com/codelabdavis" target="_blank">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
