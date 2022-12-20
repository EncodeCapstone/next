import { useEffect, useState } from "react";

export default function ConnectButton() {
  const [account, setAccount] = useState<string | null>(null);

  async function connect() {
    const [accounts] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts);
  }

  useEffect(() => {}, [account]);

  return (
    <button
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-violet-800 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      onClick={() => connect()}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {account == null ? "Connect" : "Connected"}
      </span>
    </button>
  );
}
