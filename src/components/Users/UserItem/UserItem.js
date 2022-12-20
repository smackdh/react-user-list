import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <h2>{props.name}</h2>
      <div>Age: {props.age}</div>
    </li>
  );
};

export default UserItem;
