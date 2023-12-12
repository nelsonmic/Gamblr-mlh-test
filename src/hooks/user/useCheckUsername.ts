
import { useQuery } from "@tanstack/react-query";
import { checkUsernameExists } from "api/queries/checkUsernameExists";
import { CheckUsername, CheckUsernameResponse } from "types/structs";

export const useCheckUsername = (payload : string ,enabled: boolean) => {
      const methods = useQuery<CheckUsernameResponse, any, CheckUsername>({
            queryFn: () => checkUsernameExists(payload),
            queryKey: ["checkUsername", payload],
            enabled: enabled
      })

      return {...methods}
}