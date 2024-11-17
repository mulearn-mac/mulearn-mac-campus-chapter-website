import { useState } from "react";
function MembersSection() {
  const [activeCard, setActiveCard] = useState(null);

  // Replace jQuery modal logic with React state
  const handleMouseEnter = (cardId) => {
    setActiveCard(cardId);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="members-section">
      {/* Replace existing card structure with this */}
      {members.map((member, index) => (
        <div
          key={index}
          className={`card-inner ${activeCard === index ? 'rotate' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-front">
            {/* Front content */}
          </div>
          <div className="card-back">
            {/* Back content */}
          </div>
        </div>
      ))}
    </div>
  );
}; export default MembersSection;
