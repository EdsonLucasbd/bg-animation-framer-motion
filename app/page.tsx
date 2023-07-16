'use client'

import Image from 'next/image'
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion'
import { MouseEvent } from 'react'
import Link from 'next/link'

export default function Home() {
  let year = new Date().getFullYear()
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div
        onMouseMove={handleMouseMove}
        className="relative flex justify-center group w-96 h-96 max-w-lg text-violet-600 rounded-3xl border border-gray-900">
        <motion.div
          className='absolute flex justify-center items-center -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300'
          style={{
            background: useMotionTemplate`radial-gradient(330px circle at ${mouseX}px ${mouseY}px, rgb(124 58 237 / 0.25), transparent 70%)`
          }} />

        <Image
          className="dark:drop-shadow-[0_0_.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

      </div>

      <footer className='fixed group bottom-0 text-white text-xs font-thin flex items-center justify-center w-full h-10 bg-zinc-950'>
        <Link className='transition duration-300  group-hover:text-blue-300 group-hover:underline group-hover:underline-offset-2 group-hover:decoration-blue-300 group-hover:decoration-wavy group-hover:decoration-1' href={'https://github.com/EdsonLucasbd'} rel='noreferrer noopener'>Edson Lucas </Link>&nbsp;- {year}
      </footer>
    </main>
  )
}
