"use client";

// import appConfig from "@/config/appConfig";
import { UserProps } from "@/models";
import { setCurrentUser } from "@/redux/features";
import { useAppDispatch } from "@/redux/hooks";
import { checkSessionExpired } from "@/utils";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const SessionContainer = () => {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (session) {
            // check expired of session, require login again if expired
            checkSessionExpired(session); // session client

            // Fetch user data
            const user = session.user as UserProps;
            dispatch(setCurrentUser(user));
            console.log("session", session);
        }
    }, [session, dispatch]);

    return null;
};

export default SessionContainer;
