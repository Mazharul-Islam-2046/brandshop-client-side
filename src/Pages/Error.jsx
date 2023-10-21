import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="w-full flex flex-col justify-center items-center h-[80vh] text-center">
             <div id="error-page">
      <h1 className="text-5xl font-bold mb-6">Oops!</h1>
      <p className="text-2xl text-neutral-500 mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="mb-8">
        <i className="text-lg">{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className="py-3 px-6 btn btn-ghost text-black border-black hover:bg-black hover:text-white">Back To Home</Link>
    </div>
        </div>
    );
};

export default Error;