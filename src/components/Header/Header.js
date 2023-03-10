import { useContext, useEffect, useState } from "react";
import { HeaderStyled, Logout, SuggestionsList, SuggestionsWrapper } from "./style";
import { DebounceInput } from 'react-debounce-input';
import { api } from "../../services/api.js";
import { Users } from "../Users/Users";
import { AuthContext } from "../../contexts/auth.context";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



export default function Header() {

    const { user } = useContext(AuthContext);

    const [name, setName] = useState("");

    const [users, setUsers] = useState([]);

    const [logout, setLogout] = useState(false);

    const navigate = useNavigate();

    function handleLogOut() {
        localStorage.clear();
        navigate("/");
    };

    async function searchUsers(name) {
        if (name.length === 0) {
            setUsers([]);
        }

        try {
            const promise = await api.get(`/users/${name}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            setUsers(promise.data);

        } catch (error) {

        }
    }

    useEffect(() => {
        if (!user.token) {
            navigate("/");
        }

        searchUsers(name);

    }, [name]);

    return (
        <HeaderStyled>
            <h1>linkr</h1>


            <div>
                <DebounceInput
                    placeholder="Search for people"
                    value={name}
                    minLength={3}
                    debounceTimeout={300}
                    onChange={(e) => setName(e.target.value)}
                />

                {users.length > 0 && (
                    <SuggestionsWrapper>
                        <SuggestionsList>
                            {users.map((user) => (
                                < Users
                                    setUsers={searchUsers}
                                    setName={setName}
                                    key={user.id}
                                    id={user.id}
                                    username={user.username}
                                    userphoto={user.pictureURL}
                                />
                            ))}
                        </SuggestionsList>
                    </SuggestionsWrapper>
                )}

            </div>
            <Logout onClick={() => setLogout(!logout)}>
                {!logout ?
                    <IoChevronDown
                        cursor="pointer"
                    />
                    :
                    <IoChevronUp
                    />
                }
                <img src={user.pictureURL} />
            </Logout>

            {logout && (
                <div className="logout" onClick={() => handleLogOut()}>
                    <p>Logout</p>
                </div>
            )}
        </HeaderStyled>
    );
}