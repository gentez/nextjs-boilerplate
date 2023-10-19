import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './src/store';
import { toggleDirection, toggleTheme } from './src/store/themeConfigSlice';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

function App({ children }: PropsWithChildren) {
    register();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleTheme(themeConfig.theme));
        dispatch(toggleDirection(themeConfig.direction));
    }, [dispatch, themeConfig.direction, themeConfig.theme]);

    return <div className="App">{children}</div>;
}

App.displayName = 'App';
export default App;
