import ForbesListItem from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css'

const ForbesList = ({list}) => {
  console.log(list);
  
  return (

  <div className={style.board}>
  <div className={style.header}>
    <h2 className={style.title}>
      <span className={style.titleTop}>Forbes</span>
      <span className={style.titleBottom}>Leader board</span>
    </h2>
  </div>

  <ul className={style.list}>
     {list.map(({avatar, name, capital, isIncrease, id})=>(
     
        <li key = {id} className={style.item}>
           <ForbesListItem 
           avatar={avatar} 
           name={name}
           capital={capital}
           isIncrease={isIncrease}
           





           />
        </li>
     )
     )}

  </ul>
</div>
)

};

export default ForbesList;
