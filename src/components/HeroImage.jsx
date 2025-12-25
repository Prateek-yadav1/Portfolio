import { useRef } from "react"
import profile from "../assets/Prateek.jpeg"
import React from 'react';

export default function HeroImage() {
  const imgRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -40
    const rotateY = ((x - centerX) / centerX) * 40

    imgRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.25, 1.25, 1.25)
    `
  }

  const handleMouseLeave = () => {
    imgRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `
  }

  return (
    <img
      ref={imgRef}
      src={profile}
      alt="Profile"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        h-80 w-80 object-cover rounded-full
        border-8 border-zinc-900
        bg-black
        shadow-2xl hover:shadow-yellow-400
        transition-transform duration-300 ease-out
        will-change-transform
        cursor-pointer
      "
    />
  )
}
