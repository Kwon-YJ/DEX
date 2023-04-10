"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var hardhat_1 = require("hardhat");
it('swaps', function () { return __awaiter(void 0, void 0, void 0, function () {
    var signers, signer, SwapExample, swaper, erc_abi, weth_addr, weth_contract, dai_addr, dai_contract, balance, _a, _b, num_weth, _c, _d, overrides, tx, _e, _f, _g, _h, _j, _k, num_dai, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, hardhat_1.ethers.getSigners()];
            case 1:
                signers = _o.sent();
                signer = signers[0];
                return [4 /*yield*/, hardhat_1.ethers.getContractFactory("SwapExamples")];
            case 2:
                SwapExample = _o.sent();
                return [4 /*yield*/, SwapExample.deploy('0xE592427A0AEce92De3Edee1F18E0157C05861564')];
            case 3:
                swaper = _o.sent();
                return [4 /*yield*/, swaper.deployed()];
            case 4:
                _o.sent();
                erc_abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }];
                weth_addr = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
                weth_contract = new hardhat_1.ethers.Contract(weth_addr, erc_abi, signer);
                dai_addr = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
                dai_contract = new hardhat_1.ethers.Contract(dai_addr, erc_abi, signer);
                _b = (_a = hardhat_1.ethers.utils).formatEther;
                return [4 /*yield*/, signer.getBalance()];
            case 5:
                balance = _b.apply(_a, [(_o.sent())]);
                _d = (_c = hardhat_1.ethers.utils).formatEther;
                return [4 /*yield*/, weth_contract.balanceOf(signer.address)];
            case 6:
                num_weth = _d.apply(_c, [(_o.sent())]);
                (0, chai_1.expect)(num_weth).to.equal('0.0');
                console.log('ETH Balance: ', balance);
                console.log('WETH Balance: ', num_weth);
                console.log('---');
                overrides = {
                    value: hardhat_1.ethers.utils.parseEther('2'),
                    gasLimit: hardhat_1.ethers.utils.hexlify(50000),
                };
                return [4 /*yield*/, weth_contract.deposit(overrides)];
            case 7:
                tx = _o.sent();
                return [4 /*yield*/, tx.wait()
                    // confirm WETH balance increased
                ]; // wait for it to be confirmed in blockchain
            case 8:
                _o.sent(); // wait for it to be confirmed in blockchain
                _f = (_e = hardhat_1.ethers.utils).formatEther;
                return [4 /*yield*/, signer.getBalance()];
            case 9:
                // confirm WETH balance increased
                balance = _f.apply(_e, [(_o.sent())]);
                _h = (_g = hardhat_1.ethers.utils).formatEther;
                return [4 /*yield*/, weth_contract.balanceOf(signer.address)];
            case 10:
                num_weth = _h.apply(_g, [(_o.sent())]);
                (0, chai_1.expect)(num_weth).to.equal('2.0');
                console.log('ETH Balance: ', balance);
                console.log('WETH Balance: ', num_weth);
                console.log('---');
                return [4 /*yield*/, weth_contract.approve(swaper.address, hardhat_1.ethers.utils.parseEther('1'))];
            case 11:
                // approve swapper contract to spend for 1 WETH 
                tx = _o.sent();
                return [4 /*yield*/, tx.wait()
                    // 1 WETH -> DAI 
                ];
            case 12:
                _o.sent();
                return [4 /*yield*/, swaper.swapExactInputSingle(hardhat_1.ethers.utils.parseEther('1'))];
            case 13:
                // 1 WETH -> DAI 
                tx = _o.sent();
                return [4 /*yield*/, tx.wait()
                    // confirm DAI token balance 
                ];
            case 14:
                _o.sent();
                _k = (_j = hardhat_1.ethers.utils).formatEther;
                return [4 /*yield*/, weth_contract.balanceOf(signer.address)];
            case 15:
                // confirm DAI token balance 
                num_weth = _k.apply(_j, [(_o.sent())]);
                _m = (_l = hardhat_1.ethers.utils).formatEther;
                return [4 /*yield*/, dai_contract.balanceOf(signer.address)];
            case 16:
                num_dai = _m.apply(_l, [(_o.sent())]);
                (0, chai_1.expect)(num_weth).to.equal('1.0');
                console.log('WETH Balance: ', num_weth);
                console.log('DAI Balance: ', num_dai);
                return [2 /*return*/];
        }
    });
}); });
