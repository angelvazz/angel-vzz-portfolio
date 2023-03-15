import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Tabs.css';
import {
  AiFillGithub,
  AiFillHtml5,
  AiOutlineApi,
  AiOutlineCloudDownload,
} from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaAws, FaDocker, FaNode } from 'react-icons/fa';
import {
  SiCss3,
  SiDjango,
  SiExpress,
  SiGitlab,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import Card from './Card';

const tabs = [
  {
    icon: <HiOutlineDesktopComputer size={35} />,
    label: 'Front-End',
    component: <FrontEnd />,
  },
  {
    icon: <AiOutlineApi size={35} />,
    label: 'Back-End',
    component: <BackEnd />,
  },
  {
    icon: <AiOutlineCloudDownload size={35} />,
    label: 'Cloud',
    component: <Cloud />,
  },
];

function FrontEnd() {
  return (
    <div className="front-end">
      <img
        src="src/assets/meta-front-end-developer-certificate.png"
        alt="certificado"
        width={150}
        height={153}
      />
      <Card title="HTML" icon={<AiFillHtml5 size={48} />} />
      <Card title="CSS" icon={<SiCss3 size={48} />} />
      <Card title="JavaScript" icon={<SiJavascript size={48} />} />
      <Card title="TypeScript" icon={<SiTypescript size={48} />} />
      <Card title="Git" icon={<BsGit size={48} />} />
      <Card title="GitHub" icon={<AiFillGithub size={48} />} />
      <Card title="GitLab" icon={<SiGitlab size={48} />} />
      <Card title="React Js" icon={<SiReact size={48} />} />
      <Card title="React Native" icon={<SiReact size={48} />} />
      <Card title="Next Js" icon={<SiNextdotjs size={48} />} />
      <Card title="Redux" icon={<SiRedux size={48} />} />
    </div>
  );
}
function BackEnd() {
  return (
    <div className="front-end">
      <Card title="Node Js" icon={<FaNode size={60} />} />
      <Card title="Express Js" icon={<SiExpress size={48} />} />
      <Card title="Python" icon={<SiPython size={48} />} />
      <Card title="DJango" icon={<SiDjango size={48} />} />
      <Card title="MongoDB" icon={<SiMongodb size={48} />} />
      <Card title="MySQL" icon={<SiMysql size={60} />} />
      <Card title="Git" icon={<BsGit size={48} />} />
      <Card title="GitHub" icon={<AiFillGithub size={48} />} />
      <Card title="GitLab" icon={<SiGitlab size={48} />} />
    </div>
  );
}
function Cloud() {
  return (
    <div className="front-end">
      <Card title="AWS" icon={<FaAws size={60} />} />
      <div>s</div>
      <Card title="Docker" icon={<FaDocker size={48} />} />
      <div>s</div>
      <Card title="Terraform" icon={<SiTerraform size={48} />} />
    </div>
  );
}

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <h1 style={{ marginBottom: '50px', textAlign: 'center' }}>Skills</h1>
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? 'selected' : ''}
                onClick={() => setSelectedTab(item)}
              >
                {item.icon}
                {item.label}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence mode="await">
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 1, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{ duration: 0.00001 }}
            >
              {selectedTab ? selectedTab.component : null}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
