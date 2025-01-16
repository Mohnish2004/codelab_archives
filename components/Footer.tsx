import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

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

        <div className="flex w-full lg:w-fit gap-4">
          <a href={siteMetadata.facebook} className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={5} />
          </a>
          <a href={siteMetadata.twitter} className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
          </a>
          <a href={siteMetadata.instagram} className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={5} />
          </a>
        </div>
      </div>
    </footer>
  )
}
