import { useReducer } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { appInfo } from '../constants/appInfo';
import codeReducer, { codeReducerInitialState } from '../utils/reducer';

export default function Home() {
  const [state, dispatch] = useReducer(codeReducer, codeReducerInitialState);
  const handleChange = (e) => {
    dispatch({ type: 'SET-CODE', payload: { code: e.target.value } });
    dispatch({
      type: 'BASIC-MINIFY',
    });
  };

  return (
    <main className='bg-slate-200 min-h-screen px-4 py-3'>
      <h1 className='text-3xl font-bold'>{appInfo.name}</h1>
      <span className='text-sm font-medium'>{appInfo.desc}</span>
      <section className='p-2 w-full py-4 grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='relative lg:col-span-2'>
          <label htmlFor='code' className='leading-7 text-xl font-medium'>
            Code:
          </label>
          <textarea
            id='code'
            name='code'
            spellCheck={false}
            className='w-full bg-gray-100 bg-opacity-50 rounded-sm shadow-md border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            placeholder='Paste the come here'
            onChange={handleChange}
            value={state.code}
          ></textarea>
        </div>
        <div className='relative'>
          <label htmlFor='code' className='leading-7 text-xl font-medium'>
            Before:
          </label>
          {state.code && (
            <pre className='mt-3 text-wrap group break-words shadow-md rounded-md p-4 bg-slate-50'>
              {/* <SyntaxHighlighter language='html' style={monokai}> */}
              {state.code}
              {/* </SyntaxHighlighter> */}
            </pre>
          )}
        </div>
        <div className='relative'>
          <label htmlFor='code' className='leading-7 text-xl font-medium'>
            After:
          </label>
          {state.code && (
            <pre className='mt-3 text-wrap break-words shadow-md rounded-md p-4 bg-slate-50 relative'>
              <span
                className='absolute top-2 right-2 z-10 bg-slate-200 hover:bg-slate-900 hover:cursor-pointer hover:text-white px-2 font-medium py-1 rounded-md'
                onClick={() => {
                  navigator.clipboard.writeText(state);
                }}
              >
                Copy
              </span>
              {/* <SyntaxHighlighter language='html' style={monokai}> */}
              {state.minifiedCode}
              {/* </SyntaxHighlighter> */}
            </pre>
          )}
        </div>
      </section>
    </main>
  );
}
