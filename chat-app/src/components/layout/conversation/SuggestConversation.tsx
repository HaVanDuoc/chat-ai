import { GiMagicHat } from "react-icons/gi";
import { IoMdImages } from "react-icons/io";

const SuggestConversation = () => {
    return (
        <div className="flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto py-10">
            <div className="flex justify-center items-center h-[180px]">
                <GiMagicHat size={100} className="opacity-60" />
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-5 pb-8">
                {Array(4)
                    .fill(null)
                    .map((_, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer"
                        >
                            <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                            <div>Create an illustration for a bakery</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SuggestConversation;
