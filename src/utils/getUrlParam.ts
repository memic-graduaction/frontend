export function getUrlParam(url: string) {
  let tag = '';
  if (url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const matchs = url.match(regExp);
    if (matchs) {
      tag += `${matchs[7]}`;
    }
    return tag;
  }
}
