import { useState, useCallback, useEffect } from "react";
import {photos} from "../photos";
import Navigation from "../components/Navigation";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Head from "next/dist/next-server/lib/head";

const GalleryPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        setShowGallery(true);
    }, []);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            <Head>
                <title>Gallery</title>
            </Head>
            <div style={{background: 'linear-gradient(-9deg, #861657 0%, #861657 40%, #ffa69e 100%)'}}>
                <Navigation/>
            </div>
            <div className="container">
                {showGallery ? <Gallery photos={photos} onClick={openLightbox} /> : null}
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    );
};

export default GalleryPage;