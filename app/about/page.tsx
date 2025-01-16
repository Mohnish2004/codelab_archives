import Image from 'next/image'
import Link from 'next/link'
import { HiGlobeAlt } from 'react-icons/hi'
import { GoCode } from 'react-icons/go'
import { BiBookBookmark } from 'react-icons/bi'
import { FaLinkedin, FaInstagram, FaTwitter, FaMedium } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-8">
      {/* Hero Image */}
      <div className="relative mb-8 w-full">
        <Image
          src="/static/images/group.png"
          alt="CodeLab Community Group Photo"
          width={1200}
          height={675}
          className="rounded-lg"
        />
      </div>

      {/* Letter Content */}
      <div className="mb-40 mt-16 max-w-2xl space-y-8">
        <p className="text-lg leading-relaxed">
          This website serves as a bridge to our community, providing access to workshops, archives,
          and information about our programs. It reflects our mission to inspire, educate, and
          foster growth in a transparent and accessible way.
        </p>

        <p className="text-lg leading-relaxed">
          As students ourselves, we understand the importance of mutual support and growth in the
          tech community. While we maintain a selective cohort to ensure high-quality project
          delivery, we believe in making our resources, knowledge, and tools accessible to everyone.
          Through our open-source initiatives, workshops, and educational content, we're committed
          to helping all students thrive in their technical journeys.
        </p>

        <p className="text-lg leading-relaxed">
          <Link
            href="https://codelabdavis.com/about"
            className="text-gray-900 underline hover:text-gray-600"
          >
            Learn more about us
          </Link>
        </p>

        <div className="pt-4">
          <p className="font-semibold">Mohnish Gopi</p>
          <p>President 24-25, CodeLab</p>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="mb-16 w-full">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Our Platforms</h2>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          <PlatformCard
            href="https://codelabdavis.com"
            title="Main Website"
            icon={<HiGlobeAlt className="h-5 w-5" />}
          />
          <PlatformCard
            href="https://os.codelabdavis.com"
            title="Open Source"
            icon={<GoCode className="h-5 w-5" />}
          />
          <PlatformCard
            href="https://codelabdavis.com/toolkit"
            title="Toolkit"
            icon={<BiBookBookmark className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Connect Section */}
      <div className="w-full">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Connect With Us</h2>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-5">
          <SocialCard
            href="https://www.linkedin.com/company/codelabdavis/"
            platform="LinkedIn"
            icon={<FaLinkedin className="h-6 w-6" />}
          />
          <SocialCard
            href="https://www.instagram.com/codelabdavis/"
            platform="Instagram"
            icon={<FaInstagram className="h-6 w-6" />}
          />
          <SocialCard
            href="https://twitter.com/codelabdavis"
            platform="Twitter"
            icon={<FaTwitter className="h-6 w-6" />}
          />
          <SocialCard
            href="https://codelabdavis.medium.com"
            platform="Medium"
            icon={<FaMedium className="h-6 w-6" />}
          />
          <SocialCard
            href="mailto:codelabdavis@gmail.com"
            platform="Email"
            icon={<MdEmail className="h-6 w-6" />}
          />
        </div>
      </div>
    </div>
  )
}

function PlatformCard({
  href,
  title,
  icon,
}: {
  href: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:bg-gray-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-gray-600 transition-colors group-hover:text-gray-900">{icon}</div>
      <div className="flex flex-1 items-center justify-between">
        <span className="font-medium text-gray-900">{title}</span>
        <span className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-gray-600">
          →
        </span>
      </div>
    </Link>
  )
}

function SocialCard({
  href,
  platform,
  icon,
}: {
  href: string
  platform: string
  icon: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-gray-400 transition-colors duration-200 group-hover:text-amber-800">
        {icon}
      </div>
      <span className="text-xs text-gray-500 transition-colors duration-200 group-hover:text-amber-700">
        {platform}
      </span>
    </Link>
  )
}
