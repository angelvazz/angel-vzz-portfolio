import React, { useState, useEffect } from 'react';

const TypingText = ({ textArray, speed }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const currentIndex = loopNum % textArray.length;
      const currentText = textArray[currentIndex];
      setText(
        isDeleting
          ? currentText.substring(0, text.length - 1)
          : currentText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, textArray, typingSpeed]);

  return <h1>{text}</h1>;
};

export default TypingText;
