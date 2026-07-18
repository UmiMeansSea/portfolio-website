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

// Wrapper component to split spreads into individual left and right pages
const BookPage = React.forwardRef((props, ref) => {
  const { leftHalf, standardChild, resumeChild, isResumeMode, style, ...otherProps } = props;
  return (
    <div
      ref={ref}
      className="bg-white relative select-none"
      style={{
        ...style,
        width: 795,
        height: 1142,
        overflow: 'hidden'
      }}
      {...otherProps}
    >
      {/* Standard page layer */}
      <div
        className={isResumeMode ? "hidden" : "absolute"}
        style={{
          width: 1590,
          height: 1142,
          left: leftHalf ? 0 : -795,
          top: 0
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
          left: leftHalf ? 0 : -795,
          top: 0
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
      className="w-screen h-screen overflow-hidden flex items-center justify-center relative select-none"
      style={{
        backgroundImage: `url(${imgTable})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Desk overlay shadow */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

      {/* Scaled viewport container */}
      <div
        className="relative z-10"
        style={{
          width: 1590,
          height: 1142,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          borderRadius: '16px',
          overflow: 'visible'
        }}
      >
        <HTMLFlipBook
          width={795}
          height={1142}
          size="fixed"
          minWidth={795}
          maxWidth={795}
          minHeight={1142}
          maxHeight={1142}
          drawShadow={true}
          maxShadowOpacity={0.6}
          showCover={false}
          mobileScrollSupport={true}
          ref={flipBookRef}
          className="flipbook-container"
          style={{
            borderRadius: '16px',
            overflow: 'hidden'
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
