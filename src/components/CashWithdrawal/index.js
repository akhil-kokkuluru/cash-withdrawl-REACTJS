import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  render() {
    return (
      <div className="contentTotalBG">
        <div className="innerBG">
          <div className="nameContainer">
            <div className="S">
              <p>S</p>
            </div>
            <p className="nameSara">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="balanceName">Your Balance</p>
            <div className="balContainer">
              <h1 className="Balance">2000</h1>
              <p className="inRupeestext">In Rupees</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
