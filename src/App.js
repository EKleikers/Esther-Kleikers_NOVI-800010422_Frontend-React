import './App.css';

import {useState} from "react";
import {Switch, Route} from 'react-router-dom';

import {BluebirdPage, DetailsPage, DonatePage, HomePage, ResultsPage, SearchPage} from "./pages";
import {Header, Footer, PrivateRoute} from "./components"

export default function App() {

    const [search, setSearch] = useState('');
    const [searchValue, setSearchValue] = useState('');

    return (
        <div name="app-container" className="app-container">

            <header className="header">
                <Header/>
            </header>

            <section className="pages">
                <Switch>
                    <Route exact path="/"><HomePage/></Route>
                    <Route path="/bluebird"><BluebirdPage/></Route>
                    <Route path="/donate"><DonatePage/></Route>

                    <PrivateRoute path="/search">
                        <SearchPage setSearch={setSearch} setSearchValue={setSearchValue}/>
                    </PrivateRoute>
                    <PrivateRoute path="/results">
                        <ResultsPage search={search} searchValue={searchValue}/>
                    </PrivateRoute>
                    <PrivateRoute path="/details/:id">
                        <DetailsPage/>
                    </PrivateRoute>
                </Switch>
            </section>
            <footer>
                <Footer/>
            </footer>

        </div>
    )
}


