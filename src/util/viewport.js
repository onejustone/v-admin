// https://github.com/hbxeagle/rem
// const  defaultFontSize = adaptHTMLRootSizeToRem(640, 100);
function adaptHTMLRootSizeToRem (designWidth, rem2px) {
  const d = window.document.createElement('div');
  d.style.width = '1rem';
  d.style.display = 'none';
  const head = window.document.getElementsByTagName('head')[0];
  console.log(head);
  head.appendChild(d);
  var portrait = '@media screen and (min-width: ' + window.innerWidth + 'px) {html{font-size:' + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + '%;}}';
  var landscape = '@media screen and (min-width: ' + window.innerHeight + 'px) {html{font-size:' + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + '%;}}';
  const defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
  const st = document.createElement('style');
  st.innerHTML = portrait + landscape;
  d.remove();
  head.appendChild(st);
  console.log(head);
  console.log(defaultFontSize);
  return defaultFontSize;
};

export {
  adaptHTMLRootSizeToRem
};

export default {
  adaptHTMLRootSizeToRem
};
