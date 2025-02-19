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
