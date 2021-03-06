import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
  getStarfieldContract,
  getMasterchefContract,
  getChainlinkOracleContract,
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useStarfield = () => {
  const web3 = useWeb3()
  return useMemo(() => getStarfieldContract(web3), [web3])
}

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}

export const useChainlinkOracleContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getChainlinkOracleContract(web3), [web3])
}
