import React, { useState, useRef, useEffect, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';

// Import scrapbook page components (standard)
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

// Import resume page components (resume variants)
import ResumePage1 from './components/ResumePage1';
import ResumePage2 from './components/ResumePage2';
import ResumePage3 from './components/ResumePage3';
import ResumePage4 from './components/ResumePage4';

// Import table background for full screen desk effect
import imgTable from './assets/imgTable.png';
import imgPassportPhoto from './assets/imgPassportPhoto.png';

// Wrapper component to split spreads into individual left and right pages
const BookPage = React.forwardRef((props, ref) => {
  const { leftHalf, standardChild, resumeChild, isResumeMode, style, ...otherProps } = props;
  return (
    <div
      ref={ref}
      className="bg-transparent relative select-none"
      style={{
        ...style,
        width: 595,
        height: 842,
        overflow: 'visible'
      }}
      {...otherProps}
    >
      {/* Standard page layer */}
      <div
        className={isResumeMode ? "hidden" : "absolute"}
        style={{
          width: 1590,
          height: 1142,
          left: leftHalf ? -200 : -795,
          top: -150
        }}
      >
        {standardChild}
      </div>

      {/* Resume page layer */}
      <div
        className={isResumeMode ? "absolute" : "hidden"}
        style={{
          width: 1590,
          height: 1142,
          left: leftHalf ? -200 : -795,
          top: -150
        }}
      >
        {resumeChild}
      </div>
    </div>
  );
});

function App() {
  const [isResumeMode, setIsResumeMode] = useState(false);
  const [scale, setScale] = useState(1);
  const flipBookRef = useRef(null);

  // Responsive scaling to fit layout on smaller screens
  const updateScale = useCallback(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const scaleX = screenWidth / 1590;
    const scaleY = screenHeight / 1142;
    // Fit to viewport, but do not scale up beyond 1.1x to prevent blurring
    setScale(Math.min(scaleX, scaleY, 1.1));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [updateScale]);

  // Handler for bookmark navigation clicks
  const handleBookmarkClick = useCallback((targetIndex) => {
    // Close resume overlay when navigating between pages
    setIsResumeMode(false);
    
    if (flipBookRef.current) {
      const pageFlipInstance = flipBookRef.current.pageFlip();
      if (pageFlipInstance) {
        pageFlipInstance.flip(targetIndex);
      }
    }
  }, []);

  // Shared props for page components
  const pageProps = {
    onBookmarkClick: handleBookmarkClick,
    onToggleResume: setIsResumeMode
  };

  return (
    <div 
      className="w-screen h-screen overflow-hidden relative select-none"
      style={{
        backgroundImage: `url(${imgTable})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Desk overlay shadow */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

      {/* Static Table Header & Resume button */}
      <div className="absolute z-10 pointer-events-none" style={{ width: 1590, height: 1142, left: '50%', top: '50%', transform: `translate(-50%, -50%) scale(${scale})`, transformOrigin: 'center center' }}>
        {/* portfolio title */}
        <p className="[word-break:break-word] absolute font-brush h-[118px] leading-[normal] left-[893px] not-italic text-[#4c3131] text-[128px] top-[150px] w-[482px]">
          portfolio
        </p>

        {/* Resume button (only clickable if NOT in resume mode) */}
        {!isResumeMode && (
          <>
            <a 
              className="absolute cursor-pointer pointer-events-auto left-[937px] top-[1039px] w-[579px] h-[103px] bg-[#f7f5f5] border border-[rgba(0,0,0,0.5)] border-solid shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center pl-8"
              onClick={(e) => { e.preventDefault(); setIsResumeMode(true); }}
            >
              <div className="w-[94px] h-[30px] overflow-hidden relative">
                <img alt="" className="absolute h-[403.65%] left-0 max-w-none top-[-0.26%] w-full" src={imgPassportPhoto} />
              </div>
            </a>
            <p className="[word-break:break-word] absolute font-heading-zine h-[61px] leading-[normal] left-[1202px] not-italic text-[24px] text-black top-[1068px] w-[230px] pointer-events-none">
              Resume
            </p>
          </>
        )}
      </div>

      {/* Scaled viewport container */}
      <div
        className="absolute z-10"
        style={{
          width: 1590,
          height: 1142,
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          borderRadius: '16px',
          overflow: 'visible'
        }}
      >
        <HTMLFlipBook
          width={595}
          height={842}
          size="fixed"
          minWidth={595}
          maxWidth={595}
          minHeight={842}
          maxHeight={842}
          drawShadow={true}
          maxShadowOpacity={0.6}
          showCover={false}
          mobileScrollSupport={true}
          ref={flipBookRef}
          className="flipbook-container absolute"
          style={{
            left: 200,
            top: 150,
            width: 1190,
            height: 842,
            borderRadius: '4px',
            overflow: 'visible'
          }}
        >
          {/* Spread 1: Page 1 (Intro) */}
          <BookPage leftHalf={true} isResumeMode={isResumeMode}
            standardChild={<Page1 {...pageProps} />}
            resumeChild={<ResumePage1 {...pageProps} />}
          />
          <BookPage leftHalf={false} isResumeMode={isResumeMode}
            standardChild={<Page1 {...pageProps} />}
            resumeChild={<ResumePage1 {...pageProps} />}
          />

          {/* Spread 2: Page 2 (Highlights) */}
          <BookPage leftHalf={true} isResumeMode={isResumeMode}
            standardChild={<Page2 {...pageProps} />}
            resumeChild={<ResumePage2 {...pageProps} />}
          />
          <BookPage leftHalf={false} isResumeMode={isResumeMode}
            standardChild={<Page2 {...pageProps} />}
            resumeChild={<ResumePage2 {...pageProps} />}
          />

          {/* Spread 3: Page 3 (Projects) */}
          <BookPage leftHalf={true} isResumeMode={isResumeMode}
            standardChild={<Page3 {...pageProps} />}
            resumeChild={<ResumePage3 {...pageProps} />}
          />
          <BookPage leftHalf={false} isResumeMode={isResumeMode}
            standardChild={<Page3 {...pageProps} />}
            resumeChild={<ResumePage3 {...pageProps} />}
          />

          {/* Spread 4: Page 4 (Works) */}
          <BookPage leftHalf={true} isResumeMode={isResumeMode}
            standardChild={<Page4 {...pageProps} />}
            resumeChild={<ResumePage4 {...pageProps} />}
          />
          <BookPage leftHalf={false} isResumeMode={isResumeMode}
            standardChild={<Page4 {...pageProps} />}
            resumeChild={<ResumePage4 {...pageProps} />}
          />
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;
