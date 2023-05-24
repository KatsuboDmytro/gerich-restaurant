import { useCallback, useState } from "react"

export const useToggle = (initialState) => {
    const [istoggle, setIsToggle] = useState(initialState);
    const toggle = useCallback(() => 
        setIsToggle(!istoggle), [istoggle]
    );
    return [istoggle, toggle];
}