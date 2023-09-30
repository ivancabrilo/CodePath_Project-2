
import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { flashcards } from './data';

function FlashcardContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);  // Moved up from Flashcard component

  const toggleShowAnswer = () => {
    setShowAnswer(prevShowAnswer => !prevShowAnswer);
  };

  const randomizeIndex = () => {
    setShowAnswer(false);  // Reset showAnswer to false when changing index
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * flashcards.length);
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flashcard-container">
      <Flashcard 
        card={flashcards[currentIndex]} 
        showAnswer={showAnswer} 
        toggleShowAnswer={toggleShowAnswer} 
      />
      <button onClick={randomizeIndex}><strong>Next</strong></button>
    </div>
  );
}

export default FlashcardContainer;
