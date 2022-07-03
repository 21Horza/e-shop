import { useState } from "react"

export const useFetching = (callback) => {
    const [isLdng, setIsLdng] = useState(false)
    const [err, setErr] = useState('')

    const fetch = async () => {
        try {
            setIsLdng(true)
            await callback()
        } catch (e) {
            setErr(e.message)
        } finally {
            setIsLdng(false)
        }
    }

    return [fetch, isLdng, err]
}
