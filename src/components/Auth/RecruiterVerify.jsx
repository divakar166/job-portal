import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';

const RecruiterVerify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Verifying...');
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(`/backend/api/recruiter/verify/${token}`, {
          method: 'GET',
        });

        const result = await response.json();

        if (response.ok) {
          setMessage(result.msg || 'Account verified successfully. You can now log in.');
          setTimeout(() => navigate('/auth/login'), 3000);
        } else {
          setMessage(result.msg || 'Verification failed. Please try again.');
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setMessage('An error occurred. Please try again later.');
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token, navigate]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="rounded-full bg-white flex justify-center items-center relative">
        <a
          href="/"
          className="w-8 h-8 flex items-center justify-center transform hover:rotate-45 transition-all ease-in-out"
        >
          <Logo />
        </a>
        <span className="font-bold text-lg ml-2">
          Connect
        </span>
      </div>
      <h1 className='mt-5'>{message}</h1>
    </div>
  )
}

export default RecruiterVerify;