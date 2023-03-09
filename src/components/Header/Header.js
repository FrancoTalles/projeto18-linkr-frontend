import { useEffect, useState } from "react";
import { HeaderStyled } from "./style";
import { DebounceInput } from 'react-debounce-input';
import { api } from "../../services/api.js";



export default function Header() {
    const [name, setName] = useState("");

    const [users, setUsers] = useState([]);

    async function searchUsers(name) {
        console.log({ name });

        try {
            const promise = await api.get("/users", { name });

            console.log(promise.data);


        } catch (error) {

        }
    }

    useEffect(() => {

        searchUsers(name);

    }, [name]);

    return (
        <HeaderStyled>
            <h1>linkr</h1>
            <DebounceInput
                placeholder="Search for people"
                value={name}
                minLength={3}
                debounceTimeout={300}
                onChange={(e) => setName(e.target.value)}
            />

            <img src="https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141226221?dimensions=771x420&no_crop=true" />

        </HeaderStyled>
    );
}