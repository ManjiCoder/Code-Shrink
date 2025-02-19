const baiseMinify = (htmlStr) => {
  let newHtmlStr = htmlStr;
  newHtmlStr = htmlStr.split(';').filter(Boolean).join(';');
  newHtmlStr = newHtmlStr.replaceAll('\n', '');
  newHtmlStr = newHtmlStr.replaceAll('\t', '');
  newHtmlStr = newHtmlStr.replaceAll('  ', '');
  newHtmlStr = newHtmlStr.replaceAll(';}', '}');
  newHtmlStr = newHtmlStr.replaceAll('}</style>', '');
  //   newHtmlStr = newHtmlStr.replace(/<\/\w+>/g, '');

  newHtmlStr = newHtmlStr.replaceAll('px', '');
  return newHtmlStr;
};
const myReducer = (state, action) => {
  const { type } = action;
  if (type === 'BASIC-MINIFY') {
    const newCode = baiseMinify(action.payload.code);
    return newCode;
  } else {
    return state;
  }
};

export default myReducer;
