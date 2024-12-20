import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { Screen1 } from "./components/screen1";
import { Screen2 } from "./components/screen2";
import { Credits } from "./components/credits";

function App() {
  const [activeScreen, setActiveScreen] = useState<'screen 1' | 'screen 2'>('screen 1') ;
  
  return (
    <section className="w-full h-dvh overflow-hidden">
      <Credits />
      <div className="fixed inset-0 lg:hidden flex items-center justify-center bg-white z-[999]">
        <h1 className="font-semibold">
          Please use a large screen !
        </h1>
      </div>
      <div className="hidden lg:block h-full w-full relative overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          {
            activeScreen == 'screen 1' ?
            (
              <motion.div 
                key="screen-1"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: .3, ease: 'linear' }}
                className="w-full h-full"
              > 
                <Screen1 setActiveScreen={setActiveScreen} />
              </motion.div>
            )
            :
            (
              <motion.div 
                key="screen-2"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: .3, ease: 'linear' }}
                className="w-full h-full absolute inset-0"
              >
                <Screen2 setActiveScreen={setActiveScreen} />
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </section>
  )
}

export default App
