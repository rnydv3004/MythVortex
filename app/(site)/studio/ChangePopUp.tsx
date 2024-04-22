import React from "react";

interface ItemDatInterface {
  id: number;
  title: string;
}

export default function ChangePopUp({
  itemData,
  close,
}: {
  itemData: ItemDatInterface;
  close: any;
}) {
  return (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-screen pt-20 md:pt-0 items-start md:justify-center justify-center bg-black bg-opacity-90 p-2">
      <div className="relative h-fit w-full rounded-md border border-slate-700 p-5 shadow-xl shadow-black dark:bg-slate-800 md:w-[450px]">
        <button className="absolute right-4 top-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className="h-4 w-4 duration-300 hover:scale-125"
            onClick={() => {
              close(-1);
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>
          <label className="text-xs">Item</label>
          <br />
          <input
            spellCheck={false}
            disabled
            value={itemData.title}
            className="w-full border-b-2 bg-transparent px-4 py-2  pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm"
          />
        </div>

        <div className="mt-4 bg-btndark p-2">
          <label className="text-xs">Change Number (If already have): </label>
          <input className="w-full border-b-2 bg-transparent px-4 py-2  pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm" />
        </div>

        <div className="mt-4 bg-btndark p-2">
          <label className="text-xs">Mode of Communication: </label>

          <div className="flex items-end gap-2">
            <input type="checkbox" />
            <label className="text-xs">Email</label>
            <input className="w-fit flex-1 border-b-2 bg-transparent  px-4 pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm" />
          </div>

          <div className="mt-1 flex items-end gap-2">
            <input type="checkbox" />
            <label className="text-xs">Phone</label>
            <input className="w-fit flex-1 border-b-2 bg-transparent px-4 pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm" />
          </div>
        </div>

        <div className="mt-4 bg-btndark p-2">
          <label className="text-xs">How do you know about us?</label>

          <div className="flex items-end gap-2 mt-1">
            <input type="checkbox" />
            <label className="text-xs">Existing Customer</label>
          </div>

          <div className="flex items-end gap-2 mt-1">
            <input type="checkbox" />
            <label className="text-xs">Instagram/Facebook</label>
          </div>

          <div className="flex items-end gap-2 mt-1">
            <input type="checkbox" />
            <label className="text-xs">Email Newsletters</label>
          </div>

          <div className="flex items-end gap-2 mt-1">
            <input type="checkbox" />
            <label className="text-xs">Google Ads</label>
          </div>

          <div className="flex items-end gap-2 mt-1">
            <input type="checkbox" />
            <label className="text-xs">Blogs</label>
          </div>

          <div className="flex items-end gap-2 mt-1">
            <input type="checkbox" />
            <label className="text-xs">Friend/Family</label>
          </div>

          <div className="flex items-end gap-2 mt-1">
            <input type="checkbox" />
            <label className="text-xs">Others</label>
          </div>
        </div>

        <button className="mt-5 w-full rounded-sm bg-primary px-4 py-2 text-xs font-medium uppercase text-white">
          Submit
        </button>
      </div>
    </div>
  );
}
