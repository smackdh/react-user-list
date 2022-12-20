import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div>{props.name}</div>
      <div>${props.age}</div>
    </li>
  );
};

export default UserItem;
