export default function FormButton({ children }) {
  return (
    <button className="btn px-2 py-1 rounded-lg shadow-lg text-white font-semibold text-lg w-1/5 hover:bg-[#7A9E7E] bg-[#001A23] ">
      {children}
    </button>
  );
}
