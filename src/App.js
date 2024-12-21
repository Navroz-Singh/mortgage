import { useRight, RightContextProvider } from './context/Right';
import { MoneyContextProvider } from './context/Money';
import MainComp from './pages/MainComp';

function App() {
    return (
        <div className="App h-screen w-screen flex justify-center items-center bg-slate-300">
            <MoneyContextProvider>
                <RightContextProvider>
                    <MainComp />
                </RightContextProvider>
            </MoneyContextProvider>
        </div>
    );
}

export default App;
