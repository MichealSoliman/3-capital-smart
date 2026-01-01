// 'use client';

// import { motion } from 'framer-motion';
// import { useTranslations } from 'next-intl';

// export default function TeamSection() {
//   const t = useTranslations('hiring'); // تأكد إنك اسم الـ namespace ده في ملفات الترجمة

//   return (
//     <section className="py-16 bg-gradient-to-b from-[#FAFAFA] to-white">
//       <div className="container mx-auto px-4 lg:px-[100px]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-center gap-12 max-w-[967px] mx-auto"
//         >
//           {/* Title & Description */}
//           <div className="text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-primary text-[32px] md:text-[42px] font-extrabold mb-6"
//             >
//               {t('team.title')}
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-[#475467] text-lg leading-8 max-w-2xl mx-auto"
//             >
//               {t('team.description')}
//             </motion.p>
//           </div>

//           {/* Team Member 1 */}
//           <TeamMember
//             name={t('teamMember.name')}
//             position={t('teamMember.position')}
//             experienceTitle={t('teamMember.experienceTitle')}
//             experience={t('teamMember.experience')}
//           />

//           {/* Team Member 2 */}
//           <TeamMember
//             name={t('teamMember-2.name')}
//             position={t('teamMember-2.position')}
//             experienceTitle={t('teamMember-2.experienceTitle')}
//             experience={t('teamMember-2.experience')}
//           />
//           {/* Team Member 3 */}
//           <TeamMember
//             name={t('teamMember-3.name')}
//             position={t('teamMember-3.position')}
//             experienceTitle={t('teamMember-3.experienceTitle')}
//             experience={t('teamMember-3.experience')}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Component صغير للعضو الواحد
// function TeamMember({
//   name,
//   position,
//   experienceTitle,
//   experience
// }: {
//   name: string;
//   position: string;
//   experienceTitle: string;
//   experience: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-full max-w-3xl bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 relative overflow-hidden"
//     >
//       <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -z-10" />
//       <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -z-10" />

//       <div className="flex flex-col items-center text-center relative z-10">
//         <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
//           <svg
//             width="40"
//             height="40"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
//               stroke="#EC2127"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
//               stroke="#EC2127"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>

//         <h3 className="text-primary text-[24px] font-bold mb-2">{name}</h3>
//         <p className="text-[#475467] text-lg mb-6">{position}</p>

//         <div className="w-full max-w-[600px] bg-[#FAFAFA] rounded-2xl p-6">
//           <h4 className="text-primary text-[20px] font-bold mb-4">{experienceTitle}</h4>
//           <ul className="list-disc list-inside text-[#475467] text-lg leading-8">
//             <li>{experience}</li>
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TeamSection() {
  const t = useTranslations('hiring');

  return (
    <section className="py-16 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-12 max-w-[967px] mx-auto"
        >
          {/* Title & Description */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-[32px] md:text-[42px] font-extrabold mb-6"
            >
              {t('team.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#475467] text-lg leading-8 max-w-2xl mx-auto"
            >
              {t('team.description')}
            </motion.p>
          </div>

          {/* Team Member 1 */}
          <TeamMember
            name={t('teamMember.name')}
            position={t('teamMember.position')}
            experienceTitle={t('teamMember.experienceTitle')}
            experience={t('teamMember.experience')}
            image={t('teamMember.image')}
          />

          {/* Team Member 2 */}
          <TeamMember
            name={t('teamMember-2.name')}
            position={t('teamMember-2.position')}
            experienceTitle={t('teamMember-2.experienceTitle')}
            experience={t('teamMember-2.experience')}
            image={t('teamMember-2.image')}
          />

          {/* Team Member 3 */}
          <TeamMember
            name={t('teamMember-3.name')}
            position={t('teamMember-3.position')}
            experienceTitle={t('teamMember-3.experienceTitle')}
            experience={t('teamMember-3.experience')}
            image={t('teamMember-3.image')}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ===== Team Member Component =====

function TeamMember({
  name,
  position,
  experienceTitle,
  experience,
  image
}: {
  name: string;
  position: string;
  experienceTitle: string;
  experience: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-3xl bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -z-10" />

      <div className="flex flex-col items-center text-center relative z-10">
        {/* Image (replaced icon) */}
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        <h3 className="text-primary text-[24px] font-bold mb-2">{name}</h3>
        <p className="text-[#475467] text-lg mb-6">{position}</p>

        <div className="w-full max-w-[600px] bg-[#FAFAFA] rounded-2xl p-6">
          <h4 className="text-primary text-[20px] font-bold mb-4">
            {experienceTitle}
          </h4>
          <ul className="list-disc list-inside text-[#475467] text-lg leading-8">
            <li>{experience}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
