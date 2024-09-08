import { RotatingSquare } from 'react-loader-spinner';

export default function LoadingScreen() {
    return (
        <>
            <div className='h-screen flex justify-center items-center'>
                    <RotatingSquare
                        visible={true}
                        height="162"
                        width="162"
                        color="#4fa94d"
                        
                        ariaLabel="rotating-square-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
        </>
    )
}
