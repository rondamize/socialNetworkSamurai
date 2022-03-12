import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
    // debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.store.state}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs state={props.store.state.dialogsPage} dispatch={props.dispatch}/>} />
                        <Route path="/profile" element={<Profile state={props.store.state.profilePage}
                                                                 dispatch={props.dispatch}/>} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                    {/*<Dialogs />*/}
                </div>
                </div>
        </BrowserRouter>

    );
}

export default App;
