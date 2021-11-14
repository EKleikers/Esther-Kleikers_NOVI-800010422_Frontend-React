
import {useEffect} from 'react'

function useBrownBody() {
    useEffect(() => {
        document.body.style.backgroundColor = '#2E2929'

        return () => {
            document.body.style.backgroundColor = '#fff'
        }
    })
}

export default useBrownBody
