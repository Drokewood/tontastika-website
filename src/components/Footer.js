import { FooterContainer, StyledFooter, FooterLink } from "../styles/Footer.style"
import { Flex } from "../styles/Flex.style"
import SocialIcons from "./SocialIcons"

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContainer>
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </li>
                        <li>+1-254-124-1897</li>
                        <li>example@Droke.com</li>
                    </ul>

                    <ul>
                        <li> About </li>
                        <li> What we do </li>
                        <li> FAQ </li>
                    </ul>

                    <ul>
                        <li> Career </li>
                        <li> <FooterLink to="/impressum"> Impressum </FooterLink> </li>
                        <li> <FooterLink to="/agb"> AGB </FooterLink> </li>
                    </ul>
                    <ul>
                        <SocialIcons  />
                    </ul>

                    
                </Flex>
                <p> &copy; Oktober 2023 Drokewood. All rights reserved </p>
            </FooterContainer>
        </StyledFooter>
        
    )
}