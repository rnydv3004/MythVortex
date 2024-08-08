type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;

  return (
    <>
      <div className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark">
       <button
          onClick={() => {
            handleFaqToggle(id);
          }}
          className="flex gap-4 text-slate-500 dark:text-slate-400 cursor-pointer justify-between px-6 py-5 text-sm font-semibold lg:px-8 lg:py-4"
        >
          <span className="text-left w-full">{quest}</span>

          {activeFaq === id ? (
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        <p
          className={`border border-x-8 border-x-slate-200 border-stroke px-6 py-5 text-sm bg-slate-50 dark:bg-gray-900 font-semibold dark:border-strokedark dark:text-slate-300 lg:px-8 lg:py-4 ${
            activeFaq === id ? "block" : "hidden"
          }`}
        >
          {ans}
        </p>
      </div>
    </>
  );
};

export default FAQItem;
