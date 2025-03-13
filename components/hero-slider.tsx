import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { delay, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
    Fade(),
  ])

  const controlsH1Slide1 = useAnimation();
  const controlsH2Slide1 = useAnimation();
  const controlsH1Slide2 = useAnimation();
  const controlsH2Slide2 = useAnimation();
  const controlsH1Slide3 = useAnimation();
  const controlsH2Slide3 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView1) {
      controlsH1Slide1.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
      controlsH2Slide1.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controlsH1Slide1.start({ opacity: 0, y: -50 });
      controlsH2Slide1.start({ opacity: 0, y: 50 });
    }
  }, [inView1, controlsH1Slide1, controlsH2Slide1]);

  useEffect(() => {
    if (inView2) {
      controlsH1Slide2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
      controlsH2Slide2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controlsH1Slide2.start({ opacity: 0, y: -50 });
      controlsH2Slide2.start({ opacity: 0, y: 50 });
    }
  }, [inView2, controlsH1Slide2, controlsH2Slide2]);

  useEffect(() => {
    if (inView3) {
      controlsH1Slide3.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
      controlsH2Slide3.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controlsH1Slide3.start({ opacity: 0, y: -50 });
      controlsH2Slide3.start({ opacity: 0, y: 50 });
    }
  }, [inView3, controlsH1Slide3, controlsH2Slide3]);

  return (
    <div className="embla w-full h-screen bg-black" ref={emblaRef}>
      <div className="embla__container h-screen flex flex-row">
        <div className="embla__slide h-screen flex flex-[0_0_100%] object-none relative" ref={ref1}>
          <Image
            src={"/microscopio2.webp"}
            alt='microscopio'
            width={1920}
            height={1076}
            unoptimized={true}
            className='object-cover opacity-60'
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none text-white font-bold [text-shadow:_0_1px_5px_#000000]">
            <motion.h1
              className=" text-7xl"
              initial={{ opacity: 0, y: -50 }}
              animate={controlsH1Slide1}
            >
              O laboratório N°1 em análises.
            </motion.h1>
            <motion.h2
              className="text-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={controlsH2Slide1}
            >
              Somos especializados na prestação de serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade
            </motion.h2>
          </div>
        </div>
        
        <div className="embla__slide flex flex-[0_0_100%] object-none relative" ref={ref2}>
          <Image
            src={"/heroWater.webp"}
            alt='microscopio'
            width={1920}
            height={1076}
            unoptimized={true}
            className='object-cover opacity-60'
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none text-white font-bold [text-shadow:_0_1px_5px_#000000]">
            <motion.h1
              className="text-7xl"
              initial={{ opacity: 0, y: -50 }}
              animate={controlsH1Slide2}
            >
              Atendimento completo da portaria Nº888
            </motion.h1>
            <motion.h2
              className='text-2xl'
              initial={{ opacity: 0, y: 50 }}
              animate={controlsH2Slide2}
            >
              Somos especializados na prestação de serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade
            </motion.h2>
          </div>
        </div>

        <div className="embla__slide flex flex-[0_0_100%] object-none relative" ref={ref3}>
          <Image
            src={"/alimentosHero.webp"}
            alt='microscopio'
            width={1920}
            height={1076}
            unoptimized={true}
            className='object-cover opacity-60'
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none text-white font-bold [text-shadow:_0_1px_5px_#000000]">
            <motion.h1
              className="text-7xl"
              initial={{ opacity: 0, y: -50 }}
              animate={controlsH1Slide3}
            >
              Análise de Alimentos
            </motion.h1>
            <motion.h2
              className='text-2xl'
              initial={{ opacity: 0, y: 50 }}
              animate={controlsH2Slide3}
            >
              In natura, processados e ultraprocessados
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  )
}
