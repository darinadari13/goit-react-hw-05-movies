import { useLocation, useNavigate} from "react-router-dom";

export const GoBackButton = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(backLink)}>Go Back</button> 
  );
};
