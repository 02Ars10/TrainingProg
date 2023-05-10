import { useEffect } from 'react';
import {useLocalStorage} from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

const BtnDarkMode = ({ margin }) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {
        if (darkMode === 'dark') {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

    useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);
	useEffect(() => {
        const elements = document.querySelectorAll('.themeable');
        elements.forEach((el) => {
            if (darkMode === 'dark') {
                el.classList.add('dark');
                el.classList.remove('light');
            } else {
                el.classList.add('light');
                el.classList.remove('dark');
            }
        });
    }, [darkMode]);
	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	};

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

	return (
		<button style={{ margin }}  className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	);
};

export default BtnDarkMode;
