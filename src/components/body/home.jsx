import { Logos } from './logos.jsx'
import { Nav } from './nav.jsx'

import { Search } from './search.jsx'
import { Info } from './info'

import {Footer} from './footer'


export function Home() {
    return (
        <div style={{background: "#f5f5f5"}}>
            <Nav />
            <Search/>
            <Logos />
            <Info />
           <Footer/>
        </div>
    )
} 