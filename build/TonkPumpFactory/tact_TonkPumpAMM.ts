import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type JettonData = {
    $$type: 'JettonData';
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell;
    walletCode: Cell;
}

export function storeJettonData(src: JettonData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.totalSupply, 257);
        b_0.storeBit(src.mintable);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.content);
        b_0.storeRef(src.walletCode);
    };
}

export function loadJettonData(slice: Slice) {
    let sc_0 = slice;
    let _totalSupply = sc_0.loadIntBig(257);
    let _mintable = sc_0.loadBit();
    let _owner = sc_0.loadAddress();
    let _content = sc_0.loadRef();
    let _walletCode = sc_0.loadRef();
    return { $$type: 'JettonData' as const, totalSupply: _totalSupply, mintable: _mintable, owner: _owner, content: _content, walletCode: _walletCode };
}

function loadTupleJettonData(source: TupleReader) {
    let _totalSupply = source.readBigNumber();
    let _mintable = source.readBoolean();
    let _owner = source.readAddress();
    let _content = source.readCell();
    let _walletCode = source.readCell();
    return { $$type: 'JettonData' as const, totalSupply: _totalSupply, mintable: _mintable, owner: _owner, content: _content, walletCode: _walletCode };
}

function storeTupleJettonData(source: JettonData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.totalSupply);
    builder.writeBoolean(source.mintable);
    builder.writeAddress(source.owner);
    builder.writeCell(source.content);
    builder.writeCell(source.walletCode);
    return builder.build();
}

function dictValueParserJettonData(): DictionaryValue<JettonData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonData(src)).endCell());
        },
        parse: (src) => {
            return loadJettonData(src.loadRef().beginParse());
        }
    }
}

export type JettonWalletData = {
    $$type: 'JettonWalletData';
    balance: bigint;
    owner: Address;
    master: Address;
    walletCode: Cell;
}

export function storeJettonWalletData(src: JettonWalletData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.balance, 257);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.master);
        b_0.storeRef(src.walletCode);
    };
}

export function loadJettonWalletData(slice: Slice) {
    let sc_0 = slice;
    let _balance = sc_0.loadIntBig(257);
    let _owner = sc_0.loadAddress();
    let _master = sc_0.loadAddress();
    let _walletCode = sc_0.loadRef();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}

function loadTupleJettonWalletData(source: TupleReader) {
    let _balance = source.readBigNumber();
    let _owner = source.readAddress();
    let _master = source.readAddress();
    let _walletCode = source.readCell();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}

function storeTupleJettonWalletData(source: JettonWalletData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.balance);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.master);
    builder.writeCell(source.walletCode);
    return builder.build();
}

function dictValueParserJettonWalletData(): DictionaryValue<JettonWalletData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonWalletData(src)).endCell());
        },
        parse: (src) => {
            return loadJettonWalletData(src.loadRef().beginParse());
        }
    }
}

export type DeployContractAndAMM = {
    $$type: 'DeployContractAndAMM';
    content: Cell;
    ticker: string;
    v: bigint;
}

export function storeDeployContractAndAMM(src: DeployContractAndAMM) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2291209167, 32);
        b_0.storeRef(src.content);
        b_0.storeStringRefTail(src.ticker);
        b_0.storeInt(src.v, 257);
    };
}

export function loadDeployContractAndAMM(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2291209167) { throw Error('Invalid prefix'); }
    let _content = sc_0.loadRef();
    let _ticker = sc_0.loadStringRefTail();
    let _v = sc_0.loadIntBig(257);
    return { $$type: 'DeployContractAndAMM' as const, content: _content, ticker: _ticker, v: _v };
}

function loadTupleDeployContractAndAMM(source: TupleReader) {
    let _content = source.readCell();
    let _ticker = source.readString();
    let _v = source.readBigNumber();
    return { $$type: 'DeployContractAndAMM' as const, content: _content, ticker: _ticker, v: _v };
}

function storeTupleDeployContractAndAMM(source: DeployContractAndAMM) {
    let builder = new TupleBuilder();
    builder.writeCell(source.content);
    builder.writeString(source.ticker);
    builder.writeNumber(source.v);
    return builder.build();
}

function dictValueParserDeployContractAndAMM(): DictionaryValue<DeployContractAndAMM> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployContractAndAMM(src)).endCell());
        },
        parse: (src) => {
            return loadDeployContractAndAMM(src.loadRef().beginParse());
        }
    }
}

export type Buy = {
    $$type: 'Buy';
    tonInDollars: bigint;
    v: bigint;
}

export function storeBuy(src: Buy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1874558029, 32);
        b_0.storeUint(src.tonInDollars, 256);
        b_0.storeInt(src.v, 257);
    };
}

export function loadBuy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1874558029) { throw Error('Invalid prefix'); }
    let _tonInDollars = sc_0.loadUintBig(256);
    let _v = sc_0.loadIntBig(257);
    return { $$type: 'Buy' as const, tonInDollars: _tonInDollars, v: _v };
}

function loadTupleBuy(source: TupleReader) {
    let _tonInDollars = source.readBigNumber();
    let _v = source.readBigNumber();
    return { $$type: 'Buy' as const, tonInDollars: _tonInDollars, v: _v };
}

function storeTupleBuy(source: Buy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.tonInDollars);
    builder.writeNumber(source.v);
    return builder.build();
}

function dictValueParserBuy(): DictionaryValue<Buy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBuy(src)).endCell());
        },
        parse: (src) => {
            return loadBuy(src.loadRef().beginParse());
        }
    }
}

export type Sell = {
    $$type: 'Sell';
    amount: bigint;
    tonInDollars: bigint;
}

export function storeSell(src: Sell) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1698813713, 32);
        b_0.storeUint(src.amount, 256);
        b_0.storeUint(src.tonInDollars, 256);
    };
}

export function loadSell(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1698813713) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadUintBig(256);
    let _tonInDollars = sc_0.loadUintBig(256);
    return { $$type: 'Sell' as const, amount: _amount, tonInDollars: _tonInDollars };
}

function loadTupleSell(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _tonInDollars = source.readBigNumber();
    return { $$type: 'Sell' as const, amount: _amount, tonInDollars: _tonInDollars };
}

function storeTupleSell(source: Sell) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeNumber(source.tonInDollars);
    return builder.build();
}

function dictValueParserSell(): DictionaryValue<Sell> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSell(src)).endCell());
        },
        parse: (src) => {
            return loadSell(src.loadRef().beginParse());
        }
    }
}

export type DevMint = {
    $$type: 'DevMint';
    yciycWallet: Address;
    marketMakerWallet: Address;
    exchangeWallet: Address;
}

export function storeDevMint(src: DevMint) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1333855987, 32);
        b_0.storeAddress(src.yciycWallet);
        b_0.storeAddress(src.marketMakerWallet);
        b_0.storeAddress(src.exchangeWallet);
    };
}

export function loadDevMint(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1333855987) { throw Error('Invalid prefix'); }
    let _yciycWallet = sc_0.loadAddress();
    let _marketMakerWallet = sc_0.loadAddress();
    let _exchangeWallet = sc_0.loadAddress();
    return { $$type: 'DevMint' as const, yciycWallet: _yciycWallet, marketMakerWallet: _marketMakerWallet, exchangeWallet: _exchangeWallet };
}

function loadTupleDevMint(source: TupleReader) {
    let _yciycWallet = source.readAddress();
    let _marketMakerWallet = source.readAddress();
    let _exchangeWallet = source.readAddress();
    return { $$type: 'DevMint' as const, yciycWallet: _yciycWallet, marketMakerWallet: _marketMakerWallet, exchangeWallet: _exchangeWallet };
}

function storeTupleDevMint(source: DevMint) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.yciycWallet);
    builder.writeAddress(source.marketMakerWallet);
    builder.writeAddress(source.exchangeWallet);
    return builder.build();
}

function dictValueParserDevMint(): DictionaryValue<DevMint> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDevMint(src)).endCell());
        },
        parse: (src) => {
            return loadDevMint(src.loadRef().beginParse());
        }
    }
}

export type ContractDeployed = {
    $$type: 'ContractDeployed';
    jettonAddress: Address;
    AMMAddress: Address;
}

export function storeContractDeployed(src: ContractDeployed) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3112054787, 32);
        b_0.storeAddress(src.jettonAddress);
        b_0.storeAddress(src.AMMAddress);
    };
}

export function loadContractDeployed(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3112054787) { throw Error('Invalid prefix'); }
    let _jettonAddress = sc_0.loadAddress();
    let _AMMAddress = sc_0.loadAddress();
    return { $$type: 'ContractDeployed' as const, jettonAddress: _jettonAddress, AMMAddress: _AMMAddress };
}

function loadTupleContractDeployed(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    let _AMMAddress = source.readAddress();
    return { $$type: 'ContractDeployed' as const, jettonAddress: _jettonAddress, AMMAddress: _AMMAddress };
}

function storeTupleContractDeployed(source: ContractDeployed) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.jettonAddress);
    builder.writeAddress(source.AMMAddress);
    return builder.build();
}

function dictValueParserContractDeployed(): DictionaryValue<ContractDeployed> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContractDeployed(src)).endCell());
        },
        parse: (src) => {
            return loadContractDeployed(src.loadRef().beginParse());
        }
    }
}

export type SafeWithdraw = {
    $$type: 'SafeWithdraw';
    amount: bigint;
}

export function storeSafeWithdraw(src: SafeWithdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3694826077, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadSafeWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3694826077) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    return { $$type: 'SafeWithdraw' as const, amount: _amount };
}

function loadTupleSafeWithdraw(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'SafeWithdraw' as const, amount: _amount };
}

function storeTupleSafeWithdraw(source: SafeWithdraw) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserSafeWithdraw(): DictionaryValue<SafeWithdraw> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSafeWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadSafeWithdraw(src.loadRef().beginParse());
        }
    }
}

export type Mint = {
    $$type: 'Mint';
    amount: bigint;
    receiver: Address;
    minter: bigint;
}

export function storeMint(src: Mint) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2789447861, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.receiver);
        b_0.storeInt(src.minter, 257);
    };
}

export function loadMint(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2789447861) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _receiver = sc_0.loadAddress();
    let _minter = sc_0.loadIntBig(257);
    return { $$type: 'Mint' as const, amount: _amount, receiver: _receiver, minter: _minter };
}

function loadTupleMint(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _receiver = source.readAddress();
    let _minter = source.readBigNumber();
    return { $$type: 'Mint' as const, amount: _amount, receiver: _receiver, minter: _minter };
}

function storeTupleMint(source: Mint) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.receiver);
    builder.writeNumber(source.minter);
    return builder.build();
}

function dictValueParserMint(): DictionaryValue<Mint> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMint(src)).endCell());
        },
        parse: (src) => {
            return loadMint(src.loadRef().beginParse());
        }
    }
}

export type MintPublic = {
    $$type: 'MintPublic';
    amount: bigint;
}

export function storeMintPublic(src: MintPublic) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(354453439, 32);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadMintPublic(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 354453439) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    return { $$type: 'MintPublic' as const, amount: _amount };
}

function loadTupleMintPublic(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'MintPublic' as const, amount: _amount };
}

function storeTupleMintPublic(source: MintPublic) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserMintPublic(): DictionaryValue<MintPublic> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMintPublic(src)).endCell());
        },
        parse: (src) => {
            return loadMintPublic(src.loadRef().beginParse());
        }
    }
}

export type TokenTransfer = {
    $$type: 'TokenTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    response_destination: Address;
    custom_payload: Cell | null;
    forward_ton_amount: bigint;
    forward_payload: Cell;
}

export function storeTokenTransfer(src: TokenTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _destination = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleTokenTransfer(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _destination = source.readAddress();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleTokenTransfer(source: TokenTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.destination);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTokenTransfer(): DictionaryValue<TokenTransfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTokenTransfer(src.loadRef().beginParse());
        }
    }
}

export type TokenTransferInternal = {
    $$type: 'TokenTransferInternal';
    queryId: bigint;
    amount: bigint;
    from: Address;
    response_destination: Address;
    forward_ton_amount: bigint;
    forward_payload: Cell;
}

export function storeTokenTransferInternal(src: TokenTransferInternal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(395134233, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeAddress(src.response_destination);
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenTransferInternal(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 395134233) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'TokenTransferInternal' as const, queryId: _queryId, amount: _amount, from: _from, response_destination: _response_destination, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleTokenTransferInternal(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _response_destination = source.readAddress();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return { $$type: 'TokenTransferInternal' as const, queryId: _queryId, amount: _amount, from: _from, response_destination: _response_destination, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleTokenTransferInternal(source: TokenTransferInternal) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.from);
    builder.writeAddress(source.response_destination);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTokenTransferInternal(): DictionaryValue<TokenTransferInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenTransferInternal(src)).endCell());
        },
        parse: (src) => {
            return loadTokenTransferInternal(src.loadRef().beginParse());
        }
    }
}

export type TokenNotification = {
    $$type: 'TokenNotification';
    queryId: bigint;
    amount: bigint;
    from: Address;
    forward_payload: Cell;
}

export function storeTokenNotification(src: TokenNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forward_payload: _forward_payload };
}

function loadTupleTokenNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _forward_payload = source.readCell();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forward_payload: _forward_payload };
}

function storeTupleTokenNotification(source: TokenNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.from);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTokenNotification(): DictionaryValue<TokenNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenNotification(src)).endCell());
        },
        parse: (src) => {
            return loadTokenNotification(src.loadRef().beginParse());
        }
    }
}

export type TokenBurn = {
    $$type: 'TokenBurn';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    response_destination: Address;
}

export function storeTokenBurn(src: TokenBurn) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1499400124, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.response_destination);
    };
}

export function loadTokenBurn(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1499400124) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    return { $$type: 'TokenBurn' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function loadTupleTokenBurn(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _owner = source.readAddress();
    let _response_destination = source.readAddress();
    return { $$type: 'TokenBurn' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function storeTupleTokenBurn(source: TokenBurn) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.response_destination);
    return builder.build();
}

function dictValueParserTokenBurn(): DictionaryValue<TokenBurn> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenBurn(src)).endCell());
        },
        parse: (src) => {
            return loadTokenBurn(src.loadRef().beginParse());
        }
    }
}

export type TokenBurnNotification = {
    $$type: 'TokenBurnNotification';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    response_destination: Address | null;
}

export function storeTokenBurnNotification(src: TokenBurnNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2078119902, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.response_destination);
    };
}

export function loadTokenBurnNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2078119902) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadMaybeAddress();
    return { $$type: 'TokenBurnNotification' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function loadTupleTokenBurnNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _owner = source.readAddress();
    let _response_destination = source.readAddressOpt();
    return { $$type: 'TokenBurnNotification' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function storeTupleTokenBurnNotification(source: TokenBurnNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.response_destination);
    return builder.build();
}

function dictValueParserTokenBurnNotification(): DictionaryValue<TokenBurnNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenBurnNotification(src)).endCell());
        },
        parse: (src) => {
            return loadTokenBurnNotification(src.loadRef().beginParse());
        }
    }
}

export type TokenExcesses = {
    $$type: 'TokenExcesses';
    queryId: bigint;
}

export function storeTokenExcesses(src: TokenExcesses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3576854235, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadTokenExcesses(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'TokenExcesses' as const, queryId: _queryId };
}

function loadTupleTokenExcesses(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'TokenExcesses' as const, queryId: _queryId };
}

function storeTupleTokenExcesses(source: TokenExcesses) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserTokenExcesses(): DictionaryValue<TokenExcesses> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenExcesses(src)).endCell());
        },
        parse: (src) => {
            return loadTokenExcesses(src.loadRef().beginParse());
        }
    }
}

export type TokenUpdateContent = {
    $$type: 'TokenUpdateContent';
    content: Cell;
}

export function storeTokenUpdateContent(src: TokenUpdateContent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2937889386, 32);
        b_0.storeRef(src.content);
    };
}

export function loadTokenUpdateContent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2937889386) { throw Error('Invalid prefix'); }
    let _content = sc_0.loadRef();
    return { $$type: 'TokenUpdateContent' as const, content: _content };
}

function loadTupleTokenUpdateContent(source: TupleReader) {
    let _content = source.readCell();
    return { $$type: 'TokenUpdateContent' as const, content: _content };
}

function storeTupleTokenUpdateContent(source: TokenUpdateContent) {
    let builder = new TupleBuilder();
    builder.writeCell(source.content);
    return builder.build();
}

function dictValueParserTokenUpdateContent(): DictionaryValue<TokenUpdateContent> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenUpdateContent(src)).endCell());
        },
        parse: (src) => {
            return loadTokenUpdateContent(src.loadRef().beginParse());
        }
    }
}

export type UpdateAllocationPercentages = {
    $$type: 'UpdateAllocationPercentages';
    yciyAllocation: bigint;
    developerAllocation: bigint;
    marketMakerAllocation: bigint;
    exchangeAllocation: bigint;
}

export function storeUpdateAllocationPercentages(src: UpdateAllocationPercentages) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2155690333, 32);
        b_0.storeUint(src.yciyAllocation, 64);
        b_0.storeUint(src.developerAllocation, 64);
        b_0.storeUint(src.marketMakerAllocation, 64);
        b_0.storeUint(src.exchangeAllocation, 64);
    };
}

export function loadUpdateAllocationPercentages(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2155690333) { throw Error('Invalid prefix'); }
    let _yciyAllocation = sc_0.loadUintBig(64);
    let _developerAllocation = sc_0.loadUintBig(64);
    let _marketMakerAllocation = sc_0.loadUintBig(64);
    let _exchangeAllocation = sc_0.loadUintBig(64);
    return { $$type: 'UpdateAllocationPercentages' as const, yciyAllocation: _yciyAllocation, developerAllocation: _developerAllocation, marketMakerAllocation: _marketMakerAllocation, exchangeAllocation: _exchangeAllocation };
}

function loadTupleUpdateAllocationPercentages(source: TupleReader) {
    let _yciyAllocation = source.readBigNumber();
    let _developerAllocation = source.readBigNumber();
    let _marketMakerAllocation = source.readBigNumber();
    let _exchangeAllocation = source.readBigNumber();
    return { $$type: 'UpdateAllocationPercentages' as const, yciyAllocation: _yciyAllocation, developerAllocation: _developerAllocation, marketMakerAllocation: _marketMakerAllocation, exchangeAllocation: _exchangeAllocation };
}

function storeTupleUpdateAllocationPercentages(source: UpdateAllocationPercentages) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.yciyAllocation);
    builder.writeNumber(source.developerAllocation);
    builder.writeNumber(source.marketMakerAllocation);
    builder.writeNumber(source.exchangeAllocation);
    return builder.build();
}

function dictValueParserUpdateAllocationPercentages(): DictionaryValue<UpdateAllocationPercentages> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpdateAllocationPercentages(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateAllocationPercentages(src.loadRef().beginParse());
        }
    }
}

export type DeployedPair = {
    $$type: 'DeployedPair';
    jettonAddress: Address;
    ammAddress: Address;
}

export function storeDeployedPair(src: DeployedPair) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.jettonAddress);
        b_0.storeAddress(src.ammAddress);
    };
}

export function loadDeployedPair(slice: Slice) {
    let sc_0 = slice;
    let _jettonAddress = sc_0.loadAddress();
    let _ammAddress = sc_0.loadAddress();
    return { $$type: 'DeployedPair' as const, jettonAddress: _jettonAddress, ammAddress: _ammAddress };
}

function loadTupleDeployedPair(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    let _ammAddress = source.readAddress();
    return { $$type: 'DeployedPair' as const, jettonAddress: _jettonAddress, ammAddress: _ammAddress };
}

function storeTupleDeployedPair(source: DeployedPair) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.jettonAddress);
    builder.writeAddress(source.ammAddress);
    return builder.build();
}

function dictValueParserDeployedPair(): DictionaryValue<DeployedPair> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployedPair(src)).endCell());
        },
        parse: (src) => {
            return loadDeployedPair(src.loadRef().beginParse());
        }
    }
}

 type TonkPumpAMM_init_args = {
    $$type: 'TonkPumpAMM_init_args';
    _id: bigint;
    _owner: Address;
    _dev: Address;
    _jettonAddress: Address;
    _ticker: string;
    v: bigint;
}

function initTonkPumpAMM_init_args(src: TonkPumpAMM_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src._id, 257);
        b_0.storeAddress(src._owner);
        b_0.storeAddress(src._dev);
        let b_1 = new Builder();
        b_1.storeAddress(src._jettonAddress);
        b_1.storeStringRefTail(src._ticker);
        b_1.storeInt(src.v, 257);
        b_0.storeRef(b_1.endCell());
    };
}

async function TonkPumpAMM_init(_id: bigint, _owner: Address, _dev: Address, _jettonAddress: Address, _ticker: string, v: bigint) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTonkPumpAMM_init_args({ $$type: 'TonkPumpAMM_init_args', _id, _owner, _dev, _jettonAddress, _ticker, v })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const TonkPumpAMM_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    3734: { message: `Not Owner` },
    4159: { message: `Invalid value!!` },
    4429: { message: `Invalid sender` },
    6898: { message: `The total supply will be overlapping.` },
    14796: { message: `Exceeds max supply` },
    18336: { message: `Insufficient funds for deployment` },
    18668: { message: `Can't Mint Anymore` },
    18720: { message: `Only dev can mint` },
    26785: { message: `Jetton deployment failed` },
    34030: { message: `Insufficient TON balance` },
    38006: { message: `Invalid deployment fee` },
    40368: { message: `Contract stopped` },
    42708: { message: `Invalid sender!` },
    42834: { message: `Insufficient balance for both Jetton and AMM deployment` },
    43103: { message: `Invalid withdrawal amount` },
    43422: { message: `Invalid value - Burn` },
    48516: { message: `Minting cannot start yet` },
    48673: { message: `Insufficient balance for withdrawal` },
    51687: { message: `Already minted` },
    53296: { message: `Contract not stopped` },
    54615: { message: `Insufficient balance` },
    54687: { message: `AMM deployment failed` },
    62972: { message: `Invalid balance` },
}

const TonkPumpAMM_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"JettonData","header":null,"fields":[{"name":"totalSupply","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mintable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"walletCode","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"JettonWalletData","header":null,"fields":[{"name":"balance","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"master","type":{"kind":"simple","type":"address","optional":false}},{"name":"walletCode","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"DeployContractAndAMM","header":2291209167,"fields":[{"name":"content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"ticker","type":{"kind":"simple","type":"string","optional":false}},{"name":"v","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Buy","header":1874558029,"fields":[{"name":"tonInDollars","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"v","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Sell","header":1698813713,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"tonInDollars","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"DevMint","header":1333855987,"fields":[{"name":"yciycWallet","type":{"kind":"simple","type":"address","optional":false}},{"name":"marketMakerWallet","type":{"kind":"simple","type":"address","optional":false}},{"name":"exchangeWallet","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ContractDeployed","header":3112054787,"fields":[{"name":"jettonAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"AMMAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SafeWithdraw","header":3694826077,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Mint","header":2789447861,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"receiver","type":{"kind":"simple","type":"address","optional":false}},{"name":"minter","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"MintPublic","header":354453439,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TokenTransfer","header":260734629,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"TokenTransferInternal","header":395134233,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"from","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"TokenNotification","header":1935855772,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"from","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"TokenBurn","header":1499400124,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TokenBurnNotification","header":2078119902,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"TokenExcesses","header":3576854235,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"TokenUpdateContent","header":2937889386,"fields":[{"name":"content","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"UpdateAllocationPercentages","header":2155690333,"fields":[{"name":"yciyAllocation","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"developerAllocation","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"marketMakerAllocation","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"exchangeAllocation","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployedPair","header":null,"fields":[{"name":"jettonAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"ammAddress","type":{"kind":"simple","type":"address","optional":false}}]},
]

const TonkPumpAMM_getters: ABIGetter[] = [
    {"name":"ticker","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"ammAddress","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"jettonAddress","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"jettonMaxSupply","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"MarketCap","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"jettonTotalSupply","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"id","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"tonBalance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"ammJettonWalletAddress","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"priceFromSupply","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const TonkPumpAMM_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"TokenNotification"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Buy"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DevMint"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class TonkPumpAMM implements Contract {
    
    static async init(_id: bigint, _owner: Address, _dev: Address, _jettonAddress: Address, _ticker: string, v: bigint) {
        return await TonkPumpAMM_init(_id, _owner, _dev, _jettonAddress, _ticker, v);
    }
    
    static async fromInit(_id: bigint, _owner: Address, _dev: Address, _jettonAddress: Address, _ticker: string, v: bigint) {
        const init = await TonkPumpAMM_init(_id, _owner, _dev, _jettonAddress, _ticker, v);
        const address = contractAddress(0, init);
        return new TonkPumpAMM(address, init);
    }
    
    static fromAddress(address: Address) {
        return new TonkPumpAMM(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  TonkPumpAMM_types,
        getters: TonkPumpAMM_getters,
        receivers: TonkPumpAMM_receivers,
        errors: TonkPumpAMM_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TokenNotification | Buy | DevMint | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenNotification') {
            body = beginCell().store(storeTokenNotification(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Buy') {
            body = beginCell().store(storeBuy(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DevMint') {
            body = beginCell().store(storeDevMint(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getTicker(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('ticker', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getAmmAddress(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('ammAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getJettonAddress(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('jettonAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getJettonMaxSupply(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('jettonMaxSupply', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getMarketCap(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('MarketCap', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getJettonTotalSupply(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('jettonTotalSupply', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getId(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('id', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getTonBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('tonBalance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getAmmJettonWalletAddress(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('ammJettonWalletAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getPriceFromSupply(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('priceFromSupply', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}