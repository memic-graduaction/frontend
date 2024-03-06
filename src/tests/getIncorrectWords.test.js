describe('틀린 단어 추출 테스트', () => {
  const originalStr = 'i love you';
  const resultStr = 'you love me';
  const originalArr = originalStr.split(' ');
  const resultArr = resultStr.split(' ');
  const indexDifference = 0;
  const incorrectIdx = [];

  for (let i = 0; i < originalArr.length; i += 1) {
    if (originalArr[i] !== resultArr[i + indexDifference]) {
      incorrectIdx.push(i);
    }
  }

  test('틀린 단어는 총 2개', () => {
    expect(incorrectIdx).toEqual([0, 2]);
  });
});
