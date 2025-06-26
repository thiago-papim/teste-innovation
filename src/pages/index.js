import InputForm from "components/InputLogin";
import ButtonLogin from "components/LoginButton";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fundo-home.jpg')" }}
    >
      <div className="absolute inset-0 bg-white opacity-30"></div>

      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <h1 className="text-[#9fe900] font-extrabold sm:text-[32px] text-[25px] text-center mb-10 bg-black/60 rounded-3xl px-3 mx-2">
          Bem-vindo a Innovation Brindes
        </h1>
        <div className="gap-4 flex flex-col bg-[#80BC00] sm:p-20 sm:pb-10 py-10 px-5 rounded-xl sm:w-[600px] w-[90%]">
          <InputForm tipo="text" placeholder="Usuário" icone="usuario" />
          <InputForm tipo="password" placeholder="Senha" icone="senha" />
          <div className="flex justify-between mt-2 px-3">
            <label className="inline-flex items-center space-x-2 cursor-pointer text-white">
              <input type="checkbox" className="peer hidden" />
              <div
                className="w-[12px] h-[12px] border border-white text-[10px]
               peer-checked:text-white text-transparent flex items-center justify-center"
              >
                ✓
              </div>
              <span className="text-[13px]">Manter logado</span>
            </label>
            <button className="cursor-pointer text-[13px] text-white">
              Esqueceu a senha?
            </button>
          </div>
          <ButtonLogin />
        </div>
      </div>
    </div>
  );
}
