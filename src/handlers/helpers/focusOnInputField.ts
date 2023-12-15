import { RefObject } from "react";

      type FormInputsRef = {
            handleInputFocus: () => void;
      };

     export  const focusInput = (ref: RefObject<FormInputsRef | null>) => {
            ref?.current?.handleInputFocus();
      };