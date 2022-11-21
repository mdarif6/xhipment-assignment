import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  userDetails: {},
};

function authReducer(state, action) {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, userDetails: action.payload };

    case "LOGOUT":
      return { ...state, userDetails: {} };
    default:
      break;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <div>
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
