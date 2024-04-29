import { useState } from "react";

export default function AddPokemonModal({
  setModalIsOpen,
  edition = false,
}: {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  edition?: boolean;
}) {
  const [formValues, setFormValues] = useState<Record<string, any>>({
    regions: [{ regionName: "", regionPokedexNumber: "" }],
  });

  const fields = [
    { id: "name", name: "Nom", type: "text", placeholder: "Nom" },
    {
      id: "description",
      name: "Description",
      type: "textarea",
      placeholder: "Type",
    },
    {
      id: "imgUrl",
      name: "Image (url)",
      type: "text",
      placeholder: "https://...",
    },
    {
      id: "types",
      name: "Types",
      type: "inputs",
      inputs: [
        { name: "Type 1", type: "text", placeholder: "Type" },
        { name: "Type 2", type: "text", placeholder: "Type" },
      ],
    },
    {
      id: "regions",
      name: "Regions",
      type: "dynamicInputs",
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/40 z-[100] flex justify-center items-center">
      <div className="max-h-[90vh] min-w-[80vw] overflow-y-auto">
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
            action="#"
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Ajouter un pokemon
            </h3>

            {fields.map(({ id, name, type, placeholder, inputs }) => {
              return type === "text" ? (
                <div>
                  <label
                    htmlFor={id}
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    {name}
                  </label>
                  <input
                    value={formValues?.[id]}
                    type="text"
                    name={id}
                    id={id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder={placeholder}
                    required
                  />
                </div>
              ) : type === "textarea" ? (
                <div>
                  <label
                    htmlFor={id}
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    {name}
                  </label>
                  <textarea
                    value={formValues?.[id]}
                    name={id}
                    id={id}
                    className="w-full border-black border-2 rounded-lg p-2"
                    rows={4}
                  />
                </div>
              ) : type === "inputs" ? (
                inputs?.map(
                  ({ name: secondName, type, placeholder }, index) => (
                    <div>
                      <label
                        htmlFor={`${id}-${secondName}`}
                        className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                      >
                        {secondName}
                      </label>
                      <input
                        value={formValues?.[id]?.[index]}
                        type={type}
                        name={`${id}-${secondName}`}
                        id={`${id}-${secondName}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder={placeholder}
                        required
                      />
                    </div>
                  )
                )
              ) : (
                type === "dynamicInputs" && (
                  <div>
                    <div className="grid grid-cols-[70%_30%] gap-4">
                      <p className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                        {name}
                      </p>
                      <p
                        className="text-sm "
                        onClick={() =>
                          setFormValues((prev) => ({
                            ...prev,
                            [id]: [
                              ...prev[id],
                              { regionName: "", regionPokedexNumber: "" },
                            ],
                          }))
                        }
                      >
                        + Ajouter une région
                      </p>
                    </div>
                    {formValues?.[id]?.map(
                      (
                        {
                          regionName,
                          regionPokedexNumber,
                        }: {
                          regionName: string;
                          regionPokedexNumber: string;
                        },
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="grid grid-cols-[70%_30%] gap-4"
                        >
                          <div>
                            <label
                              htmlFor={"regionName"}
                              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                            >
                              Nom de région
                            </label>
                            <input
                              value={regionName}
                              type="text"
                              name={"regionName"}
                              id={"regionName"}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder={placeholder}
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor={"regionPokedexNumber"}
                              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                            >
                              Numéro de région
                            </label>
                            <input
                              value={regionPokedexNumber}
                              type="number"
                              name={"regionPokedexNumber"}
                              id={"regionPokedexNumber"}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder={placeholder}
                              required
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )
              );
            })}

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
