'use client'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Page() {
  const images = [
    '/static/images/carousel/1.jpg',
    '/static/images/carousel/2.jpg',
    '/static/images/carousel/3.jpg',
    '/static/images/carousel/4.jpg',
    '/static/images/carousel/5.jpg',
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-20 bg-warm-bg text-[#2F261E]">
      <div className="text-center w-full px-8">


        <div className="flex items-center justify-center gap-4 mb-4">
          <img src="/static/images/logo.svg" alt="Logo" className="h-12" />
          <h1 className="text-5xl font-tienne"></h1>
        </div>
      
        <p className="font-space-mono text-sm max-w-md mx-auto mb-12">
          Get access to custom curated workshops, files, slides,
          video's and more
        </p>
        <div className="flex gap-6 items-center justify-center mb-32"></div>
        
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
              <div className="h-[280px] bg-gray-200">
                <img 
                  src="/static/images/carousel/1.jpg"
                  alt="Codelab team 1"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="h-[280px] bg-gray-200">
                <img 
                  src="/static/images/carousel/2.jpg"
                  alt="Codelab team 2"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="h-[280px] bg-gray-200">
                <img 
                  src="/static/images/carousel/3.jpg"
                  alt="Codelab team 3"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="h-[280px] bg-gray-200">
                <img 
                  src="/static/images/carousel/4.jpg"
                  alt="Codelab team 4"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="h-[280px] bg-gray-200">
                <img 
                  src="/static/images/carousel/5.jpg"
                  alt="Codelab team 5"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
          <p className="font-space-mono text-xs text-right mt-4 mb-32">
            A Student run organization
            <br />
            at university of california, davis
          </p>

          <div className="text-center mb-32">
          <div className="flex justify-center mb-6">
          <img src="/static/images/bookicon.png" alt="Book Icon" className="w-20 h-20" />
        </div>
            <h2 className="text-4xl font-tienne mb-20">Unlock. Learn. Create.</h2>
            
            <div className="grid grid-cols-2 gap-20 max-w-4xl mx-auto px-4">
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
