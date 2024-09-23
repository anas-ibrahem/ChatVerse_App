import { Dispatch, ReactNode, SetStateAction, createContext,useContext , useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// Define the AuthUserType type
type AuthUserType = {
	id: string;
	fullname: string;
	email: string;
	profilePic: string;
	gender: string;
};

const AuthContext = createContext<{
    // This specifies the structure of the context’s data.
	authUser: AuthUserType | null;
	setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
	isLoading: boolean;
}>({
    // Define the Default Values
	authUser: null,
	setAuthUser: () => {},
	isLoading: true,
});


export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider =
// Define the AuthContextProvider component
 ({ children }: { children: ReactNode }) => {
	const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchAuthUser = async () => {
			try {
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.message);
				}
				setAuthUser(data);
			} catch (error: any) {
				console.error(error);
				// toast.error(error.message);
			} finally {
				setIsLoading(false);
			}
		};

        // Call the fetchAuthUser function (UseEffect Make it Run Once When the Component is Mounted)
		fetchAuthUser();
	}, []);

	return (
		<AuthContext.Provider
        // Define the Values (Arguments)
			value={{
				authUser,
				isLoading,
				setAuthUser,
			}}
		>
			{children} {/*  The Whole APP */}
		</AuthContext.Provider>
	);
};