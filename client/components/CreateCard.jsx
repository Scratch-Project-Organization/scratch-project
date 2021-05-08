import React, {useState} from 'react';


const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  return [ value, onChange ];
}
  
const CreateCard = props => {
  const [ taskName, taskNameOnChange ] = useInput('');
  const [ description, descriptionOnChange ] = useInput('');
  const [cards, setCards] = useState([{taskName: taskName, descripton: description}]);

  // define function for sending info to back end

  return(
    <div>
      <form>
        <input name="taskName" placeholder="Task Name" type="text" value={taskName} onChange={taskNameOnChange}/>
        <input name="description" placeholder="Description" type="text" value={description} onChange={descriptionOnChange}/>
        <button type="button" />
      </form>
      <h1>{cards}</h1>
    </div>

  );
};

  
export default CreateCard;