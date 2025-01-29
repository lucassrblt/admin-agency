import User from "@/assets/images/user.svg";

export function Header() {
  return (
    <header className="w-full h-[73px] bg-white border-b-[1px] border-gray-300 flex items-center">
      <div className="flex items-center justify-center w-8 h-8 rounded-xl shadow-sm" style={{ background: "var(--linear)"}}>
        <img src={User} alt="User" className="w-5 h-5" />
      </div>
    </header>
  );
}
