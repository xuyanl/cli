import HOME from '@/assets/home.png'
import { createRoot } from 'react-dom/client'
import React from 'react';


const App = ({ children }: { children: React.PropsWithChildren }) => {

    console.log(children, 'children');

    return <div>{children}</div>
}

// console.log(HOME)


export default App
