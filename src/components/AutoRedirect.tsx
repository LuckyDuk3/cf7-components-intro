import {useNavigate} from "react-router";
import {useEffect} from "react";

const AutoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer: number = setTimeout(() => {
      navigate("/examples/auto-redirect");
    }, 5000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <h1 className="text-center text-2xl md-4">
        Redirecting in 5 seconds...
      </h1>
    </>
  )
}

export default AutoRedirect;