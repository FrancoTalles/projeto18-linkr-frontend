import { Link } from "react-router-dom";
import { UsersContainer } from "./style";

export function Users({ setUsers, setName, id, username, userphoto, isfollowed }) {


    return (
        <Link to={`/user/${id}`}>
            <UsersContainer onClick={() => {
                setName("");
                setUsers([]);
            }}
                data-test="user-search"
            >
                <img src={userphoto} />
                <h1>{username}</h1>
                {isfollowed ?
                    <p>• following</p>
                    :
                    ""
                }
            </UsersContainer>
        </Link>

    );
}