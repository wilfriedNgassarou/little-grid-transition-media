import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react"
import { ArrowRight } from "./svgs/arrow-right";

export function Screen1({ setActiveScreen }: { setActiveScreen: Dispatch<SetStateAction<'screen 1' | 'screen 2'>> }) {
  const [isExpended, setIsExpended] = useState(false) ;

  const images = [
    {
      src: '/image-1.webp',
      zIndex: 4,
      rotate: 0
    },
    {
      src: '/image-2.webp',
      zIndex: 5,
      rotate: 0
    },
    {
      src: '/image-3.webp',
      zIndex: 6,
      rotate: 0
    },
    {
      src: '/image-4.webp',
      zIndex: 3,
      rotate: 12
    },
    {
      src: '/image-5.webp',
      zIndex: 2,
      rotate: 18
    },
    {
      src: '/image-6.webp',
      zIndex: 1,
      rotate: -12
    },
  ]

  return (
    <section className="w-full h-full relative pt-14">
      <AnimatePresence initial={false} mode="popLayout">
        {
          isExpended && (
            <div className="absolute top-6 left-0 w-full flex justify-center">
              <motion.span
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                exit={{ y: -80 }}
                transition={{ duration: .2, bounce: 0 }}
                onClick={() => setIsExpended(false)} 
                className="bg-blue-500 text-white cursor-pointer px-10 py-2 rounded-full font-semibold"
              >
                Close
              </motion.span>
            </div>
          )
        }
      </AnimatePresence>
      <MotionConfig transition={{ duration: .9, bounce: .45, type: 'spring' }}>
        {
          isExpended == false ? 
          (
            <div className="flex justify-center">
              {
                images.map((item, index) => (
                  <motion.img
                    key={index}
                    layoutId={`image-${index}`}
                    animate={{ rotate: item.rotate }}
                    onClick={() => setIsExpended(true)}
                    src={item.src}
                    className="w-32 h-32 absolute object-cover"
                    style={{ borderRadius: 16, zIndex: item.zIndex }}
                  />
                ))
              }
            </div>
          )
          :
          (
            <section className="grid w-full h-full gap-6 grid-cols-3 px-72 py-8">
              {
                images.map((item, index) => (
                  <motion.img 
                    key={index}
                    layoutId={`image-${index}`}
                    src={item.src}
                    className="w-full h-full overflow-hidden object-cover"
                    style={{ zIndex: item.zIndex,  borderRadius: 12}}
                  />
                ))
              }
            </section>
          )
        }
      </MotionConfig>
      <div className="absolute bottom-8 right-8 cursor-pointer">
        <span
          className="flex justify-end items-center w-32 rounded-full border-2 border-[#292D32] border-opacity-40" 
          onClick={() => setActiveScreen('screen 2')}
        >
          <ArrowRight size={36} />
        </span>
      </div>
    </section>
  )
}