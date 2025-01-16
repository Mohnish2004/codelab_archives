import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="p-5 sm:p-10 md:p-20">
      <div className="w-md max-w-full p-10 rounded-xl flex flex-wrap gap-10 justify-between items-center bg-white shadow-sm">
        <div className="flex gap-8">
          <div>
            <h4 className="mb-4 font-bold text-black">About Us</h4>
            <Link href="/" className="block mb-2 text-gray-500 hover:text-gray-700">
              {siteMetadata.title}
            </Link>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-black">Bootcamps</h4>
            <Link href="/blog" className="block mb-2 text-gray-500 hover:text-gray-700">
              Designers
            </Link>
            <Link href="/tags" className="block mb-2 text-gray-500 hover:text-gray-700">
              Developers
            </Link>
            <Link href="/projects" className="block mb-2 text-gray-500 hover:text-gray-700">
              Project Managers
            </Link>
          </div>
        </div>

        <div className="flex w-full lg:w-fit flex-col items-center gap-4">
          <img src="/static/images/logo.svg" alt="Logo" className="h-8" />
          <div className="flex">
            <a className="social mr-2" href="https://www.facebook.com/CodeLabDavis" target="_blank">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a className="social mr-2" href="https://twitter.com/CodeLabDavis" target="_blank">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a className="social" href="https://www.instagram.com/codelabdavis" target="_blank">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
