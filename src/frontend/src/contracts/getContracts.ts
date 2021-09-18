import { useSelector } from 'react-redux'
import { RootState } from '../reducers/index';
import cakeAbi from '../config/abi/cake.json'
import tokens from '../config/constants/tokens'

export const GetCake = async () => {
  const web3: any = useSelector((state: RootState) => state.reducers.web3)
  console.log(web3)
  if (web3.eth == undefined)
  { 
    console.log('web3 undefined')
    return null;
  }

  let accounts: any = await web3.eth.getAccounts()
  console.log(accounts[0])

  const chainId = process.env.REACT_APP_CHAIN_ID != undefined ? "TEST": "MAIN"
  let address: string = tokens.cake.address[chainId]
  console.log(address)

  let cakeInst: any = await new web3.eth.Contract(
    cakeAbi, address
  )
  console.log(cakeInst)
  return cakeInst
}

export const GetContract = async () => {
  return "contract"
}