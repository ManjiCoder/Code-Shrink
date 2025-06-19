const minifyLine = (line) => {
  let newLine = '';
  const isStyle = line.includes(':');
  if (isStyle) {
    const isPixel = line.includes('px');
    newLine = line
      .split(':')
      .map((v) => v.trim())
      .join(':');
    if (isPixel && !line.includes('border') && !line.includes('gap') && !line.includes('translate')) {
      newLine = newLine.replaceAll('px', '');
    }
  } else {
    newLine = line;
  }
  return newLine;
};
const baiseMinify = (htmlStr) => {
  let newHtmlStr = '';
  htmlStr.split('\n').forEach((val) => {
    val = val.trim();
    const skips = ['', '</style>'];
    if (!skips.includes(val)) {
      const newVal = minifyLine(val);
      newHtmlStr += newVal;
    }
  });
  // console.log(htmlStr.split('\n').map((str)=>str.trim()).join(''));

  // newHtmlStr = htmlStr.split(';').filter(Boolean).join(';');
  // newHtmlStr = newHtmlStr.replaceAll('\n', '');
  // newHtmlStr = newHtmlStr.replaceAll('\t', '');
  // newHtmlStr = newHtmlStr.replaceAll('  ', '');
  // newHtmlStr = newHtmlStr.replaceAll(';}', '}');
  // newHtmlStr = newHtmlStr.replaceAll('}</style>', '');
  // //   newHtmlStr = newHtmlStr.replace(/<\/\w+>/g, '');

  // newHtmlStr = newHtmlStr.replaceAll('px', '');
  return newHtmlStr.replaceAll(";}",'}');
};
// Main Reducer
export const codeReducerInitialState = {
  code: '',
  minifiedCode: '',
};
const codeReducer = (state, action) => {
  switch (action.type) {
    case 'SET-CODE':
      return { ...state, code: action.payload.code };

    case 'BASIC-MINIFY':
      return { ...state, minifiedCode: baiseMinify(state.code) };

    case 'RESET':
      return codeReducerInitialState;

    default:
      return state;
  }
};

export default codeReducer;
