// SearchButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/searchIcon.png';

interface SearchButtonProps {
  onClick: () => void;
  isValidUrl: boolean;
  isYoutubeUrl: boolean;
}

function SearchButton({ onClick, isValidUrl, isYoutubeUrl }: SearchButtonProps) {
  const navigator = useNavigate();

  const handleButtonClick = () => {
    if (isValidUrl && isYoutubeUrl) {
      onClick();
      navigator('/script');
      
    } else {
      alert("유효한 YouTube URL이 아닙니다.");
    }
  };

  return (
    <button type="submit" onClick={handleButtonClick}>
      <img style={{ width: '2.5rem' }} src={searchIcon} alt="Search Icon" />
    </button>
  );
}

export default SearchButton;
