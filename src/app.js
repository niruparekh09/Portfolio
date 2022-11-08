import React, { useState } from 'react';
import { BsGithub, BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from 'react-icons/ai';
import nrv from './Images/nrv-3d-1.png';
import design from './Images/design.png';
import code from './Images/code.png';
import app1 from './Images/App 1.png';
import app2 from './Images/App 2.png';
import app3 from './Images/App 3.png';
import web1 from './Images/Web 1.png';
import web2 from './Images/Web 2.png';
import web3 from './Images/Web 3.png';
import webs1 from './Images/Website 1.png';
import webs2 from './Images/Website 2.png';
import webs3 from './Images/Website 3.png';
import webs4 from './Images/Website 4.png';
import webs5 from './Images/Website 5.png';
import webs6 from './Images/Website 6.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" text-xl font-burtons hidden sm:inline-block dark:text-white">
              Nirav Parekh
            </h1>
            <h1 className=" text-xl font-burtons inline-block sm:hidden dark:text-white">
              Nirav Parekh
            </h1>
            <ul className="flex items-center">
              <li className="px-1 sm:px-4">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" text-teal-500 cursor-pointer text-2xl sm:text-3xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-1 sm:m-6 dark:text-gray-900 dark:bg-white"
                  href="https://drive.google.com/file/d/1CKX68dqExsb6_7a5q1fhBg1v9chCuf8d/view?usp=share_link"
                  target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Nirav Parekh
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer
            </h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-blue-50">
              I am a React Developer and a UI/UX Designer. I also have knowledge
              of programming languages like C,C++,JavaScript,Java etc.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-10 py-3 text-gray-600  dark:text-blue-100 md:gap-16">
            <a href="mailto:niruparekh09@gmail.com">
              <AiFillMail className="w-3/4 md:w-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/nirav-parekh-2b3310197/"
              target="blank"
            >
              <AiFillLinkedin className="w-3/4 md:w-full" />
            </a>
            <a href="https://twitter.com/niruparekh09" target="blank">
              <AiFillTwitterCircle className="w-3/4 md:w-full" />
            </a>
            <a href="https://github.com/niruparekh09" target="blank">
                  <BsGithub className="w-3/4 md:w-full" />
                </a>
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-20 overflow-hidden sm:h-80 sm:w-80 md:h-96 md:w-96">
            <img
              src={nrv}
              alt="Nirav 3d avatar"
              layout="fill"
              objectFit="cover"
              className=" w-11/12 sm:w-full mt-3 ml-2 sm:m-0"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1 pt-10 dark:text-blue-50">
              Who I Am?
            </h3>
            <p className=" text-md py-5 leading-8 text-gray-800 dark:text-blue-50">
              Hello, My name is Nirav Parekh and I am a Raipur based student who
              is currently pursuing B.Tech. in Computer Science. I am a Frontend
              webdeveloper and have a good knowledge of technologies like
              <span className="text-teal-500">
                {' '}
                Reactjs,NextJs,Tailwind CSS,SCSS,JQuery{' '}
              </span>
              etc. I am also a{' '}
              <span className="text-teal-500">
                {' '}
                Internshala Certified UI/UX Designer{' '}
              </span>
              and have desgined many website and apps.
            </p>
            <p className=" text-md py-5 leading-8 text-gray-800 dark:text-blue-50">
              I have good knowledge of computer fundamentals and core CS
              subjects like Data Structures and Algorithm, OOPs, DBMS, OS,
              Computer Networking Etc.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border">
              <img
                src={design}
                width={100}
                height={100}
                alt="design"
                className=" m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-blue-50">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-blue-50">
                Creating elegant designs with a versatile understanding and for
                your needs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className=" text-gray-800 py-1 dark:text-blue-50">Photoshop</p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">Figma</p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">Adobe XD</p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">
                Adobe Illustrator
              </p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border">
              <img
                src={code}
                width={100}
                height={100}
                alt="design"
                className=" m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-blue-50">
                React Developer
              </h3>
              <p className="py-2 dark:text-blue-50">
                I develop beautiful and functional web apps using ReactJs and
                NextJs.
              </p>
              <h4 className="py-4 text-teal-600">Technology I Use</h4>
              <p className=" text-gray-800 py-1 dark:text-blue-50">
                ReactJs and NextJs
              </p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">HTML</p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">
                CSS and SASS
              </p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">
                JavaScript
              </p>
              <p className=" text-gray-800 py-1 dark:text-blue-50">
                Firebase (Backend)
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1 dark:text-blue-50">Portfolio</h3>
            <h4 className="text-xl py-4 text-teal-600">My Designs</h4>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <img
                src={web1}
                alt="img1"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={web2}
                alt="img2"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={web3}
                alt="img3"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={app1}
                alt="img3"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={app2}
                alt="img4"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={app3}
                alt="img5"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h4 className="text-xl py-4 text-teal-600">My Webistes</h4>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <a
                href="https://csb-lb0fv6.netlify.app/"
                target="blank"
                className=""
              >
                <img
                  src={webs1}
                  alt="img1"
                  className="rounded-lg object-cover hover:scale-1025 transition delay-150 duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                />
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a
                href="https://niruparekh09.github.io/Binge-er/"
                target="blank"
                className=""
              >
                <img
                  src={webs2}
                  alt="img2"
                  className="rounded-lg object-cover hover:scale-1025 transition delay-150 duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                />
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a
                href="https://niruparekh09.github.io/SWWIPE/"
                target="blank"
                className=""
              >
                <img
                  src={webs3}
                  alt="img3"
                  className="rounded-lg object-cover hover:scale-1025 transition delay-150 duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                />
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={webs4}
                alt="img3"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <a
                href="https://niruparekh09.github.io/MySite1/"
                target="blank"
                className=""
              >
                <img
                  src={webs5}
                  alt="img4"
                  className="rounded-lg object-cover hover:scale-1025 transition delay-150 duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                />
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={webs6}
                alt="img5"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <footer>
          <div className=" py-5 text-teal-600 text-center">
            niruparekh09@gmail.com | © 2022 Nirav Parekh
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
