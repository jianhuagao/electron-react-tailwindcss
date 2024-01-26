import './App.css';
import icon from '../../assets/icon.svg';
import phxIcon from '../../assets/phx.svg';
import uilGithubIcon from '../../assets/uilGithub.svg';
import tailwindcssIcon from '../../assets/tailwindcss.svg';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Hello() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-col">
      <div className="flex items-center gap-8">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="40"
            alt="icon"
            src={icon}
            className="hover:scale-125 transition-all"
          />
        </a>
        <img width="40" alt="phxIcon" src={phxIcon} />
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            width="200"
            alt="tailwindcss"
            src={tailwindcssIcon}
            className="hover:scale-125 transition-all"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            width="60"
            alt="tailwindcss"
            src={uilGithubIcon}
            className="hover:scale-125 transition-all"
          />
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
