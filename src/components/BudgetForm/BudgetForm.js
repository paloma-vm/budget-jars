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


  return (
    <div className='BudgetForm'>
      <h3>Total Income</h3>
      <form className='TotalIncome'>
        <label>Net income #1</label>
        <input
          type="number"
          value={netIncome1} 
          onChange={(e) => setNetIncome1(e.target.value)}
        />
        <label>Net income #2</label>
        <input
          type="number"
          value={netIncome2} 
          onChange={(e) => setNetIncome2(e.target.value)}
        />
        <label>Rental income</label>
        <input
          type="number"
          value={rentalIncome} 
          onChange={(e) => setRentalIncome(e.target.value)}
        />
        <label>Spousal/Child Support</label>
        <input
          type="number"
          value={spousalChild} 
          onChange={(e) => setSpousalChild(e.target.value)}
        />
        <label>Government Benefits</label>
        <input
          type="number"
          value={govtBenefits} 
          onChange={(e) => setGovtBenefits(e.target.value)}
        />
        <label>Other income</label>
        <input
          type="number"
          value={otherIncome} 
          onChange={(e) => setOtherIncome(e.target.value)}
        />
      </form>

      <h3>Fixed Expenses</h3>
      <form className='FixedExpenses'>
        <label>Mortgage OR Rent</label>
        <input
          type="number"
          value={netIncome1} 
          onChange={(e) => setNetIncome1(e.target.value)}
        />
        <label>Net income #2</label>
        <input
          type="number"
          value={netIncome2} 
          onChange={(e) => setNetIncome2(e.target.value)}
        />
        <label>Rental income</label>
        <input
          type="number"
          value={rentalIncome} 
          onChange={(e) => setRentalIncome(e.target.value)}
        />
        <label>Spousal/Child Support</label>
        <input
          type="number"
          value={spousalChild} 
          onChange={(e) => setSpousalChild(e.target.value)}
        />
        <label>Government Benefits</label>
        <input
          type="number"
          value={govtBenefits} 
          onChange={(e) => setGovtBenefits(e.target.value)}
        />
        <label>Other income</label>
        <input
          type="number"
          value={otherIncome} 
          onChange={(e) => setOtherIncome(e.target.value)}
        />
      </form>
    </div>
  )

}

 
export default BudgetForm