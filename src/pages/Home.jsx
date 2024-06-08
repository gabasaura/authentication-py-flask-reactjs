import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-column flex-grow-1 w-75 mx-auto py-5 align-items-center">
                <h1 className="text-center">Hello</h1>
                <h3 className="mb-3 text-center">Que quieres hacer? ┐(￣∀￣)┌</h3>
                <div className="mt-5  p-0 border border-2 border-black justify-content-center">
                    <div className="text-center">
                        <Link to="/register">
                            <button className="btn btn-primary px-5 m-3">Regístrate</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn btn-primary px-5 m-3">O Identifícate!</button>
                        </Link>
                    </div>
                </div></div></div>
    )
}

export default Home