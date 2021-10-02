import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import * as utils from './utils';


export class PAYR {
  constructor(provider, networkId, options) {

    this.web3 = utils.createWeb3(provider, options);

    if (options.defaultAccount) {
      this.web3.eth.defaultAccount = options.defaultAccount;
    }
  }
}
