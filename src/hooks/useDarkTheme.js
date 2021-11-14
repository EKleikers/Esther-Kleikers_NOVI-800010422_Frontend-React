import {useEffect} from 'react'

export default function useBrownBody() {
    useEffect(() => {
        document.body.style.backgroundColor = '#2E2929'

        return () => {
            document.body.style.backgroundColor = '#fff'
        }
    })
}


