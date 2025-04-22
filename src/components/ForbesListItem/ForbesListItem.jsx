import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css'
// const icons = [<FaRegThumbsUp key="1"/>, <MdPeople key="2"/>,<MdOutlineProductionQuantityLimits key="3"/>, <GiTreeDoor key="4"/>

//  ]
// const icons = [<BiDollarCircle key="1" color="#2196f3" size={22}/>, <FcBullish key="2"/>, <FcBearish key="3"/>]

const ForbesListItem = ({avatar, name, capital, isIncrease}) => {
  return(
   <>
  <img
    className={style.avatar}
    src={avatar}
    alt={name}
  />
  <h3 className={style.title}>{name}</h3>
  <span className={style.capital}>

    {capital} 

    <BiDollarCircle color="#2196f3" size={22} />
    {/* {icons[0]} */}

    {isIncrease?<FcBullish />:<FcBearish/>}

    {/* {isIncrease?icons[1]:icons[2]} */}

    {/* {isIncrease&&<FcBullish />}
    {!isIncrease&&<FcBearish />} */}

  </span>
</>)
};

export default ForbesListItem;
