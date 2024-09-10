import React, { useEffect, useState } from 'react'

export default function useLocalStoragState(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) :
            initialState;
    });

    useEffect(
        function () {
            localStorage.setItem("watched", JSON.stringify(value))
        },
        [value]
    )
    return [value, setValue]
}
