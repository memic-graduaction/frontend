import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { youtubeLinkState } from 'src/recoil/states';

function HomePage() {
  const navigator = useNavigate();
  const setLink = useSetRecoilState(youtubeLinkState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = new URL(e.target.value);
    const urlParams = url.searchParams;
    const param = String(urlParams.get('v'));
    setLink(param);
  };
  const handleClick = () => {
    navigator('/script');
  };
  return (
    <div>
      <input placeholder="링크입력" onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        등록
      </button>
    </div>
  );
}

export default HomePage;
