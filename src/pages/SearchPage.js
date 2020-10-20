import React from 'react'
import Search from '../components/Search'
import './SearchPage.css'
import { useContextValue } from '../services/context'

export default function SearchPage() {
    const [{ searchTerm }, dispatch] = useContextValue()
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Search hideButton />

            </div>
            <div className="searchPage__result">

            </div>

        </div>
    )
}
