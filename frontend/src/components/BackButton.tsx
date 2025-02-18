import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  toWhere: string;  // Making this required, not optional
}

function BackButton({toWhere}:BackButtonProps) {
  const navigate = useNavigate();

  return (
    <IoArrowBackSharp size={25} title="Go Back" onClick={() => navigate(toWhere)}/>
  );
}

export default BackButton