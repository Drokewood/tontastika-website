import { FaTwitter, FaTwitch, FaFacebook,FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from '../styles/SocialIcons.styled' 

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https://www.instagram.com/the_otterloon/'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/the_otterloon/'>
                    <FaTwitch />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/the_otterloon/'>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/the_otterloon/'>
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}