"use client"


import { useState } from 'react'
import Image from 'next/image'


interface Photo {
  id: number
  src: string
  alt: string
  width: number
  height: number
  className: string

}

const photos: Photo[] = [
  { id: 1, width: 300, height: 300, className: "col-md-3", src: "/img/photos/IMG_6274.jpg", alt: "Photo 1" },
  { id: 2, width: 300, height: 300, className: "col-md-3", src: "/img/photos/IMG_6275.jpg", alt: "Photo 2" },
  { id: 3, width: 300, height: 300, className: "col-md-3", src: "/img/photos/1.png", alt: "Photo 3" },
  { id: 4, width: 300, height: 300, className: "col-md-3", src: "/img/photos/2.png", alt: "Photo 4" },
  { id: 5, width: 300, height: 300, className: "col-md-3", src: "/img/photos/3.png", alt: "Photo 5" },
  { id: 6, width: 300, height: 300, className: "col-md-3", src: "/img/photos/4.png", alt: "Photo 6" },
  { id: 7, width: 300, height: 300, className: "col-md-3", src: "/img/photos/5.png", alt: "Photo 7" },
  { id: 8, width: 300, height: 300, className: "col-md-3", src: "/img/photos/6.png", alt: "Photo 8" },
  { id: 9, width: 300, height: 300, className: "col-md-3", src: "/img/photos/7.png", alt: "Photo 9" },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const handleClose = () => setSelectedPhoto(null)
  const handleShow = (photo: Photo) => setSelectedPhoto(photo)

  return (
    <>

      <section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white "
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}>
        <div className="container pt-10 pb-10 pt-md-10 pb-md-10 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-1 mb-3 text-white">Galeria</h1>

            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">

          <div className="row gy-6 mb-12">
            {photos.map(({ width, height, id, src, className }) => (
              <div className={className} key={id}>
                <figure className="hover-scale rounded cursor-dark">
                  <a href={src} data-glightbox data-gallery="project-4">
                    <Image width={width} height={height} src={src} alt="demo" className="" />
                  </a>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}