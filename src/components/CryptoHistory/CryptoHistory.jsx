import style from "./CryptoHistory.module.css"
import { format } from 'date-fns'




const CryptoHistory = ({items}) => {

  return (
  <table className={style.table}>
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th>
    </tr>
  </thead>

  <tbody>

  {items.map((item, index)=>(
    <tr key = {item.id} className={style.tr}>
      <td className={style.td}>{index+1}</td>
      <td className={style.td}>{item.price}</td>
      <td className={style.td}>{item.amount}</td>
      <td className={style.td}>{format(new Date(item.date), 'MM/dd/yyyy, hh:mm a')}</td>
    </tr>
    )
  )}
    
    
  </tbody>
</table>

)
}

export default CryptoHistory;
