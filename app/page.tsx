'use client'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

export default function Page() {
  const images = [
    '/static/images/Pic14.png',
    '/static/images/Pic15.png',
    '/static/images/Pic18.png',
    '/static/images/Pic20.png',
    '/static/images/Pic25.png',
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-warm-bg pt-20 text-[#2F261E]">
      <div className="w-full px-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-4">
          <img src="/static/images/logo.svg" alt="Logo" className="h-12" />
        </div>

        <p className="mx-auto mb-12 max-w-md font-space-mono text-sm">
          Get access to custom curated workshops, files, slides, video's and more
        </p>
        <div className="mb-32 flex items-center justify-center gap-6"></div>

        {/* <div className="flex gap-6 items-center justify-center mb-32">
          <Link 
            href="/explore" 
            className="bg-[#2F261E] text-white px-6 py-2 font-space-mono text-sm"
          >
            Explore
          </Link>
          <Link 
            href="/about" 
            className="font-space-mono text-sm"
          >
            About us
          </Link>
        </div> */}

        <div>
          <div className="w-full">
            <div className="grid grid-cols-5 gap-3">
              <div className="h-[350px] bg-gray-200">
                <img
                  src="/static/images/Pic14.png"
                  alt="Codelab team 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[350px] bg-gray-200">
                <img
                  src="/static/images/Pic18.png"
                  alt="Codelab team 2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[350px] bg-gray-200">
                <img
                  src="/static/images/Pic20.png"
                  alt="Codelab team 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[350px] bg-gray-200">
                <img
                  src="/static/images/Pic25.png"
                  alt="Codelab team 4"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[350px] bg-gray-200">
                <img
                  src="/static/images/Pic29.png"
                  alt="Codelab team 5"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="mb-32 mt-10 text-right font-space-mono text-lg">
            A Student run organization
            <br />
            at university of california, davis
          </p>

          <div className="mb-32 text-center">
            <div className="mb-6 flex justify-center">
              <img src="/static/images/bookicon.png" alt="Book Icon" className="h-20 w-20" />
            </div>
            <h2 className="mb-20 font-tienne text-4xl">Unlock. Learn. Create.</h2>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-20 px-4">
              <div className="text-center">
                <p className="font-space-mono text-sm leading-relaxed">
                  Access step-by-step guides
                  <br />
                  and resources from past
                  <br />
                  workshops to explore and
                  <br />
                  learn at your own pace.
                </p>
              </div>

              <div className="text-center">
                <p className="font-space-mono text-sm leading-relaxed">
                  Revisit impactful
                  <br />
                  presentations and
                  <br />
                  recordings to strengthen
                  <br />
                  your understanding anytime.
                </p>
              </div>

              <div className="text-center">
                <p className="font-space-mono text-sm leading-relaxed">
                  Dive into blogs capturing
                  <br />
                  the highlights and stories
                  <br />
                  behind our events and
                  <br />
                  activities.
                </p>
              </div>

              <div className="text-center">
                <p className="font-space-mono text-sm leading-relaxed">
                  Showcasing our journey and
                  <br />
                  resources, the Archive
                  <br />
                  fosters openness and
                  <br />
                  community growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
