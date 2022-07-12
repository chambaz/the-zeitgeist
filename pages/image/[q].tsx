import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Image: NextPage = () => {
  const router = useRouter()
  const [generatedImages, setGeneratedImages] = useState(false)
  const { q } = router.query

  console.log(q)

  const generateImage = async (q) => {
    console.log('base-url', process.env.NEXT_PUBLIC_BASE_URL)
    const imageReq = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/image/${q}`
    )
    const imageJson = await imageReq.json()
    setGeneratedImages(imageJson)
  }

  useEffect(() => {
    if (!q) {
      return
    }
    generateImage(q)
  }, [q])

  return (
    <div className="flex items-center justify-center">
      {!generatedImages && <p className="mt-24">Generating images...</p>}
      {generatedImages && (
        <>
          {generatedImages?.result?.type === 'error' && (
            <p>Error generating image</p>
          )}
          {Array.isArray(generatedImages?.result) && (
            <div className="flex flex-col">
              {generatedImages.result.map((img, index) => {
                return <img key={index} src={img.generation.image_path} />
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Image