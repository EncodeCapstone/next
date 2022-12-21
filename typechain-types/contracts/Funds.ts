/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface FundsInterface extends utils.Interface {
  functions: {
    "FundCounter()": FunctionFragment;
    "admin()": FunctionFragment;
    "createfund(string,address,string,string)": FunctionFragment;
    "donateToFund(uint256)": FunctionFragment;
    "endFund(uint256)": FunctionFragment;
    "funds(uint256)": FunctionFragment;
    "getFunderAmount(address,uint256)": FunctionFragment;
    "getOwnFundingAmount(uint256)": FunctionFragment;
    "getTokenBalanceOf()": FunctionFragment;
    "rewardTokenContract()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FundCounter"
      | "admin"
      | "createfund"
      | "donateToFund"
      | "endFund"
      | "funds"
      | "getFunderAmount"
      | "getOwnFundingAmount"
      | "getTokenBalanceOf"
      | "rewardTokenContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FundCounter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createfund",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "donateToFund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "endFund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "funds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFunderAmount",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnFundingAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalanceOf",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokenContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "FundCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createfund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "donateToFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endFund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "funds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFunderAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnFundingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokenContract",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Funds extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FundsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FundCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    createfund(
      _name: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    donateToFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    funds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        boolean,
        string,
        string,
        BigNumber,
        string,
        string
      ] & {
        fundID: BigNumber;
        name: string;
        fundActive: boolean;
        fundOwner: string;
        receiver: string;
        totalFunded: BigNumber;
        description: string;
        cover: string;
      }
    >;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOwnFundingAmount(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenBalanceOf(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardTokenContract(overrides?: CallOverrides): Promise<[string]>;
  };

  FundCounter(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  createfund(
    _name: PromiseOrValue<string>,
    _receiver: PromiseOrValue<string>,
    description: PromiseOrValue<string>,
    _image: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  donateToFund(
    _fundID: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endFund(
    _fundID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  funds(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, boolean, string, string, BigNumber, string, string] & {
      fundID: BigNumber;
      name: string;
      fundActive: boolean;
      fundOwner: string;
      receiver: string;
      totalFunded: BigNumber;
      description: string;
      cover: string;
    }
  >;

  getFunderAmount(
    funder: PromiseOrValue<string>,
    _fundID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOwnFundingAmount(
    _fundID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenBalanceOf(overrides?: CallOverrides): Promise<BigNumber>;

  rewardTokenContract(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    FundCounter(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    createfund(
      _name: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    donateToFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    endFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    funds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        boolean,
        string,
        string,
        BigNumber,
        string,
        string
      ] & {
        fundID: BigNumber;
        name: string;
        fundActive: boolean;
        fundOwner: string;
        receiver: string;
        totalFunded: BigNumber;
        description: string;
        cover: string;
      }
    >;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnFundingAmount(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    rewardTokenContract(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    FundCounter(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    createfund(
      _name: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    donateToFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    funds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnFundingAmount(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    rewardTokenContract(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FundCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createfund(
      _name: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    donateToFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endFund(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    funds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwnFundingAmount(
      _fundID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenBalanceOf(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardTokenContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}