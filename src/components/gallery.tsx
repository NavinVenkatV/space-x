import { useEffect, useRef, useState } from 'react';
import Button from './button';

interface myLabel {
  label: string;
  image: string;
  butlabel : string
}

function Gallery({ label, image, butlabel }: myLabel) {
  const [inView, setInView] = useState(false); // State to track if the element is in view
  const textRef = useRef<HTMLParagraphElement>(null); // Reference for the text paragraph

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set inView to true when the element is in view
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div>
      <div className="bg-black text-white text-center lg:flex lg:justify-between  w-screen px-20 bebas-neue py-10">
        <div className='flex flex-col mt-2 justify-center items-center'>
          <p
            ref={textRef}
            className={`lg:flex lg:flex-col justify-center items-center max-w-xl text-sm lg:text-3xl text-center transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
          >
            {label}
          </p>
          <Button label={butlabel}/>
        </div>
        <img src={image} alt="Elon Musk" />
      </div>
    </div>
  );
}

export default Gallery;
