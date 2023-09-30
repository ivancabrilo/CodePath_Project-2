import React from 'react';

function Flashcard({ card, showAnswer, toggleShowAnswer }) {
  return (
    <div className="flashcard" onClick={toggleShowAnswer}>
      {showAnswer ? card.answer : card.question}
    </div>
  );
}

export default Flashcard;

