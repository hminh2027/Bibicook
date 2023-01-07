import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 2000);
  // }, []);
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
