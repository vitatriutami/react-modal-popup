import { useState } from "react";
import { Modal } from "./Modal";

export default function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main className="w-screen h-screen flex justify-center m-auto bg-emerald-200">
      <div className="p-10 m-auto">
        <button
          className="rounded-lg py-1.5 px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => setOpen(true)}
        >
          Open
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Modal Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              officia ipsa ad iste soluta omnis impedit reprehenderit quae?
              Eaque pariatur id doloribus ipsa corporis blanditiis optio dolorem
              amet dolorum unde!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              odit cumque omnis officiis quidem dignissimos nam neque eligendi
              quas voluptatum. Quo, eveniet doloribus. Expedita veritatis quo
              consequatur quidem eveniet debitis?
            </p>
            <hr className=" border-t border-solid border-gray-500 " />
            <div className="flex flex-row justify-center">
              <button className="rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white" onClick={()=> setOpen(false)}>Close</button>
            </div>
          </div>
        </Modal>
      </div>
    </main>
  );
}
