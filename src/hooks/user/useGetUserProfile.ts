import { useQuery } from "@tanstack/react-query"
import { getUserProfile } from "api/queries/get-user-profile"
import { QueryKeys } from "constants/enums";
import { debug } from "handlers/helpers/debugger";
import { useCatToken } from "hooks/auth/useCatToken"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "slices/userSlice";
import { GetUserProfileResponse } from "types/structs";

export const useGetUserProfile = () => {
      const { catToken } = useCatToken();
      const dispatch = useDispatch();
      const methods = useQuery<GetUserProfileResponse, any>({
            queryFn: () =>  getUserProfile(catToken),
            queryKey: [QueryKeys.getUserProfile],
            enabled: !!catToken
      })

      useEffect(() => {
            const {isSuccess, data} = methods;
            if(isSuccess){
                  dispatch(updateUser(data.data.data))
                  debug("info", "Updated user profile successfully!!!")
            }
      }, [methods.isSuccess, methods.data])

      return { ...methods }
}