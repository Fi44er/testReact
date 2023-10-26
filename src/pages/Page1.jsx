import "../page.css"
import { useDispatch, useSelector } from "react-redux"

const Page1 = () => {
  const dispatch = useDispatch() //изменение состояния
  const cash = useSelector((state) => state.cash.cash) //получаем состояние
  const customers = useSelector((state) => state.customers.customers)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer })
  }

  const removeCustomer = (customer) => {
    dispatch({type: "REMOVE_CUSTOMER", payload: customer.id})
  }

  return (
    <>
      <h1>Redux</h1>
      <div className="form">
        <div style={{ fontSize: 50 }}>{cash}</div>
        <div>
          <div className="bttonBlock">
            <button onClick={() => addCash(Number(prompt()))}>
              Пополнить счет
            </button>
            <button onClick={() => getCash(Number(prompt()))}>
              Снять со счета
            </button>
            <button onClick={() => addCustomer(prompt())}>
              Добавить клиента
            </button>
            <button onClick={() => removeCustomer(prompt())}>
              Удалить клиента
            </button>
          </div>
        </div>
        {Object.keys(customers).length > 0 ? (
          <div  style={{display: 'grid'}}>
            {customers.map((customer) => (
              <div onClick={() => removeCustomer(customer)}  key={customer.id} style={{border: '1px solid teal', cursor: 'pointer', marginBottom: 20}}>
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: 30 }}>Клиенты отсутствоют!</div>
        )}
      </div>
    </>
  )
}

export default Page1
