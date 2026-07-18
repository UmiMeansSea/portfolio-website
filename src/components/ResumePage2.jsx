import React from 'react';
import imgTable from '../assets/imgTable.png';
import imgStickyNote from '../assets/imgStickyNote.png';
import imgImage32 from '../assets/imgImage32.png';
import imgImage33 from '../assets/imgImage33.png';
import imgImage34 from '../assets/imgImage34.png';
import imgImage14 from '../assets/imgImage14.png';
import imgImage11 from '../assets/imgImage11.png';
import imgImage12 from '../assets/imgImage12.png';
import imgResume from '../assets/imgResume.png';
import imgCreases from '../assets/imgCreases.svg';
import imgLine1 from '../assets/imgLine1.svg';


const ResumePage2 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-transparent relative w-[1590px] h-[1142px]" {...props} data-node-id="77:114" data-name="Resume_page2">
      <div className="absolute contents left-[-62px] top-0" data-node-id="77:115" data-name="table n portfolio">
        <div className="absolute flex h-[1142px] items-center justify-center left-[-62px] top-0 w-[1714px]" data-node-id="77:116">
          <div className="flex-none rotate-90">
            <div className="h-[1714px] relative w-[1142px]" data-name="table">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTable} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents cursor-pointer left-[428px] top-[79px]" data-node-id="77:122" data-name="bookmark">
        <a className="absolute contents left-[1268px] top-[101px]" data-node-id="77:123" data-name="Creativity" onClick={(e) => { e.preventDefault(); props.onBookmarkClick && props.onBookmarkClick(6); }}>
          <div className="absolute bg-[rgba(45,216,202,0.8)] border border-[rgba(4,1,1,0.2)] border-solid h-[71px] left-[1268px] top-[101px] w-[61px]" data-node-id="77:124" />
          <div className="absolute flex h-[28.48px] items-center justify-center left-[1277px] top-[117px] w-[43.632px]" data-node-id="77:125">
            <div className="flex-none rotate-[-12.54deg] skew-x-[1.03deg]">
              <p className="[word-break:break-word] font-brush h-[20.412px] leading-[normal] not-italic relative text-[15px] text-white w-[39.792px]">Works</p>
            </div>
          </div>
        </a>
        <a className="absolute contents left-[1189px] top-[93px]" data-node-id="77:126" data-name="Highlights" onClick={(e) => { e.preventDefault(); props.onBookmarkClick && props.onBookmarkClick(2); }}>
          <div className="absolute bg-[rgba(216,119,45,0.8)] border border-[rgba(4,1,1,0.2)] border-solid h-[58px] left-[1189px] top-[93px] w-[61px]" data-node-id="77:127" />
          <div className="absolute flex h-[26.905px] items-center justify-center left-[1189.31px] top-[103.43px] w-[63.667px]" data-node-id="77:128">
            <div className="flex-none rotate-[-10.3deg] scale-y-99 skew-x-[6.17deg]">
              <p className="[word-break:break-word] font-brush h-[16.902px] leading-[normal] not-italic relative text-[15px] text-white w-[59.841px]">Highlights</p>
            </div>
          </div>
        </a>
        <a className="absolute contents left-[428px] top-[79px]" data-node-id="77:129" data-name="Home" onClick={(e) => { e.preventDefault(); props.onBookmarkClick && props.onBookmarkClick(0); }}>
          <div className="absolute bg-[#cf7ab3] border border-[rgba(4,1,1,0.2)] border-solid h-[73px] left-[428px] top-[79px] w-[61px]" data-node-id="77:130" />
          <div className="absolute flex h-[25.422px] items-center justify-center left-[444px] top-[89.31px] w-[55.265px]" data-node-id="77:131">
            <div className="flex-none rotate-[-6.08deg] skew-x-[0.68deg]">
              <p className="[word-break:break-word] font-brush h-[19.919px] leading-[normal] not-italic relative text-[16px] text-white w-[53.219px]">Intro</p>
            </div>
          </div>
        </a>
      </div>
      <div className="absolute border border-[red] border-solid h-[842px] left-[200px] overflow-clip shadow-[-11px_4px_4px_0px_rgba(0,0,0,0.25)] top-[150px] w-[1190px]" data-node-id="77:132">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <div className="absolute bg-gradient-to-r from-[28.442%] from-[rgba(0,0,0,0)] inset-0 mix-blend-multiply to-[rgba(0,0,0,0.17)] via-[64.221%] via-[rgba(51,51,51,0)]" />
        </div>
        <div className="absolute h-[841px] left-[-9px] top-[15px] w-[1188px]" data-node-id="77:133" data-name="creases">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCreases} />
        </div>
        <div className="absolute flex h-[849px] items-center justify-center left-1/2 top-[-1px] w-0" data-node-id="77:136">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[849px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[calc(50%_+_299px)] top-[510px]" data-node-id="77:137" data-name="sticky note">
          <div className="absolute h-[338px] left-[calc(50%_+_299px)] top-[511px] w-[321px]" data-node-id="77:138" data-name="sticky note">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStickyNote} />
          </div>
          <div className="absolute flex h-[39.722px] items-center justify-center left-[calc(50%_+_433.52px)] top-[597.64px] w-[101.965px]" data-node-id="77:139">
            <div className="flex-none rotate-[1.55deg]">
              <p className="[word-break:break-word] font-heading-zine h-[37px] leading-[normal] not-italic relative text-[#1d0000] text-[24px] w-[101px]">skills</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[209px] left-[92px] shadow-[-1px_4px_4px_0px_rgba(0,0,0,0.25)] top-[291px] w-[192px]" data-node-id="77:140" data-name="image 32">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage32} />
        </div>
        <div className="absolute h-[169px] left-[calc(50%_+_111px)] shadow-[-3px_4px_4px_0px_rgba(0,0,0,0.25)] top-[67px] w-[355px]" data-node-id="77:141" data-name="image 33">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[115.38%] left-[-3.39%] max-w-none top-[-15.38%] w-[103.4%]" src={imgImage33} />
          </div>
        </div>
        <div className="absolute h-[128px] left-[292px] shadow-[-3px_4px_4px_0px_rgba(0,0,0,0.25)] top-[570px] w-[270px]" data-node-id="77:142" data-name="image 34">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[115.31%] left-[-2.96%] max-w-none top-[-15.31%] w-[103.01%]" src={imgImage34} />
          </div>
        </div>
        <div className="absolute contents left-[18px] top-[4px]" data-node-id="77:143" data-name="tape">
          <div className="absolute left-[calc(50%_+_256.84px)] shadow-[-3px_4px_4px_0px_rgba(0,0,0,0.25)] size-[80px] top-[5px]" data-node-id="77:144" data-name="image 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
          </div>
          <div className="absolute flex h-[189.506px] items-center justify-center left-[19px] top-[196.14px] w-[198.17px]" data-node-id="77:145">
            <div className="flex-none rotate-[-49.56deg]">
              <div className="h-[176px] relative shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.25)] w-[99px]" data-name="image 11">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[69.987px] items-center justify-center left-[256px] top-[532px] w-[73.439px]" data-node-id="77:146">
            <div className="flex-none rotate-[-97.4deg]">
              <div className="h-[66px] relative w-[62px]" data-name="image 12">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[75.167px] items-center justify-center left-[527px] top-[532px] w-[71.867px]" data-node-id="77:147">
            <div className="flex-none rotate-[9.32deg]">
              <div className="h-[66px] relative w-[62px]" data-name="image 13">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[7.59%] max-w-none top-[-0.67%] w-[100.99%]" src={imgImage12} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-brush h-[88px] leading-[normal] left-[142px] not-italic text-[#4c3131] text-[128px] top-[72px] w-[372px]" data-node-id="77:148">
          Projects
        </p>
        <div className="absolute flex h-[192.184px] items-center justify-center left-[calc(50%_+_341px)] top-[627px] w-[215.474px]" data-node-id="77:149">
          <div className="flex-none rotate-[1.72deg]">
            <div className="[word-break:break-word] font-body-zine h-[185.98px] leading-[0] not-italic opacity-83 relative text-[12px] text-black tracking-[0.72px] w-[210px]">
              <p className="mb-0">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-[8.5%] decoration-solid leading-[normal] tracking-[0.96px] underline">Languages:</span>
                <span className="leading-[normal]">{` JavaScript/TypeScript, Python, Dart`}</span>
              </p>
              <p className="mb-0">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-[8%] decoration-solid leading-[normal] tracking-[0.96px] underline">Frontend</span>
                <span className="leading-[normal]">: React 18, Next.js, Flutter</span>
              </p>
              <p className="leading-[normal] mb-0">Backend: Node.js, PostgreSQL, MongoDB, Firebase</p>
              <p className="mb-0">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-[8.5%] decoration-solid leading-[normal] tracking-[0.96px] underline">{`Data & ML`}</span>
                <span className="leading-[normal]">: Scikit-learn, Pandas, Supervised Learning</span>
              </p>
              <p>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-[9%] decoration-solid leading-[normal] tracking-[0.96px] underline">{`Design & UI`}</span>
                <span className="leading-[normal]">: Figma, UI/UX Prototyping, Component-Driven Architecture</span>
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute font-heading-zine h-[178px] leading-[0] left-[333px] not-italic text-[0px] text-black top-[269px] w-[225px]" data-node-id="77:150">
          <p className="font-body-zine leading-[normal] mb-0 text-[20px]">The 21st Romanticists</p>
          <ul className="list-disc">
            <li className="mb-0 ms-[calc(var(_-__-_list_-_marker_-_font_-_size,0)*1.5*1)]">
              <span className="[word-break:break-word] font-body-zine leading-[normal] not-italic text-[16px]">Literary blogging platform built with Flutter and Firebase.</span>
            </li>
            <li className="mb-0 ms-[calc(var(_-__-_list_-_marker_-_font_-_size,0)*1.5*1)]">
              <span className="[word-break:break-word] font-body-zine leading-[normal] not-italic text-[16px]">Supports 200+ readers with immersive reading modes.</span>
            </li>
            <li className="ms-[calc(var(_-__-_list_-_marker_-_font_-_size,0)*1.5*1)]">
              <span className="[word-break:break-word] font-body-zine leading-[normal] not-italic text-[16px]">Features Firestore-synced bookmarks and push notifications.</span>
            </li>
          </ul>
        </div>
        <div className="[word-break:break-word] absolute font-body-zine h-[264px] leading-[0] left-[calc(50%_+_42px)] not-italic text-[20px] text-black top-[246px] w-[480px]" data-node-id="77:151">
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <p className="font-body-zine leading-[normal] mb-0 whitespace-pre-wrap">{`SAMS (Structural Authority Mapping System) `}</p>
          <ul className="list-disc">
            <li className="mb-0 ms-[30px]">
              <span className="leading-[normal]">Architected an interactive Organization Mapping application using React and Vite, featuring dynamic, canvas-based visualizations for complex group and personnel hierarchies</span>
            </li>
            <li className="ms-[30px]">
              <span className="leading-[normal]">Implemented secure user access controls and state management, whilst documenting complete system requirements via formal IEEE 830 Software Requirements Specifications.</span>
            </li>
          </ul>
        </div>
        <div className="[word-break:break-word] absolute font-body-zine leading-[0] left-[60px] not-italic text-[16px] text-black top-[551px] w-[238px]" data-node-id="77:152">
          <p className="font-body-zine leading-[normal] mb-0">MentorPath</p>
          <ul className="list-disc">
            <li className="mb-0 ms-[24px]">
              <span className="leading-[normal]">Mentor-mentee SaaS platform supporting 50+ concurrent users.</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[normal]">Built with Next.js, TypeScript, and Prisma ORM.</span>
            </li>
            <li className="ms-[24px]">
              <span className="leading-[normal]">Features role-based dashboards, real-time messaging, and an 8-table PostgreSQL schema.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute contents left-[357px] top-[89px]" data-node-id="77:153" data-name="bookmark active">
        <div className="absolute bg-[rgba(45,136,216,0.8)] border border-[rgba(4,1,1,0.2)] border-solid h-[151px] left-[357px] top-[89px] w-[61px]" data-node-id="77:154" />
        <div className="absolute flex h-[52.585px] items-center justify-center left-[360px] top-[106.03px] w-[55.265px]" data-node-id="77:155">
          <div className="flex-none rotate-[-12.44deg] scale-y-99 skew-x-[-9.15deg]">
            <p className="[word-break:break-word] font-brush h-[40.983px] leading-[normal] not-italic relative text-[16px] text-white w-[54.19px]">Projects</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-black border-solid h-[1029px] left-[361px] shadow-[-7px_4px_4px_0px_rgba(0,0,0,0.25)] top-[32px] w-[795px]" data-node-id="77:344" data-name="resume" onClick={() => { props.onToggleResume && props.onToggleResume(false); }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgResume} />
      </div>
    </div>
  );
});

export default ResumePage2;
