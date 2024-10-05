// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.jsx
// import { ChakraProvider } from '@chakra-ui/react';
// import InvoiceForm from './components/InvoiceForm';

// const App = () => {
//   return (
//     <ChakraProvider>
//       <InvoiceForm />
//     </ChakraProvider>
//   );
// };

// export default App;
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Formulaire from './formulaire';
import  './App.css'


const App: React.FC = () => {
  return (
    <ChakraProvider> 
      <div className='flex content-start content-center flex-col bg-blue-400 sm:w-[300%] mx-4 '>
        <Formulaire />
      </div>
    </ChakraProvider>
  );
};

export default App;
