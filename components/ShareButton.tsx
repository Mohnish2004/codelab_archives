'use client'

import toast from 'react-hot-toast'
import { useState } from 'react'

interface ShareButtonProps {
  className?: string
  iconClassName?: string
  text?: string
}

export default function ShareButton({
  className,
  iconClassName = 'h-4 w-4',
  text = 'Share',
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      toast.success('Link copied to clipboard!', {
        duration: 2000,
        position: 'bottom-right',
        style: {
          background: '#333',
          color: '#fff',
        },
      })

      // Reset the button after 2 seconds
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      toast.error('Failed to copy link', {
        duration: 2000,
        position: 'bottom-right',
      })
    }
  }

  return (
    <button onClick={handleShare} className={`${className} transition-all duration-200`}>
      {copied ? (
        <>
          <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
            />
          </svg>
          <span>{text}</span>
        </>
      )}
    </button>
  )
}
