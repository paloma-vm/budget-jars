import React from 'react';
import './BudgetForm.css';
import { useState } from 'react';


function BudgetForm() {
  // total income
  const [netIncome1, setNetIncome1] = useState('')
  const [netIncome2, setNetIncome2] = useState('')
  const [rentalIncome, setRentalIncome] = useState('')
  const [spousalChild, setSpousalChild] = useState('')
  const [govtBenefits, setGovtBenefits] = useState('')
  const [otherIncome, setOtherIncome] = useState('')
  // fixed expenses
  const [mortgage, setMortgage] = useState('')
  const [propertyTax, setpropertyTax] = useState('')
  const [electricity, setElectricity] = useState('')
  const [gasWater, setGasWater] = useState('')
  const [maintenanceFees, setMaintenanceFees] = useState('')
  const [cable, setCable] = useState('')
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const [internet, setInternet] = useState('')
  const [homeInsurance, setHomeInsurance] = useState('')
  const [car1, setCar1] = useState('')
  const [car2, setCar2] = useState('')
  const [carInsRegn, setCarInsRegn] = useState('')
  const [childcare, setChildcare] = useState('')
  const [lifeHealthIns, setLifeHealthIns] = useState('')
  // variable expenses
  const [allowances, setAllowances] = useState('')
  const [gasOil, setGasOil] = useState('')
  const [carRepairs, setCarRepairs] = useState('')
  const [publicTranspo, setPublicTranspo] = useState('')
  const [taxi, setTaxi] = useState('')
  const [parking, setParking] = useState('')
  const [medicalDental, setMedicalDental] = useState('')
  const [groceries, setGroceries] = useState('')
  const [restaurant, setrestaurant] = useState('')
  const [clothes, setClothes] = useState('')
  const [entertainment, setEntertainment] = useState('')
  const [pet, setPet] = useState('')
  const [familyGifts, setFamilyGifts] = useState('')
  const [vacation, setVacation] = useState('')
  const [hobby, setHobby] = useState('')
  const [sports, setSports] = useState('')
  const [clubUnion, setClubUnion] = useState('')
  const [charity, setCharity] = useState('')
  const [bankFees, setBankFees] = useState('')
  const [taxes, setTaxes] = useState('')
  const [debtRepayment, setDebtRepayment] = useState('')
  const [emergencyFund, setEmergencyFund] = useState('')
  const [educationSavings, setEducationSavings] = useState('')
  const [retirementSavings, setRetirementSavings] = useState('')


  return (
    <div className='BudgetForm'>
      <h2>
        Please enter monthly amounts in the blank spaces. 
        If an item does not apply, please leave the space blank.
      </h2>

      <h3>Total Income</h3>
      <form className='TotalIncome'>
        <div className='row'>
          <label>Net income #1</label>
          <input
            type="number"
            value={netIncome1}
            onChange={(e) => setNetIncome1(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Net income #2</label>
          <input
            type="number"
            value={netIncome2}
            onChange={(e) => setNetIncome2(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Rental income</label>
          <input
            type="number"
            value={rentalIncome}
            onChange={(e) => setRentalIncome(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Spousal/Child Support</label>
          <input
            type="number"
            value={spousalChild}
            onChange={(e) => setSpousalChild(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Government Benefits</label>
          <input
            type="number"
            value={govtBenefits}
            onChange={(e) => setGovtBenefits(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Other income</label>
          <input
            type="number"
            value={otherIncome}
            onChange={(e) => setOtherIncome(e.target.value)}
          />
        </div>
      </form>

      <h3>Fixed Expenses</h3>
      <form className='FixedExpenses'>
        <div className='row'>
          <label>Mortgage or Rent</label>
          <input
            type="number"
            value={mortgage}
            onChange={(e) => setMortgage(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Property Tax</label>
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setpropertyTax(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Electricity</label>
          <input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Gas and Water</label>
          <input
            type="number"
            value={gasWater}
            onChange={(e) => setGasWater(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Maintenance Fees</label>
          <input
            type="number"
            value={maintenanceFees}
            onChange={(e) => setMaintenanceFees(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Cable</label>
          <input
            type="number"
            value={cable}
            onChange={(e) => setCable(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Phone #1</label>
          <input
            type="number"
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Phone #2</label>
          <input
            type="number"
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Internet</label>
          <input
            type="number"
            value={internet}
            onChange={(e) => setInternet(e.target.value)}
          />    
        </div>
        <div className='row'>
          <label>Home Insurance</label>
          <input
            type="number"
            value={homeInsurance}
            onChange={(e) => setHomeInsurance(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Childcare</label>
          <input
            type="number"
            value={childcare}
            onChange={(e) => setChildcare(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Car #1</label>
          <input
            type="number"
            value={car1}
            onChange={(e) => setCar1(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Car #2</label>
          <input
            type="number"
            value={car2}
            onChange={(e) => setCar2(e.target.value)}
          />
        </div>
        <div className='row'>
          <label>Car insurance and registration</label>
          <input
            type="number"
            value={carInsRegn}
            onChange={(e) => setCarInsRegn(e.target.value)}
          />    
        </div>
        <div className='row'>
          <label>Life and Health Insurance</label>
          <input
            type="number"
            value={lifeHealthIns}
            onChange={(e) => setLifeHealthIns(e.target.value)}
          />  
        </div>
      </form>
    </div>
  )

}

 
export default BudgetForm