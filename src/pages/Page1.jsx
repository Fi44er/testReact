import '../page.css'
import { useDispatch, useSelector } from "react-redux"

const Page1 = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <>
      <h1>Redux</h1>
      <div className="Button">
        <div style={{fontSize: 50}}>{cash}</div>
        <div style={{display: "flex", gridGap: 20}}>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        </div>
      </div>
    </>
  )
}

export default Page1
