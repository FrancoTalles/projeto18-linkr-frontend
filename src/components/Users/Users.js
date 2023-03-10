import { UsersContainer } from "./style";

export function Users({ id, username, userphoto }) {
    return (
        <UsersContainer>
            <img src={userphoto} />
            <h1>{username}</h1>
        </UsersContainer>
    );
}