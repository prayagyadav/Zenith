import { useEffect, useState } from 'react';

const WorkshopModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Check localStorage on first render
    const savedState = localStorage.getItem('workshopPopupState');

    if (savedState === 'minimized') {
      setIsMinimized(true);
      setIsVisible(false);
    } else {
      setIsVisible(true);
      setIsMinimized(false);
    }
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setIsMinimized(true);
    localStorage.setItem('workshopPopupState', 'minimized');
  };

  const openModal = () => {
    setIsVisible(true);
    setIsMinimized(false);
    localStorage.setItem('workshopPopupState', 'open');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="relative bg-black text-white p-6 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">🌌 Workshop Incoming!</h2>
            <p className="mb-4">
              Don’t miss our upcoming workshop - <strong>[The Astronomer’s Toolkit: Mastering Data and Observations]</strong> from 22nd to 24th April 2025! For more details, click the link below!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekWc7PohcfzLlD7Ky92gSMJTMZp-gLuxy5UJ877KvRIOvcPQ/viewform?usp=sharing"
              target="_blank"
              className="inline-block px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Register Now
            </a>
          </div>
        </div>
      )}

      {isMinimized && (
        <button
          onClick={openModal}
          className="fixed bottom-5 right-5 z-50 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Open Workshop Info
        </button>
      )}
    </>
  );
};

export default WorkshopModal;

