import React from 'react';
import searchIcon from '../../assets/searchIcon.png';

interface SearchButtonProps {
    onClick: () => void;
    isValidUrl: boolean;
}

function SearchButton({ onClick, isValidUrl }: SearchButtonProps) {
    const isYoutubeUrl = (url: string): boolean => url.includes("youtube.com") && url.includes("watch?v=");

    const handleButtonClick = () => {
        if (isValidUrl && isYoutubeUrl(window.location.href)) {
            onClick();
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
