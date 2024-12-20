import { Dispatch, SetStateAction, useState } from "react";
import { ArrowRight } from "./svgs/arrow-right";
import { motion} from "framer-motion";

export function Screen2({ setActiveScreen }: { setActiveScreen: Dispatch<SetStateAction<'screen 1' | 'screen 2'>> }) {
  const albums = [
    {
      label: 'Album #1',
      images: [
        {
          src: '/image-6.webp',
          rotate: -10,
          zIndex: 1
        },
        {
          src: '/image-2.webp',
          rotate: 6,
          zIndex: 5
        },
        {
          src: '/image-4.webp',
          rotate: 0,
          zIndex: 1
        },
        {
          src: '/image-1.webp',
          rotate: 0,
          zIndex: 3
        },
        {
          src: '/image-5.webp',
          rotate: 16,
          zIndex: 4
        }
      ]
    },  
    {
      label: 'Album #2',
      images: [
        {
          src: '/image-7.webp',
          rotate: 0,
          zIndex: 3
        },
        {
          src: '/image-1.webp',
          rotate: 16,
          zIndex: 4
        },
        {
          src: '/image-8.webp',
          rotate: 0,
          zIndex: 2
        },
        {
          src: '/image-9.webp',
          rotate: -8,
          zIndex: 1
        },
        {
          src: '/image-10.webp',
          rotate: 6,
          zIndex: 5
        }
      ]
    },  
    {
      label: 'Album #3',
      images: [
        {
          src: '/image-11.webp',
          rotate: -8,
          zIndex: 1
        },
        {
          src: '/image-9.webp',
          rotate: 0,
          zIndex: 2
        },
        {
          src: '/image-12.webp',
          rotate: 16,
          zIndex: 3
        },
        {
          src: '/image-13.webp',
          rotate: 6,
          zIndex: 4
        }
      ]
    },  
    {
      label: 'Album #4',
      images: [
        {
          src: '/image-14.webp',
          rotate: 16,
          zIndex: 3
        },
        {
          src: '/image-15.webp',
          rotate: -8,
          zIndex: 1
        },
        {
          src: '/image-16.webp',
          rotate: 6,
          zIndex: 4
        },
        {
          src: '/image-17.webp',
          rotate: 0,
          zIndex: 2
        }
      ]
    },
    {
      label: 'Album #6',
      images: [
        {
          src: '/image-6.webp',
          rotate: -8,
          zIndex: 1
        },
        {
          src: '/image-2.webp',
          rotate: 6,
          zIndex: 5
        },
        {
          src: '/image-4.webp',
          rotate: 0,
          zIndex: 1
        },
        {
          src: '/image-1.webp',
          rotate: 0,
          zIndex: 3
        },
        {
          src: '/image-5.webp',
          rotate: 16,
          zIndex: 4
        }
      ]
    }
  ] as const 

  const [activeAlbum, setActiveAlbum] = useState<null | typeof albums[number]>(null)

  return (
      <section className="w-full h-full relative">
        {
          activeAlbum != null && (
            <motion.div
              layoutId={`album-${activeAlbum.label}`}
              onClick={() => setActiveAlbum(null)}
              className="absolute inset-0 h-full grid grid-cols-4 gap-4 px-40 py-5 z-20"
            >
              {
                activeAlbum.images.map((item, index) => (
                  <motion.img
                    key={index} 
                    src={item.src}
                    layoutId={`album-${activeAlbum.label}-${index}`}
                    className="object-cover"
                    style={{ borderRadius: 12, height: 288, width: 288 }}
                  />
                ))
              }
            </motion.div>
          )
        }

        {
          <section className="grid grid-cols-3 w-full h-full gap-4 px-40 py-20">
            {
              albums.map((item, index) => (
                <motion.div
                  key={index}
                  style={{ zIndex: index + 1 }}
                  onClick={() => setActiveAlbum(item) }
                  layoutId={`album-${item.label}`}
                  className="w-full h-full flex justify-center items-center bg-transparent hover:bg-gray-200/40 relative"
                >
                  {
                    item.images.map((i, j) => (
                      <motion.img
                        key={j} 
                        layout="preserve-aspect"
                        layoutId={`album-${item.label}-${j}`}
                        src={i.src}
                        initial={{ rotate: i.rotate }}
                        animate={{ rotate: i.rotate }}
                        className="absolute"
                        style={{ 
                          borderRadius: 12, 
                          zIndex: i.zIndex, 
                          width: 128, 
                          height: 128,
                          objectFit:"cover",
                          opacity: activeAlbum != null ? 0 : 1
                        }}
                      />
                    ))
                  }

                </motion.div>
              ))
            }
          </section>
        }


        <div className="absolute bottom-8 right-8 cursor-pointer">
          <span
            className="flex justify-end items-center w-32 rounded-full border-2 border-[#292D32] border-opacity-40" 
            onClick={() => setActiveScreen('screen 1')}
          >
            <ArrowRight size={36} />
          </span>
        </div>
      </section>
  )
}