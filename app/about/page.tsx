import Image from 'next/image'
import Link from 'next/link'
import { HiGlobeAlt } from 'react-icons/hi'
import { GoCode } from 'react-icons/go'
import { BiBookBookmark } from 'react-icons/bi'
import { 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter, 
  FaMedium 
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="w-full relative mb-8">
        <Image
          src="/static/images/group.png"
          alt="CodeLab Community Group Photo"
          width={1200}
          height={675}
          className="rounded-lg"
        />
      </div>

      {/* Letter Content */}
      <div className="space-y-8 mb-40 mt-16 max-w-2xl">
        <p className="text-lg leading-relaxed">
          This website serves as a bridge to our community, providing access to workshops, 
          archives, and information about our programs. It reflects our mission to inspire, 
          educate, and foster growth in a transparent and accessible way.
        </p>

        <p className="text-lg leading-relaxed">
          As students ourselves, we understand the importance of mutual support and growth 
          in the tech community. While we maintain a selective cohort to ensure high-quality 
          project delivery, we believe in making our resources, knowledge, and tools accessible 
          to everyone. Through our open-source initiatives, workshops, and educational content, 
          we're committed to helping all students thrive in their technical journeys.
        </p>
        
        <p className="text-lg leading-relaxed">
          <Link href="https://codelabdavis.com/about" className="text-gray-900 hover:text-gray-600 underline">
            Learn more about us
          </Link>
        </p>
        
        <div className="pt-4">
          <p className="font-semibold">Mohnish Gopi</p>
          <p>President 24-25, CodeLab</p>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="w-full mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <PlatformCard 
            href="https://codelabdavis.com" 
            title="Main Website"
            icon={<HiGlobeAlt className="w-5 h-5" />}
          />
          <PlatformCard 
            href="https://os.codelabdavis.com" 
            title="Open Source"
            icon={<GoCode className="w-5 h-5" />}
          />
          <PlatformCard 
            href="https://codelabdavis.com/toolkit" 
            title="Toolkit"
            icon={<BiBookBookmark className="w-5 h-5" />}
          />
        </div>
      </div>

      {/* Connect Section */}
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Connect With Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
          <SocialCard 
            href="https://www.linkedin.com/company/codelabdavis/" 
            platform="LinkedIn"
            icon={<FaLinkedin className="w-6 h-6" />}
          />
          <SocialCard 
            href="https://www.instagram.com/codelabdavis/" 
            platform="Instagram"
            icon={<FaInstagram className="w-6 h-6" />}
          />
          <SocialCard 
            href="https://twitter.com/codelabdavis" 
            platform="Twitter"
            icon={<FaTwitter className="w-6 h-6" />}
          />
          <SocialCard 
            href="https://codelabdavis.medium.com" 
            platform="Medium"
            icon={<FaMedium className="w-6 h-6" />}
          />
          <SocialCard 
            href="mailto:codelabdavis@gmail.com" 
            platform="Email"
            icon={<MdEmail className="w-6 h-6" />}
          />
        </div>
      </div>
    </div>
  )
}

function PlatformCard({ href, title, icon }: { 
  href: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <Link 
      href={href}
      className="p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center gap-3 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-gray-600 group-hover:text-gray-900 transition-colors">
        {icon}
      </div>
      <div className="flex items-center justify-between flex-1">
        <span className="font-medium text-gray-900">{title}</span>
        <span className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all">
          →
        </span>
      </div>
    </Link>
  )
}

function SocialCard({ href, platform, icon }: { 
  href: string
  platform: string
  icon: React.ReactNode
}) {
  return (
    <Link 
      href={href}
      className="flex flex-col items-center gap-2 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-gray-400 group-hover:text-amber-800 transition-colors duration-200">
        {icon}
      </div>
      <span className="text-xs text-gray-500 group-hover:text-amber-700 transition-colors duration-200">
        {platform}
      </span>
    </Link>
  )
}
