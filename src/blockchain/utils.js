import Web3 from 'web3';

export const createWeb3 = (provider, options = {}) => {

  var realProvider;

  if (typeof provider === 'string') {
    if (provider.includes('wss')) {
      realProvider = new Web3.providers.WebsocketProvider(
        provider,
        options.ethereumNodeTimeout || 10000,
      );
    } else {
      realProvider = new Web3.providers.HttpProvider(
        provider,
        options.ethereumNodeTimeout || 10000,
      );
    }
  } else {
    realProvider = provider;
  }

  return realProvider;
}

export const formatAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-6)
}