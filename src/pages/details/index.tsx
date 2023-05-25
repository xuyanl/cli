import { Outlet, useNavigate } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate()
    return (
        <div>
            DetailsDetailsDetailsDetailsDetails
            <Outlet />
            <div>
                <div
                    onClick={() => {
                        navigate('/details/home')
                    }}
                >
                    下一级
                </div>
                <div
                    onClick={() => {
                        navigate('/details/test')
                    }}
                >
                    go to Test
                </div>
            </div>
        </div>
    )
}

export default Details
