import { useEffect, useState } from 'react'

export default function Loading() {
  const [text, setText] = useState<string>('Loading')

  useEffect(() => {
    const stopper = `${text}...`

    setInterval(() => {
      text === stopper ? setText(text) : setText(text.concat('.'))
    }, 200)

    return () => {
      clearInterval()
    }
  }, [text])

  return (
    <>
      <h3 style={{ fontSize: '2.5rem', textAlign: 'center' }}>{text}</h3>
    </>
  )
}
