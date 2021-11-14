// hooks/useDarkBody.js
import { useEffect } from 'react'

function useGreyBody() {
    useEffect(() => {
        document.body.style.backgroundColor = '#282c34'

        return () => {
            document.body.style.backgroundColor = '#fff'
        }
    })
}

export default useGreyBody
