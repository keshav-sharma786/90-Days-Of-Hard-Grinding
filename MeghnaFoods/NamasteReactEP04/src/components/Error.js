import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1 className="text-white font-bold text-3xl text-center">Oops!!!</h1>
      <br />
      <h2 className="text-white font-bold text-3xl text-center">
        Something went wrong!!
      </h2>
      <br />
      <h3 className="text-white font-bold text-3xl text-center">
        {err.status}: {err.statusText}
      </h3>
      <br />
    </div>
  );
};

export default Error;
