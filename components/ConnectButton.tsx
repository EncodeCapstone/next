import { useEffect, useState } from "react";
import { useAccounts } from "./AccountContext";
import detectEthereumProvider from "@metamask/detect-provider";

export default function ConnectButton() {
  //   const [account, setAccount] = useState<string | null>(null);
  const { accounts, setAccounts } = useAccounts();

  async function connect() {
    const provider = await detectEthereumProvider();

    if (provider) {
      console.log("Ethereum successfully detected!");

      // From now on, this should always be true:
      // provider === window.ethereum

      // Access the decentralized web!

      // Legacy providers may only have ethereum.sendAsync
      const chainId = await (provider as any).request({
        method: "eth_chainId",
      });
    } else {
      // if the provider is not detected, detectEthereumProvider resolves to null
      console.error("Please install MetaMask!", Error);
    }
    const [accounts]: any = await (window as any).ethereum?.request({
      method: "eth_requestAccounts",
    });
    setAccounts([accounts]);
  }

  useEffect(() => {}, [accounts]);

  return (
    <button
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-violet-800 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      onClick={() => connect()}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {accounts[0] == null ? "Connect" : "Connected"}
      </span>
    </button>
  );
}
