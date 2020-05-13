import React, { Component } from 'react';

class FinanceWork extends Component {
    render() {
        return (
            <div className="financework-container">
                 <br/><br/><br/>
                <h1 className="financeWork head1">WORKING AMERICANS</h1>
                <h1 className="financeWork head2">ARE FINANCIALLY STRESSED</h1><br/>
                <p className="para1">32% of workers run out of money between paychecks, causing them to turn to high-interest credit cards or payday loans to make ends meet.</p>
                <div id="fin-intro">
                <div className="row">
                <div className="col-lg-4" id="financeWorkListColumn">
                <div className="financeWorkList">POOR MENTAL HEALTH</div><br/><br/>
                <div style={{color:"#ffffff"}}>People with financial stress are 6 times more likely to be suffering from anxiety and 7 times more likely to experience depression.</div><br/><br/>
                <div style={{color:"#99A8C1"}}>(Source: The 2nd Annual Salary Finance Report)</div>
                </div>
                <div className="col-lg-4" id="financeWorkListColumn">
                <div className="financeWorkList">LOST PRODUCTIVITY</div><br/>
                <div style={{color:"#ffffff"}}>Those with financial worries are 10 times more likely not to finish their daily tasks on time and 9 times more likely to experience diminished work quality. Combined, this equates to 29-39 productive workdays lost per year.</div><br/>
                <div style={{color:"#99A8C1"}}>(Source: The 2nd Annual Salary Finance Report)</div>
                </div>
                <div className="col-lg-4" id="financeWorkListColumn">
                <div className="financeWorkList">INCREASED TURNOVER</div><br/><br/>
                <div style={{color:"#ffffff"}}>Those with financial worries are 2.2 times more likely to be looking for another job. The cost of losing an employee is 16-20% of total salary cost.</div><br/>
                <div style={{color:"#99A8C1"}}>(Source: The Power of the Salary Link, Harvard Kennedy School)</div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default FinanceWork;