// import Four from './assets/four.jpeg'
import One from './assets/one.jpeg'
// import Two from './assets/two.jpeg'
// import Three from './assets/three.jpeg'

import { useState } from "react";
import { useNavigate } from 'react-router';


function App() {
const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      navigate('/instagram')
    }, 1500);
  };

  return (
    <main className='flex items-center justify-center w-screen min-h-screen flex-col'>
      <div className="wrapper">
        <header>
          <center><img src="https://cdn-icons-png.flaticon.com/512/927/927295.png" style={{ width: '9%' }} alt="Vote" />Vote Your Favourite Tattoo Artist!</center>
        </header>
        <div className="poll-area" id="hidden">
          <input type="checkbox" name="poll" id="opt-1" />
          {/* <input type="checkbox" name="poll" id="opt-2" />
          <input type="checkbox" name="poll" id="opt-3" />
          <input type="checkbox" name="poll" id="opt-4" /> */}

          <label htmlFor='opt-1' className="opt-1">
            <div className="row">
              <div className="column">
                <span className="circle"></span>
                <span className="text">Powelltattoos</span>
              </div>
              <span className="percent">36%</span>
            </div>
            <div className="progress" id="pstyle1"></div>
            <img src={One} alt="Picture" />
          </label>
{/* 
          <label htmlFor="opt-2" className="opt-2">
            <div className="row">
              <div className="column">
                <span className="circle"></span>
                <span className="text">Dangilsdorf</span>
              </div>
              <span className="percent">31%</span>
            </div>
            <div className="progress" id="pstyle2"></div>
            <img src={Two} alt="Picture" />
          </label>

          <label htmlFor="opt-3" className="opt-3">
            <div className="row">
              <div className="column">
                <span className="circle"></span>
                <span className="text">Atlastattoo</span>
              </div>
              <span className="percent">14%</span>
            </div>
            <div className="progress" id="pstyle3"></div>
            <img src={Three} alt="Picture" />
          </label>

          <label htmlFor="opt-4" className="opt-4">
            <div className="row">
              <div className="column">
                <span className="circle"></span>
                <span className="text">Scapegoat_tattoo</span>
              </div>
              <span className="percent">19%</span>
            </div>
            <div className="progress" id="pstyle4"></div>
            <img src={Four} alt="Picture" />
          </label> */}
          <input type="submit" onClick={() => openModal()} value="Vote Me" className="btn-grad" data-prototype-url="Instagram.html" id="myBtn" />


        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

export default App


const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-1/2 top-1/2 -translate-1/2 max-w-[80%] shadow-lg h-20 w-full z-50 flex items-center justify-center bg-white"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg inline-block"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="absolute top-2 right-2 cursor-pointer text-xl" onClick={onClose}>
          &times;
        </span>
        <p>Continue with Instagram to complete vote process...</p>
      </div>
    </div>
  );
};