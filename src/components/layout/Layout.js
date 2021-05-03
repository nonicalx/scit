import React from 'react'
import {Header, Navigator} from '../exporter'

const Layout = ({children}) => {
    return (
        <main className="scit-layout">
            <div>
                <Navigator/>
            </div>
        <div>
            <Header/>
            {children}
        </div>
        </main>
    )
}

export  {Layout}
