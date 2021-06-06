import React from 'react'
import {Header, Navigator, MessageSide} from '../exporter'

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
        <div>
            <MessageSide/>
        </div>
        </main>
    )
}

export  {Layout}
