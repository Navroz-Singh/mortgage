import { useRight, RightContextProvider } from './context/Right';
import { MoneyContextProvider } from './context/Money';
import MainComp from './pages/MainComp';

function App() {
    return (
        <>
            <MoneyContextProvider>
                <RightContextProvider>
                    <MainComp />
                </RightContextProvider>
            </MoneyContextProvider>
        </>
    );
}

export default App;
