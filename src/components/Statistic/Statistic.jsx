import Notification from '../Notification/Notification'

const Statistic = ({good, bad, neutral, total, positivePercent})=> {
return(
    <div>
    
    {total > 0 ? <ul>
       <li>Good:{good}</li>
       <li>Neutral: {neutral}</li>
       <li>Bad: {bad}</li>
       <li>Total: {total}</li>
       <li>Positive feedback: {positivePercent}%</li>
      </ul> : 
      <Notification message="There is no feedback"></Notification>}
    </div>
)}

export default Statistic