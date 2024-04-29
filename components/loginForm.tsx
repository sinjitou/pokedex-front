import { apiRequest } from "@/lib/apiRequest";
import { useState } from "react";

export default function LoginForm({
  setModalIsOpen,
}: {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [IsSignUpForm, setIsSignUpForm] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;
    const password = data.get("password") as string;
    try {
      const res = await apiRequest({
        path: IsSignUpForm ? "/users/register" : "/users/login",
        login: { username, password },
        method: "GET",
      });
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed h-screen w-screen bg-black/40 z-50 flex justify-center items-center">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto">
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div className="flex justify-end p-2">
            <button
              type="button"
              onClick={() => setModalIsOpen(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form
            className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {IsSignUpForm ? "Inscription" : "Connexion"}
            </h3>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Ton nom
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Jean"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            {!IsSignUpForm && (
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            )}
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {IsSignUpForm ? "S'inscrire" : "Se connecter"}
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 cursor-pointer">
              {IsSignUpForm ? "Deja un membre ?" : "Pas encore membre ?"}
              <p
                onClick={() => setIsSignUpForm((prev) => !prev)}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                {IsSignUpForm ? "Se connecter" : "S'inscrire"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
