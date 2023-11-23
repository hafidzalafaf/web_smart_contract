// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./index.css";

function App() {
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        setLoading(true);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });

          const web3Provider = new ethers.providers.Web3Provider(
            window.ethereum
          );
          setProvider(web3Provider);

          const accounts = await web3Provider.listAccounts();
          setAddress(accounts[0]);

          const userBalance = await web3Provider.getBalance(accounts[0]);
          const etherBalance = ethers.utils.formatEther(userBalance).toString();
          setBalance(etherBalance);
        } catch (error) {
          console.log("error", error);
        } finally {
          setLoading(false);
        }
        console.log("Metamask not detected");
      }
    };

    initProvider();
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-slate-950 flex-col gap-4 flex justify-center items-center">
        <div>
          <p className="text-center">Address : {address}</p>
          <p className="text-center">
            Balance : {loading ? "Loading.." : balance}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
