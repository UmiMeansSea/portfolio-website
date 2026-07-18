import React from 'react';
import imgTable from '../assets/imgTable.png';
import imgPassportPhoto from '../assets/imgPassportPhoto.png';
import imgImage29 from '../assets/imgImage29.png';
import imgRectangle2 from '../assets/imgRectangle2.png';
import imgImage28 from '../assets/imgImage28.png';
import imgImage27 from '../assets/imgImage27.png';
import imgImage30 from '../assets/imgImage30.png';
import imgLine1 from '../assets/imgLine1.svg';


const Page4 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-transparent relative w-[1590px] h-[1142px]" {...props} data-node-id="9:356" data-name="page4">
      <div className="absolute contents left-[-51px] top-0" data-node-id="32:405" data-name="table n portfolio">
        <div className="absolute flex h-[1142px] items-center justify-center left-[-51px] top-0 w-[1714px]" data-node-id="32:406">
          <div className="flex-none rotate-90">
            <div className="h-[1714px] relative w-[1142px]" data-name="table">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTable} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[904px] top-[150px]" data-node-id="32:407">
          <a className="absolute bg-[#f7f5f5] block border border-[rgba(0,0,0,0.5)] border-solid cursor-pointer h-[103px] left-[938px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1039px] w-[579px]" onClick={(e) => { e.preventDefault(); props.onToggleResume && props.onToggleResume(true); }} data-node-id="32:408" />
          <div className="absolute h-[30px] left-[973px] top-[1112px] w-[94px]" data-node-id="32:409" data-name="passport photo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[403.65%] left-0 max-w-none top-[-0.26%] w-full" src={imgPassportPhoto} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-brush h-[118px] leading-[normal] left-[904px] not-italic text-[#4c3131] text-[128px] top-[150px] w-[482px]" data-node-id="32:410">
            portfolio
          </p>
        </div>
        <p className="[word-break:break-word] absolute font-heading-zine h-[61px] leading-[normal] left-[1203px] not-italic text-[24px] text-black top-[1068px] w-[230px]" data-node-id="32:411">
          Resume
        </p>
      </div>
      <div className="absolute h-[842px] left-[200px] overflow-clip top-[150px] w-[1190px]" data-node-id="9:214" data-name="actual zine">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <div className="absolute bg-gradient-to-r from-[28.442%] from-[rgba(0,0,0,0)] inset-0 mix-blend-multiply to-[rgba(0,0,0,0.17)] via-[64.221%] via-[rgba(51,51,51,0)]" />
        </div>
        <div className="absolute h-[840px] left-[2px] top-px w-[593px]" data-node-id="9:215">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-white inset-0" />
            <div className="absolute bg-gradient-to-r from-[28.442%] from-[rgba(0,0,0,0)] inset-0 mix-blend-multiply to-[rgba(0,0,0,0.17)] via-[64.221%] via-[rgba(51,51,51,0)]" />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-brush h-[107px] leading-[normal] left-[150px] not-italic text-[#4c3131] text-[128px] top-0 w-[353px]" data-node-id="42:416">
          cinema
        </p>
        <div className="absolute contents left-[129px] top-[162px]" data-node-id="42:434" data-name="tv">
          <div className="absolute h-[176.28px] left-[162.38px] top-[593.83px] w-[279.545px]" data-node-id="42:436" data-name="image 29">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-12.02%] max-w-none top-0 w-[112.11%]" src={imgImage29} />
            </div>
          </div>
          <div className="absolute h-[172.108px] left-[146.73px] top-[397.74px] w-[303.535px]" data-node-id="9:216">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="172.108" src={imgRectangle2} width="303.535" />
          </div>
          <div className="absolute h-[167.935px] left-[152.99px] top-[181.82px] w-[204.443px]" data-node-id="42:432" data-name="image 28">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[115.53%] left-[-61.87%] max-w-none top-[-15.53%] w-[229.36%]" src={imgImage28} />
            </div>
          </div>
          <div className="absolute h-[634.191px] left-[129px] top-[162px] w-[339px]" data-node-id="42:429" data-name="image 27">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
          </div>
        </div>
        <div className="absolute left-[calc(50%_+_99px)] size-[359px] top-[54px]" data-node-id="42:439" data-name="image 30">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
        </div>
      </div>
      <div className="absolute contents left-[260px] top-[84px]" data-node-id="32:379" data-name="bookmarks">
        <a className="absolute contents cursor-pointer left-[407px] top-[93px]" data-node-id="32:383" data-name="bookmark active">
          <div className="absolute bg-[rgba(45,136,216,0.8)] border border-[rgba(4,1,1,0.2)] border-solid h-[64px] left-[407px] top-[93px] w-[61px]" data-node-id="32:384" />
          <div className="absolute flex h-[22.288px] items-center justify-center left-[415px] top-[100.21px] w-[55.265px]" data-node-id="32:385">
            <div className="flex-none rotate-[-5.34deg] skew-x-[2.37deg]">
              <p className="[word-break:break-word] font-brush h-[17.5px] leading-[normal] not-italic relative text-[16px] text-white w-[53.149px]">Projects</p>
            </div>
          </div>
        </a>
        <a className="absolute contents cursor-pointer left-[489px] top-[84px]" data-node-id="32:386" data-name="Home" onClick={(e) => { e.preventDefault(); props.onBookmarkClick && props.onBookmarkClick(0); }}>
          <div className="absolute bg-[#cf7ab3] border border-[rgba(4,1,1,0.2)] border-solid h-[72px] left-[489px] top-[84px] w-[61px]" data-node-id="32:387" />
          <div className="absolute flex h-[26.931px] items-center justify-center left-[505px] top-[94.92px] w-[55.265px]" data-node-id="32:388">
            <div className="flex-none rotate-[-6.44deg] skew-x-[-0.05deg]">
              <p className="[word-break:break-word] font-brush h-[21.086px] leading-[normal] not-italic relative text-[16px] text-white w-[53.255px]">Intro</p>
            </div>
          </div>
        </a>
        <a className="absolute contents cursor-pointer left-[328px] top-[104px]" data-node-id="32:389" data-name="Highlights bookmark aactive" onClick={(e) => { e.preventDefault(); props.onBookmarkClick && props.onBookmarkClick(2); }}>
          <div className="absolute bg-[rgba(216,119,45,0.8)] border border-[rgba(4,1,1,0.2)] border-solid h-[52px] left-[328px] top-[104px] w-[61px]" data-node-id="32:390" />
          <div className="absolute flex h-[30.361px] items-center justify-center left-[330px] top-[118px] w-[63.667px]" data-node-id="32:391">
            <div className="flex-none rotate-[-11.59deg] skew-x-[3.09deg]">
              <p className="[word-break:break-word] font-brush h-[18.908px] leading-[normal] not-italic relative text-[15px] text-white w-[60.101px]">Highlights</p>
            </div>
          </div>
        </a>
        <div className="absolute contents left-[260px] top-[118px]" data-node-id="32:380" data-name="Creativity" onClick={(e) => { e.preventDefault(); props.onBookmarkClick && props.onBookmarkClick(6); }}>
          <div className="absolute bg-[rgba(45,216,202,0.8)] border border-[rgba(4,1,1,0.2)] border-solid h-[164px] left-[260px] top-[118px] w-[61px]" data-node-id="32:381" />
          <div className="absolute flex h-[65.786px] items-center justify-center left-[272px] top-[137px] w-[43.632px]" data-node-id="32:382">
            <div className="flex-none rotate-[-27.19deg] scale-y-93 skew-x-[-21.22deg]">
              <p className="[word-break:break-word] font-brush h-[46.083px] leading-[normal] not-italic relative text-[15px] text-white w-[43.668px]">Works</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[849px] items-center justify-center left-[795px] top-[150px] w-0" data-node-id="9:217">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[849px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Page4;
