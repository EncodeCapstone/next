import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { create, IPFSHTTPClient } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ABI from "../constants/abi.json";
import { useAccounts } from "../components/AccountContext";
import { useRouter } from "next/router";

let address: string = "0xa341093115148C5763a13F847C68dE43a4030175";

export default function OpenFund() {
  const router = useRouter();
  const [clientIpfs, setClientIpfs] = useState<IPFSHTTPClient>();
  const [coverUrl, updateCoverUrl] = useState(``);

  useEffect(() => {
    getClient();
  }, []);

  async function getSigner() {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    return signer;
  }

  async function getClient() {
    const auth =
      "Basic " +
      Buffer.from(
        // process.env.INFURA_ID + ":" + process.env.INFURA_SECRET
        "2DGDEMlu5nugwSNhTQgruLSqDvw" + ":" + "e43956f73a145405fdc7ac39e7d15edc"
      ).toString("base64");

    // create IPFS client
    const clientIpfs = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      apiPath: "/api/v0",
      headers: {
        authorization: auth,
      },
    });
    setClientIpfs(clientIpfs);
  }

  // uploads automatically to IPFS
  async function setCover(e: any) {
    const cover = e.target?.files[0];
    try {
      const added = await clientIpfs?.add(cover);
      const url = `https://lenspad.infura-ipfs.io/ipfs/${added?.path}`;
      updateCoverUrl(url);
      console.log("set cover: ", url);
    } catch (error) {
      console.log("Error uploading cover: ", error);
    }
  }

  async function createCampaign() {
    const contract = new ethers.Contract(address, ABI, await getSigner());
    try {
      const tx = await contract.createfund(
        (document.getElementById("name") as HTMLInputElement).value,
        (document.getElementById("address") as HTMLInputElement).value,
        (document.getElementById("description") as HTMLInputElement).value,
        coverUrl
      );
      await tx.wait();
	  router.reload();
      console.log("Campaign created: " + tx.hash);
    } catch (error) {
      console.log("Error while creating campaign: ", error);
    }
  }

  async function fetchData() {
	const contract = new ethers.Contract(address, ABI, await getSigner());
	try {
		const fund = await contract.funds(1);
		console.log('fund: ' + fund);
	} catch (err) {
		console.log('Error fetching data: ' + err);
	}
  }

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <Nav />
        </div>
      </div>
      <h2 className="flex justify-center mb-6 mt-24 mt- text-4xl font-bold text-black">
        Create your own campaign
      </h2>
      <div className="flex justify-around mt-36">
        <div className="flex pl-2">
          <div>
            <p className="flex justify-center mb-3 text-black font-semibold">
              Upload a campaign cover
            </p>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center w-64 h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-purple-900"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={setCover}
              />
            </label>
          </div>
          <div className="ml-6 mt-9">
            {coverUrl && (
              <img src={coverUrl} width="200px" className="rounded-lg" />
            )}
          </div>
        </div>
        <div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Campaign Goal (in $)
            </label>
            <input
              type="text"
              id="goal"
              className="font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Receiver Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Campaign Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />
          </div>
          <div className="mb-6 h-80 w-80">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Campaign Description
            </label>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <textarea
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-gray-50 bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-violet-500 focus:outline-none
      "
                  id="description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => createCampaign()}
        >
          Create Campaign
        </button>
      </div>
      <Footer />
    </div>
  );
}
