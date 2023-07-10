import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const navigate = useNavigate()

    return (
        <>
            <Button type="primary" onClick={() => navigate('/login')}>点击跳转/login</Button>
        </>
    )
}

export default Search