import { PortfolioContent } from "../styles/portfolio.style";
import { 
    PortfolioGalleryContainer, 
    PortfolioGalleryTitle,
    PortfolioGalleryGrid,
    PortfolioGalleryItem,
    PortfolioImage

 } from "../styles/PortfolioGallery.style";
import { portfolioImages } from "../data/images/PortfolioGalleryContent/portfolioImages";



export const PortfolioGallery = () => {
    return (
        <PortfolioContent>
            <PortfolioGalleryContainer>
                <PortfolioGalleryTitle>Portfolio Gallery - Coming Soon!</PortfolioGalleryTitle>
                <PortfolioGalleryGrid>
                    {/* Example items - replace with real portfolio items later */}
                    {portfolioImages.map(({id, image}) => (
                        <PortfolioGalleryItem key={id} style={{backgroundColor: '#f0f0f0'}}>
                            <PortfolioImage src={image} alt={`Portfolio Item ${id}`} />
                        </PortfolioGalleryItem>
                    ))}
                </PortfolioGalleryGrid>
            </PortfolioGalleryContainer>
        </PortfolioContent>
    )
}