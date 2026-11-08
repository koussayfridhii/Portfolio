import PropTypes from "prop-types";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  status,
  projectType,
  coverLabel,
  imageFit,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[600px]'
      >
        <div className='relative w-full h-[230px]'>
          {image ? (
            <img
              src={image}
              alt={`${name} ${imageFit === "contain" ? "logo" : "project preview"}`}
              loading="lazy"
              className={`w-full h-full rounded-2xl ${imageFit === "contain" ? "object-contain bg-white p-7" : "object-cover"}`}
            />
          ) : (
            <div className='h-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#30235b] via-[#17112f] to-[#0c2631] p-7 flex flex-col justify-between'>
              <span className='text-xs uppercase tracking-[0.2em] text-[#c9b8ff]'>
                {name === "IAgriculture" ? "Agriculture & IoT" : "Education platform"}
              </span>
              <span className='text-white font-bold text-[28px] leading-tight'>{name}</span>
              <span className='text-secondary text-sm'>{coverLabel}</span>
            </div>
          )}

          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name} website (opens in a new tab)`}
              className='absolute top-3 right-3 violet-gradient w-10 h-10 rounded-full flex justify-center items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
            >
              <img src={link} alt='' className='w-full h-full object-contain' />
            </a>
          )}
        </div>

        <div className='mt-5'>
          {(status || projectType) && (
            <div className='mb-3 flex flex-wrap gap-2 text-xs leading-relaxed'>
              {status && (
                <span className={`rounded-full border px-3 py-1 ${status === "In progress" ? "border-amber-300/30 bg-amber-300/10 text-amber-200" : "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"}`}>
                  {status}
                </span>
              )}
              {projectType && <span className='rounded-xl border border-white/15 px-3 py-1 text-secondary'>{projectType}</span>}
            </div>
          )}
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired, color: PropTypes.string.isRequired })).isRequired,
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  status: PropTypes.string,
  projectType: PropTypes.string,
  coverLabel: PropTypes.string,
  imageFit: PropTypes.string,
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A selection of completed projects, ongoing work, and academic research.
          From learning platforms and marketplaces to a personal assistant and
          agricultural IoT, these projects reflect how I turn ideas into practical
          solutions. Public websites are linked where available.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "", 0.05);