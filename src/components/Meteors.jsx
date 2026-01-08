import React, { useMemo } from "react"

import { twMerge } from "tailwind-merge"

/**
 * @typedef {Object} MeteorsProps
 * @property {number} [number=20]
 * @property {number} [minDelay=0.2]
 * @property {number} [maxDelay=1.2]
 * @property {number} [minDuration=2]
 * @property {number} [maxDuration=10]
 * @property {number} [angle=215]
 * @property {string} [className]
 */

/**
 * @param {MeteorsProps} props
 */
export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}) => {
  const meteorStyles = useMemo(() => {
    return [...new Array(number)].map(() => {
      const randomLeft = Math.floor(Math.random() * window.innerWidth)
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay
      const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)
      
      return {
        "--angle": -angle + "deg",
        top: "-5%",
        left: `calc(0% + ${randomLeft}px)`,
        animationDelay: randomDelay + "s",
        animationDuration: randomDuration + "s",
      }
    })
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={twMerge(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  )
}
