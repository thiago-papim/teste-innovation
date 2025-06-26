import { CircularProgress } from "@mui/material";
import Header from "./Header";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center mt-4 w-full">
      <div className="mt-20 flex flex-col items-center justify-center gap-5 p-10 bg-white shadow-lg rounded-lg w-[90%] max-w-sm mx-auto">
        <CircularProgress size={60} thickness={5} />
        <p className="text-gray-700 text-lg font-semibold text-center">
          Carregando, aguarde...
        </p>
      </div>
    </div>
  );
}
