import Header from "components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex w-full mt-20 flex-col items-center text-2xl">
        <h1>Essa página que tentou acessar não existe!</h1>
        <Link href={"/"}>Voltar para paǵina inicial</Link>
      </div>
    </div>
  );
}
