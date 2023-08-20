// 'use client';

// import { motion } from 'framer-motion';

// import styles from '../styles';
// import { TitleText, TypingText } from '../components';
// import { fadeIn, staggerContainer } from '../utils/motion';

// const World = () => (
//   <section className={`${styles.paddings} relative z-10`}>
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`${styles.innerWidth} mx-auto flex flex-col`}
//     >

     

//       <motion.div
//         variants={fadeIn('up', 'tween', 0.3, 1)}
//         className="relative mt-[68px] flex w-full h-[550px]"
//       >
//         {/* <img src="/map.png" alt="map" className="w-full h-full object-cover" /> */}

//         <div className="absolute bottom-20 right-20 w-[700px] h-[400px] p-[6px] ">
//           <img src="1.png" alt="people" className="w-full h-full" />
//         </div>

//         <div className="absolute top-10 left-20 w-[700px] h-[400px] p-[6px] ">
//           <img src="4.png" alt="people" className="w-full h-full" />
//         </div>


//       </motion.div>
//     </motion.div>
//   </section>
// );

// export default World;
'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
     
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="1.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="4.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
        <div className="right">
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
