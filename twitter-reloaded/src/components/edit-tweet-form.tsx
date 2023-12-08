import { useEffect, useState } from "react";
import styled from "styled-components";

const Modal = styled.div`

`;

export default function EditTweetForm(){
    const [isLoding, setLoading] = useState(false);
    const [editTweet, setTweet] = useState("");
    const [editFile, setFile] = useState<File | null>(null);

    const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweet(e.target.value);
    }
    const onFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if(files && files.length === 1){
            setFile(files[0]);
        }
    }
}