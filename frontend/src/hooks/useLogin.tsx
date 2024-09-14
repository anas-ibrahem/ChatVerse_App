import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

type LoginData = {
    username : string,
    password : string,
};


const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (dataReq: LoginData) => {
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataReq),
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.message);
			}

			setAuthUser(data);
		} catch (error: any) {
			console.error(error.message);
            toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;