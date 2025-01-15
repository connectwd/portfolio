import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import LinkWithIcon from "../atoms/links/socialLink";
import { socialLinks } from "src/config";

export default function SocialLinks() {
    return (
        <div className="flex text-lg gap-5 float-right transition-opacity duration-300 hover:opacity-90">
            <LinkWithIcon href={socialLinks.github} icon={FaGithub} />
            <LinkWithIcon href={socialLinks.linkedin} icon={FaLinkedinIn} />
            <LinkWithIcon href={socialLinks.email} icon={TfiEmail} />
        </div>
    );
}