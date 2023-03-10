import { useEffect, useState } from "react";
import { HeaderStyled, SuggestionsList, SuggestionsWrapper } from "./style";
import { DebounceInput } from 'react-debounce-input';
import { api } from "../../services/api.js";
import { Users } from "../Users/Users";



export default function Header() {
    const [name, setName] = useState("");

    const [users, setUsers] = useState([]);

    console.log(name);

    async function searchUsers(name) {
        if (name.length === 0) {
            setUsers([]);
        }

        try {
            const promise = await api.get(`/users/${name}`, {
                headers: {
                    Authorization: `Bearer a9cb3502-2a6a-4894-ab54-11e5905cb4eb`,
                },
            });

            setUsers(promise.data);

        } catch (error) {

        }
    }

    useEffect(() => {

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
                                    key={user.id}
                                    username={user.username}
                                    userphoto={user.pictureURL}
                                />
                            ))}
                        </SuggestionsList>
                    </SuggestionsWrapper>
                )}

            </div>

            <img src="https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141226221?dimensions=771x420&no_crop=true" />

        </HeaderStyled>
    );
}