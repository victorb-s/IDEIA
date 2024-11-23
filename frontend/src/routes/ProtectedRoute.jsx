import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ condition, children }) => {
    return condition ? children : <Navigate to="/" />;
};

export default ProtectedRoute