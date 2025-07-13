import React, { useMemo, useState } from "react";
import Select from "~/components/form/Select";
import TextArea from "~/components/form/TextArea";
import TextInput from "~/components/form/TextInput";

const FormArticles = () => {
  const dataSelect = [
    {
      id: 1,
      value: "Sports",
    },
    {
      id: 2,
      value: "Health",
    },
  ];
  const [tagSelected, setTagSelected] = useState([]);
  const handleSelected = (value: number) => {
    if (value) {
      setTagSelected((prev) => [...prev, value]);
    }
    console.log(tagSelected);
  };

  const handleRemoveSelected = (value: number) => {
    setTagSelected((prev) => prev.filter((item) => item !== value));
  };

  return (
    <div className="my-10 w-full">
      <h1 className="font-extrabold text-2xl">Form Article</h1>
      <form action="" className="flex flex-col gap-4 my-5">
        <TextInput type="text" label="Title" />
        <Select
          label={"Tag"}
          dataSelect={dataSelect}
          handleSelected={handleSelected}
        />

        {tagSelected.length > 0 && (
          <div className="flex gap-2">
            {tagSelected.map((item) => (
              <span className="p-1 text-sm text-white font-semibold bg-blue-600">
                {item}{" "}
                <button
                  onClick={() => handleRemoveSelected(item)}
                  type="button"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        )}
        <TextArea label={"Content"} />

        <button
          type="submit"
          className="p-2 rounded-md bg-black text-white opacity-90 hover:opacity-100 hover:font-bold tracking-wide"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormArticles;
